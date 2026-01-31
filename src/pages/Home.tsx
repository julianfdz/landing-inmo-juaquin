import HomeHero from "@/components/home/HomeHero";
import BooksSection from "@/components/home/BooksSection";
import ResourcesCTA from "@/components/home/ResourcesCTA";
import QuoteSection from "@/components/home/QuoteSection";
import FinalCTA from "@/components/home/FinalCTA";
import AnimatedBackground from "@/components/decorative/AnimatedBackground";
import { AnimatedWave, AnimatedWaveLayered, AnimatedWaveSmooth, AnimatedCurve } from "@/components/decorative/SectionDividers";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated background pattern */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <HomeHero />
        
        {/* Divider: Hero → Books */}
        <AnimatedWaveLayered className="-mt-1 bg-transparent" />
        
        <BooksSection />
        
        {/* Divider: Books → Resources */}
        <AnimatedWave flip className="-mb-1" />
        
        <ResourcesCTA />
        
        {/* Divider: Resources → Quote */}
        <AnimatedWaveSmooth className="-mb-1" />
        
        <QuoteSection />
        
        {/* Divider: Quote → Final CTA */}
        <AnimatedCurve flip className="-mt-1" />
        
        <FinalCTA />
        
        {/* Final wave at bottom */}
        <AnimatedWave className="-mt-1" />
      </div>
    </div>
  );
};

export default Home;
