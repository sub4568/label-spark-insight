import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Comparison } from "@/components/landing/Comparison";
import { Features } from "@/components/landing/Features";
import { Regulation } from "@/components/landing/Regulation";
import { AccessForm } from "@/components/landing/AccessForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Labelring — Turn Labels into Intelligence" },
      {
        name: "description",
        content:
          "Labelring transforms static packaging into live, measurable data interfaces. Built for the 2026 Digital Product Passport era.",
      },
      { property: "og:title", content: "Labelring — Turn Labels into Intelligence" },
      {
        property: "og:description",
        content:
          "The intelligence layer for packaging: automated UK/EU compliance, real-time consumer signals, permissioned 1st-party data.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Comparison />
        <Features />
        <Regulation />
        <AccessForm />
      </main>
      <Footer />
    </div>
  );
}
