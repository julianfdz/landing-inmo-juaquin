import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoTni from "@/assets/logo-tni.png";

const HomeHero = () => {
  const { t } = useTranslation();

  const scrollToBooks = () => {
    document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t('hero.title')}
            <span className="block text-accent mt-2">{t('hero.titleBold')}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl">
            {t('hero.subtitle')}
          </p>
          
          <Button 
            size="lg"
            onClick={scrollToBooks}
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8 py-6"
          >
            {t('hero.cta')}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="relative animate-slide-in">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl rounded-full" />
          <div className="relative bg-card/50 backdrop-blur-sm p-12 rounded-2xl border border-border shadow-card">
            <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-xl flex items-center justify-center p-8">
              <img 
                src={logoTni} 
                alt="Tu Negocio Inmobiliario" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
