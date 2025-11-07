import { useTranslation } from "react-i18next";
import willRogers from "@/assets/will-rogers.png";

const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto rounded-full bg-muted overflow-hidden">
            <img 
              src={willRogers} 
              alt="Will Rogers"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <blockquote className="text-3xl md:text-4xl font-serif italic leading-relaxed">
            "{t('quote.text')}"
          </blockquote>
          <cite className="text-xl not-italic text-primary-foreground/80">
            — {t('quote.author')}
          </cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
