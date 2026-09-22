import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import AutomationSection from "@/components/sections/AutomationSection";
import ContactSection from "@/components/sections/ContactSection";
import DsaSection from "@/components/sections/DsaSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import Footer from "@/components/sections/Footer";
import FreelanceProjectsSection from "@/components/sections/FreelanceProjectsSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { STACK_TICKER } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Marquee items={STACK_TICKER} />
        <ExpertiseSection />
        <FreelanceProjectsSection />
        <ProjectsSection />
        <AutomationSection />
        <DsaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
