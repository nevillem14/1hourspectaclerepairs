import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Winter Shadow Designs" },
    { name: "description", content: "Winter Shadow Designs" },
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
