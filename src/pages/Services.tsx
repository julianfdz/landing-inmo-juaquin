import { TrendingUp, FileSearch, Calculator, BookOpen, Globe, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      icon: TrendingUp,
      titleKey: "services.service1.title",
      descriptionKey: "services.service1.description",
      featuresKeys: [
        "services.service1.feature1",
        "services.service1.feature2",
        "services.service1.feature3",
        "services.service1.feature4"
      ]
    },
    {
      icon: FileSearch,
      titleKey: "services.service2.title",
      descriptionKey: "services.service2.description",
      featuresKeys: [
        "services.service2.feature1",
        "services.service2.feature2"
      ]
    },
    {
      icon: Calculator,
      titleKey: "services.service3.title",
      descriptionKey: "services.service3.description",
      featuresKeys: [
        "services.service3.feature1",
        "services.service3.feature2",
        "services.service3.feature3",
        "services.service3.feature4",
        "services.service3.feature5"
      ]
    },
    {
      icon: BookOpen,
      titleKey: "services.service4.title",
      descriptionKey: "services.service4.description",
      featuresKeys: [
        "services.service4.feature1",
        "services.service4.feature2",
        "services.service4.feature3"
      ]
    },
    {
      icon: Globe,
      titleKey: "services.service5.title",
      descriptionKey: "services.service5.description",
      featuresKeys: [
        "services.service5.feature1",
        "services.service5.feature2",
        "services.service5.feature3"
      ]
    },
    {
      icon: Settings,
      titleKey: "services.service6.title",
      descriptionKey: "services.service6.description",
      featuresKeys: [
        "services.service6.feature1",
        "services.service6.feature2"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
                <p className="text-muted-foreground text-sm mb-5 flex-grow">{t(service.descriptionKey)}</p>
                <ul className="space-y-2">
                  {service.featuresKeys.map((featureKey, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 text-sm">✓</span>
                      <span className="text-sm text-muted-foreground">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-muted/30 rounded-2xl p-12 max-w-4xl mx-auto animate-fade-in-delay-3">
          <h2 className="text-3xl font-bold mb-4">{t('services.ctaTitle')}</h2>
          <p className="text-muted-foreground mb-8">
            {t('services.ctaDesc')}
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contacto')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {t('services.ctaButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;