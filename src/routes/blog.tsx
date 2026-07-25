import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { RevealObserver } from "@/components/site/RevealObserver";

export const Route = createFileRoute("/blog")({
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </div>
  );
}
