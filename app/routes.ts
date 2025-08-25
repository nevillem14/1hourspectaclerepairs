import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("domainLookup", "routes/domainLookup.tsx"),
  route("faq", "routes/faq.tsx"),
  route("pricing", "routes/pricing.tsx"),
  // Add the catch-all route for 404 pages
  route("*", "components/notFound.tsx")
] satisfies RouteConfig;
