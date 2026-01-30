import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowRight } from "lucide-react";

const ResourcesCTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const resources = [
    {
      icon: FileText,
      title: "Plantillas de contratos",
      description: "Modelos listos para usar"
    },
    {
      icon: Download,
      title: "Hojas de cálculo",
      description: "Análisis y simuladores"
    },
    {
      icon: FileText,
      title: "Checklists",
      description: "Guías paso a paso"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            También tienes disponibles{" "}
            <span className="text-accent">mis recursos</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Plantillas, hojas de cálculo, modelos de contrato y herramientas prácticas para acompañarte en cada operación inmobiliaria.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <resource.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            onClick={() => navigate("/recursos")}
            className="gap-2 text-lg px-8"
          >
            Ver todos los recursos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCTA;
