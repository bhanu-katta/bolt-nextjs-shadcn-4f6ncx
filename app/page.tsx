import { HeroSection } from "@/components/home/hero-section";
import { PopularServices } from "@/components/home/popular-services";
import { FeaturesSection } from "@/components/home/features-section";
import { AppSection } from "@/components/home/app-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PopularServices />
      <FeaturesSection />
      <AppSection />
    </div>
  );
}