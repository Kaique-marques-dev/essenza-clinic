import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutEssenza from "@/components/AboutEssenza";
import ProceduresSection from "@/components/ProceduresSection";
import ResultsSection from "@/components/ResultsSection";
import SpecialistSection from "@/components/SpecialistSection";
import ClinicExperience from "@/components/ClinicExperience";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustSection />
      <AboutEssenza />
      <ProceduresSection />
      <ResultsSection />
      <SpecialistSection />
      <ClinicExperience />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}