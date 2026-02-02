import { useState, useMemo } from "react";
import { Download, Clock, BarChart3, FileEdit, ListChecks, Award, FileSignature, Home, Calculator, LucideIcon, Search, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

interface Resource {
  title: string;
  description: string;
  format: string;
  icon: LucideIcon;
  downloadUrl?: string;
}

const Resources = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const availableResources: Resource[] = [
    {
      title: "Estructura de la Renta",
      description: "Documento explicativo sobre la estructura y componentes de la declaración de la renta.",
      format: "PDF",
      icon: BarChart3,
      downloadUrl: "/downloads/estructura-renta.pdf"
    },
    {
      title: "Solicitud de Cancelación de Póliza",
      description: "Modelo de carta para solicitar la cancelación de póliza de seguro tras la venta del inmueble.",
      format: "Word",
      icon: FileEdit,
      downloadUrl: "/downloads/solicitud-cancelacion-poliza.docx"
    },
    {
      title: "CheckList Proceso de Compra",
      description: "Lista de verificación completa con todos los pasos del proceso de compra de vivienda.",
      format: "PDF",
      icon: ListChecks,
      downloadUrl: "/downloads/checklist-proceso-compra.pdf"
    },
    {
      title: "Distintivos Turísticos Oficiales",
      description: "Guía con los distintivos turísticos oficiales y su significado para identificar alojamientos legales.",
      format: "PDF",
      icon: Award,
      downloadUrl: "/downloads/distintivos-turisticos-oficiales.pdf"
    },
    {
      title: "CheckList Proceso Hipotecario",
      description: "Lista de verificación con todos los pasos y documentos necesarios para solicitar una hipoteca.",
      format: "PDF",
      icon: ListChecks,
      downloadUrl: "/downloads/checklist-proceso-hipotecario.pdf"
    },
    {
      title: "Contrato de Arrendamiento Tradicional",
      description: "Modelo básico de contrato de arrendamiento para alquileres de larga duración según la LAU.",
      format: "Word",
      icon: Home,
      downloadUrl: "/downloads/contrato-arrendamiento-tradicional.docx"
    },
    {
      title: "Contrato de Arrendamiento Vacacional",
      description: "Modelo básico de contrato para alquileres vacacionales y de temporada.",
      format: "Word",
      icon: Palmtree,
      downloadUrl: "/downloads/contrato-arrendamiento-vacacional.docx"
    },
    {
      title: "Arras Penitenciales",
      description: "Modelo básico de contrato de arras penitenciales para reservar una compraventa inmobiliaria.",
      format: "Word",
      icon: FileSignature,
      downloadUrl: "/downloads/arras-penitenciales.docx"
    }
  ];

  const comingSoonResources: Resource[] = [
    {
      title: "Cuadro Excel Reparto IBI / Hipoteca",
      description: "Calculadora automática para gestionar gastos comunes en propiedades compartidas.",
      format: "Excel",
      icon: Calculator
    }
  ];

  const filteredResources = useMemo(() => {
    if (!searchQuery.trim()) return availableResources;
    const query = searchQuery.toLowerCase();
    return availableResources.filter(
      resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.format.toLowerCase().includes(query)
    );
  }, [searchQuery, availableResources]);

  const filteredComingSoon = useMemo(() => {
    if (!searchQuery.trim()) return comingSoonResources;
    const query = searchQuery.toLowerCase();
    return comingSoonResources.filter(
      resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.format.toLowerCase().includes(query)
    );
  }, [searchQuery, comingSoonResources]);

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
          {/* Barra de búsqueda */}
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar recursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>

          {/* Recursos disponibles */}
          <div className="mb-12 animate-fade-in-delay-1">
            <h2 className="text-2xl font-bold mb-6">
              Recursos Disponibles
              {searchQuery && (
                <span className="text-muted-foreground font-normal text-base ml-2">
                  ({filteredResources.length} resultado{filteredResources.length !== 1 ? 's' : ''})
                </span>
              )}
            </h2>
            {filteredResources.length > 0 ? (
              <div className="grid gap-6">
                {filteredResources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <resource.icon className="h-6 w-6 text-accent" />
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
                          onClick={() => handleDownload(resource.downloadUrl!, resource.title)}
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
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No se encontraron recursos con "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Próximamente */}
          {filteredComingSoon.length > 0 && (
            <div className="animate-fade-in-delay-2">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-muted-foreground" />
                Próximamente
              </h2>
              <div className="grid gap-4">
                {filteredComingSoon.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-muted/30 rounded-xl border border-border/50 p-6 opacity-70"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <resource.icon className="h-6 w-6 text-muted-foreground" />
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;