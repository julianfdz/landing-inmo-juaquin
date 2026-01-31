import HomeHero from "@/components/home/HomeHero";
import BooksSection from "@/components/home/BooksSection";
import ResourcesCTA from "@/components/home/ResourcesCTA";
import QuoteSection from "@/components/home/QuoteSection";
import FinalCTA from "@/components/home/FinalCTA";
import AnimatedBackground from "@/components/decorative/AnimatedBackground";
import { WaveDivider, WaveDividerLayered, CurvedDivider, TiltedDivider } from "@/components/decorative/SectionDividers";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated background pattern */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <HomeHero />
        
        {/* Divider: Hero → Books */}
        <WaveDividerLayered className="-mt-1 bg-transparent" />
        
        <BooksSection />
        
        {/* Divider: Books → Resources */}
        <WaveDivider flip className="-mb-1" color="hsl(var(--background))" />
        
        <ResourcesCTA />
        
        {/* Divider: Resources → Quote */}
        <TiltedDivider className="-mb-1" />
        
        <QuoteSection />
        
        {/* Divider: Quote → Final CTA */}
        <CurvedDivider flip className="-mt-1" color="hsl(var(--background))" />
        
        <FinalCTA />
      </div>
    </div>
  );
};

export default Home;
