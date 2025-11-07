import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const resources = [
    {
      title: "Modelo Contrato de Arras",
      description: "Plantilla profesional en Word/PDF para formalizar contratos de arras en compraventas inmobiliarias.",
      format: "Word/PDF"
    },
    {
      title: "Modelo Contrato de Alquiler",
      description: "Contrato de alquiler completo y actualizado según la legislación vigente.",
      format: "Word/PDF"
    },
    {
      title: "Cuadro Excel Reparto IBI / Hipoteca",
      description: "Calculadora automática para gestionar gastos comunes en propiedades compartidas.",
      format: "Excel"
    },
    {
      title: "Checklist: Pasos para Comprar Vivienda",
      description: "Guía paso a paso con todos los puntos clave del proceso de compra inmobiliaria.",
      format: "PDF"
    }
  ];

  const handleDownload = (resourceTitle: string) => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Email requerido",
        description: "Por favor, introduce tu email para descargar el recurso",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "¡Descarga iniciada!",
      description: `Te hemos enviado "${resourceTitle}" a ${email}`
    });
    
    // Reset email after download
    setEmail("");
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{t('resources.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
            <p className="text-center text-lg mb-4">
              {t('resources.emailPrompt')}
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
              />
            </div>
          </div>

          <div className="grid gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold">{resource.title}</h3>
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        {resource.format}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(resource.title)}
                      className="gap-2"
                    >
                      <Download className="h-4 w-4" />
                      {t('resources.download')}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t('resources.newsletterTitle')}</h2>
          <p className="text-muted-foreground mb-6">
            {t('resources.newsletterDesc')}
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {t('resources.newsletterButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
