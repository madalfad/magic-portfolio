import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const researchPosts = getPosts(["src", "app", "research", "posts"]).map(
    (post) => ({
      url: `https://${baseURL}/research/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }),
  );

  const works = getPosts(["src", "app", "projects", "projects"]).map(
    (post) => ({
      url: `https://${baseURL}/projects/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }),
  );

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `https://${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...researchPosts, ...works];
}
