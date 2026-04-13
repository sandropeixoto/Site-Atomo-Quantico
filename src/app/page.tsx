import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ZodiacSection from "@/components/ZodiacSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getHomeContent } from "@/lib/content";

export default function Home() {
  const { meta, sections } = getHomeContent();

  return (
    <main className="min-h-screen bg-cosmic-dark text-white selection:bg-quantum-violet selection:text-white">
      <Header />
      
      {/* Hero Section - Map from sections[0] */}
      <Hero 
        title={sections[0]?.title || "Átomo Quântico"} 
        subtitle={sections[0]?.content.split('\n')[2] || "Sua Jornada de Elevação Cósmica"}
      />

      <FeatureGrid sections={sections} />
      
      <ZodiacSection section={sections.find(s => s.id.includes('Zodíacos'))} />
      
      <CTA />
      
      <Footer />
    </main>
  );
}
