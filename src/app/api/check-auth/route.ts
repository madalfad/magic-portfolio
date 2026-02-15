import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

/**
 * Derive the route-scoped cookie name from a route path.
 *
 * Must match the logic in the /api/authenticate route.
 */
function routeToEnvKey(route: string): string {
  return route
    .replace(/^\//, "")
    .replace(/[\/\-]/g, "_")
    .toUpperCase();
}

function cookieNameForRoute(route: string): string {
  const routeKey = routeToEnvKey(route);
  return `authToken_${routeKey}`;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get("route") || "";

  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = cookie.parse(cookieHeader);

  const cookieName = route ? cookieNameForRoute(route) : "";

  if (cookieName && cookies[cookieName] === "authenticated") {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
