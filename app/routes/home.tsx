import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WSDXI" },
    { name: "description", content: "Waterfall Software Development." },
  ];
}

export default function Home() {
  return (
    <section>
      <div>
        <Hero mx-0 my-0 p-0 />
      </div>
    </section>
  );
}
