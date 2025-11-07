import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t('finalCta.title')}
          </h2>
          <Button
            size="lg"
            onClick={() => navigate('/contacto')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8 py-6"
          >
            {t('finalCta.button')}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
