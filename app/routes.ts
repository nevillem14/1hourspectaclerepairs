import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("know-your-glasses", "routes/know-your-glasses.tsx"),
  
  // Add the catch-all route for 404 pages
  route("*", "components/notFound.tsx")
] satisfies RouteConfig;
