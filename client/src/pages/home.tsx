import Navigation from "@/components/layout/navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import JourneySection from "@/components/sections/journey-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/layout/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <JourneySection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
