import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("domainLookup", "routes/domainLookup.tsx"),
  route("faq", "routes/faq.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("example", "routes/example.tsx"),
  //authentication
  route('signup', 'routes/signup.tsx'),
  route('login', 'routes/login.tsx'),
  route("verify-email", "routes/verify-email.tsx"),
  route('verified', 'routes/verified.tsx'),
  // Protected client dashboard
  route('dashboard', 'routes/dashboard.tsx'),  // New protected dashboard
  route('dashboard/email-reset', 'routes/email-reset.tsx'),  // Sub-route for resets (optional; could embed in dashboard)
  // Add the catch-all route for 404 pages
  route("*", "components/notFound.tsx")
] satisfies RouteConfig;
