import HomeHero from "@/components/home/HomeHero";
import BooksSection from "@/components/home/BooksSection";
import ResourcesCTA from "@/components/home/ResourcesCTA";
import QuoteSection from "@/components/home/QuoteSection";
import FinalCTA from "@/components/home/FinalCTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <BooksSection />
      <ResourcesCTA />
      <QuoteSection />
      <FinalCTA />
    </div>
  );
};

export default Home;
