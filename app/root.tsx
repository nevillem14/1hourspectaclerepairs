import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { Toaster } from "react-hot-toast";

export function meta() {
  return [
    { title: "Winter Shadow Designs" },
    { property: "og:site_name", content: "Winter Shadow Designs" },
    { property: "og:locale", content: "en_ZA" }, // Specifically targets the SA market
    // Default image if a specific page doesn't provide one
    {
      property: "og:image",
      content: "https://wsdxi.co.za/images/wsdxi-og-default-share-1200x630.jpg",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen pt-20">
        {/* Navbar pinned at top */}
        <Navbar />

        {/* Page content grows to push footer down */}
        <main className="flex-grow">{children}</main>

        {/* Footer sticks to bottom */}
        <Footer />

        {/* ⭐ React Hot Toast  */}
        <Toaster position="top-right" />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Layout>
      {/*Wrapped in layout: Keeps the site's look even when an error happens*/}
      <main className="pt-16 p-4 container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">{message}</h1>
        <p className="mt-4 text-lg text-gray-600">{details}</p>
        {stack && (
          <pre className="mt-8 w-full p-4 overflow-x-auto bg-gray-100 rounded text-left">
            <code>{stack}</code>
          </pre>
        )}
      </main>
    </Layout>
  );
}
