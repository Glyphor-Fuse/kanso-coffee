import Hero from "@/components/Hero";
import StatusTicker from "@/components/StatusTicker";
import MenuManifest from "@/components/MenuManifest";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
      <StatusTicker />
      <Hero />
      <MenuManifest />
      <Philosophy />
      <Footer />
    </main>
  );
};

export default Index;
