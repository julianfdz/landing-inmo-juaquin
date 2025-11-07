import { Building2, Calculator, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      icon: Building2,
      title: "Asesoría en Inversión Inmobiliaria",
      description: "Te ayudo a identificar oportunidades de inversión, analizar rentabilidades y crear estrategias personalizadas según tu presupuesto y objetivos.",
      features: [
        "Análisis de mercado y zonas rentables",
        "Estrategias de compra e inversión",
        "Gestión de Airbnb y pisos turísticos",
        "House flipping y reformas rentables"
      ]
    },
    {
      icon: Calculator,
      title: "Asesoría Fiscal y Contable",
      description: "Servicios especializados de asesoría fiscal y contable para optimizar la gestión de tus inversiones inmobiliarias.",
      features: [
        "Declaraciones fiscales optimizadas",
        "Planificación tributaria",
        "Gestión contable de propiedades",
        "Asesoramiento en deducciones"
      ]
    },
    {
      icon: FileText,
      title: "Mentorías Personalizadas",
      description: "Sesiones individuales donde te guío paso a paso en tu proyecto de inversión inmobiliaria, desde cero hasta tu primera propiedad rentable.",
      features: [
        "Sesiones 1 a 1 online o presencial",
        "Plan de acción personalizado",
        "Seguimiento de proyectos",
        "Acceso a recursos exclusivos"
      ]
    },
    {
      icon: Users,
      title: "Formación y Cursos",
      description: "Programas formativos completos sobre inversión inmobiliaria, desde nivel inicial hasta estrategias avanzadas de rentabilidad.",
      features: [
        "Cursos online y presenciales",
        "Material didáctico exclusivo",
        "Casos prácticos reales",
        "Comunidad de inversores"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-muted/30 rounded-2xl p-12 max-w-4xl mx-auto">
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
