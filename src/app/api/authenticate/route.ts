import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";
import { protectedRoutes } from "@/resources";

/**
 * Per-route password authentication.
 *
 * Environment variables follow this convention:
 *   PAGE_ACCESS_PASSWORD_<ROUTE_KEY>=secret
 *
 * where <ROUTE_KEY> is the route path uppercased with slashes replaced by
 * underscores and leading underscore stripped.
 *
 * Examples:
 *   /gallery                        → PAGE_ACCESS_PASSWORD_GALLERY
 *   /work/some-project              → PAGE_ACCESS_PASSWORD_WORK_SOME_PROJECT
 *
 * Falls back to the generic PAGE_ACCESS_PASSWORD if no route-specific
 * variable is set.
 */
function routeToEnvKey(route: string): string {
  return route
    .replace(/^\//, "") // strip leading slash
    .replace(/[\/\-]/g, "_") // slashes and hyphens → underscores
    .toUpperCase();
}

function getPasswordForRoute(route: string): string | undefined {
  const routeKey = routeToEnvKey(route);
  return (
    process.env[`PAGE_ACCESS_PASSWORD_${routeKey}`] ??
    process.env.PAGE_ACCESS_PASSWORD
  );
}

function cookieNameForRoute(route: string): string {
  const routeKey = routeToEnvKey(route);
  return `authToken_${routeKey}`;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password, route } = body;

  if (!route || !protectedRoutes[route as keyof typeof protectedRoutes]) {
    return NextResponse.json({ message: "Invalid route" }, { status: 400 });
  }

  const correctPassword = getPasswordForRoute(route);

  if (!correctPassword) {
    console.error(
      `No password configured for route "${route}". ` +
        `Set PAGE_ACCESS_PASSWORD_${routeToEnvKey(route)} or PAGE_ACCESS_PASSWORD in your .env file.`,
    );
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true }, { status: 200 });

    response.headers.set(
      "Set-Cookie",
      cookie.serialize(cookieNameForRoute(route), "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      }),
    );

    return response;
  } else {
    return NextResponse.json(
      { message: "Incorrect password" },
      { status: 401 },
    );
  }
}
