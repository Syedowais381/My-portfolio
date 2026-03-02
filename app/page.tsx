import Navbar from "@/components/Navbar";
import AutomationSection from "@/components/sections/AutomationSection";
import ContactSection from "@/components/sections/ContactSection";
import DsaSection from "@/components/sections/DsaSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <AutomationSection />
        <DsaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
