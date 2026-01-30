import { Download, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();

  const availableResources = [
    {
      title: "Estructura de la Renta",
      description: "Documento explicativo sobre la estructura y componentes de la declaración de la renta.",
      format: "PDF",
      downloadUrl: "/downloads/estructura-renta.pdf"
    },
    {
      title: "Solicitud de Cancelación de Póliza",
      description: "Modelo de carta para solicitar la cancelación de póliza de seguro tras la venta del inmueble.",
      format: "Word",
      downloadUrl: "/downloads/solicitud-cancelacion-poliza.docx"
    }
  ];

  const comingSoonResources = [
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

  const handleDownload = (downloadUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">{t('resources.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Recursos disponibles */}
          <div className="mb-12 animate-fade-in-delay-1">
            <h2 className="text-2xl font-bold mb-6">Recursos Disponibles</h2>
            <div className="grid gap-6">
              {availableResources.map((resource, index) => (
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
                        onClick={() => handleDownload(resource.downloadUrl, resource.title)}
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

          {/* Próximamente */}
          <div className="animate-fade-in-delay-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-muted-foreground" />
              Próximamente
            </h2>
            <div className="grid gap-4">
              {comingSoonResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-muted/30 rounded-xl border border-border/50 p-6 opacity-70"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-muted-foreground">{resource.title}</h3>
                        <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                          {resource.format}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
