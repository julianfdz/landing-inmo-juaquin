import Hero from "@/components/Hero";
import Agenda from "@/components/Agenda";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import StickyButton from "@/components/StickyButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Agenda />
      <Location />
      <CTA />
      <StickyButton />
    </div>
  );
};

export default Index;
