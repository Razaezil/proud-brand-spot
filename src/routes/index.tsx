import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/rebel/Navbar";
import { Hero } from "@/components/rebel/Hero";
import { Marquee } from "@/components/rebel/Marquee";
import { ProductGrid } from "@/components/rebel/ProductGrid";
import { Lookbook } from "@/components/rebel/Lookbook";
import { Manifesto } from "@/components/rebel/Manifesto";
import { Newsletter } from "@/components/rebel/Newsletter";
import { Footer } from "@/components/rebel/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <ProductGrid />
      <Lookbook />
      <Manifesto />
      <Newsletter />
      <Footer />
    </main>
  );
}
