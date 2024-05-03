import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { TechStack } from "@/components/tech-stack";
import { WhoWeAre } from "@/components/who-we-are";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <WhoWeAre />
      <TechStack />
    </main>
  );
}
