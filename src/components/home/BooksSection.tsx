import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import libro1 from "@/assets/libro1-real.jpg";
import libro2 from "@/assets/libro2-real.jpg";

interface Book {
  title: string;
  shortDescription: string;
  fullDescription: string;
  amazonUrl: string;
  image: string;
}

const BooksSection = () => {
  const { t } = useTranslation();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const books: Book[] = [
    {
      title: "Tu Negocio Inmobiliario. Vol. 1: Guía práctica para comprar viviendas en España",
      shortDescription: "Aprende a comprar una vivienda entendiendo cada paso del proceso, evitando errores habituales y tomando decisiones con criterio propio.",
      fullDescription: `Muchas personas compran una vivienda sin entender completamente el proceso. Se confía en la agencia, en el banco o en terceros, se firman documentos con prisas y se toman decisiones importantes sin tener una visión global de la operación.

Esta guía práctica y estructurada te permite aprender a comprar una vivienda por ti mismo, entendiendo cada paso del proceso, sabiendo qué decisiones estás tomando y con qué consecuencias, y evitando errores habituales que pueden costar tiempo, dinero y problemas legales.

Con esta guía aprenderás a:

• Situar correctamente todas las fases del proceso de compra.
• Analizar viviendas e identificar oportunidades con criterio profesional.
• Evaluar precios, cargas, licencias y documentación antes de comprometerte.
• Negociar con seguridad y protegerte en contratos de arras y compraventa.
• Calcular los costes reales de adquisición y prever su impacto financiero.
• Coordinar correctamente notaría, Registro de la Propiedad y entidades financieras.

No es un libro para leer de principio a fin sin más, sino una guía práctica pensada para consultarse y utilizarse a medida que avanzas en el proceso de compra, y a la que podrás volver cada vez que afrontes una nueva operación inmobiliaria.

Además, incluye acceso a recursos prácticos descargables: modelos de contrato, hojas de cálculo comparativas, checklists y herramientas para planificar tu compra de principio a fin.

Este volumen forma parte de la colección Tu Negocio Inmobiliario, una serie de guías prácticas que conforman un sistema integral para gestionar operaciones inmobiliarias con autonomía, conocimiento y visión patrimonial.`,
      amazonUrl: "https://amzn.eu/d/8hUnTAN",
      image: libro1
    },
    {
      title: "Tu Negocio Inmobiliario. Vol. 2: Guía práctica para solicitar hipotecas en España",
      shortDescription: "Solicita y negocia tu hipoteca entendiendo qué te ofrece realmente el banco, comparando ofertas con criterios objetivos y evitando cláusulas abusivas.",
      fullDescription: `En el proceso de adquirir una vivienda, la hipoteca suele ser el punto donde más decisiones se toman sin comprender del todo sus consecuencias. Muchas personas comparan únicamente la cuota mensual y firman confiando en lo que les ofrece el banco, sin tener una visión clara del coste real del préstamo ni de las condiciones que están aceptando.

Esta guía práctica y estructurada te permite solicitar y negociar una hipoteca por ti mismo, entendiendo qué te ofrece realmente la entidad financiera y con qué margen de decisión cuentas en cada fase del proceso.

Con esta guía aprenderás a:

• Comprender las fases precontractual y contractual y su alcance jurídico.
• Diferenciar correctamente entre TIN y TAE y valorar su impacto real en el coste del préstamo.
• Comparar ofertas hipotecarias con criterios objetivos y financieros.
• Detectar cláusulas abusivas y condiciones desfavorables.
• Preparar y presentar correctamente la documentación necesaria ante el banco.
• Negociar productos vinculados con autonomía, claridad y criterio.
• Interpretar la escritura hipotecaria y el acta notarial de transparencia antes de firmar.

No es un libro para leer de principio a fin sin más, sino una guía práctica pensada para consultarse y utilizarse a medida que avanzas en el proceso de solicitud y negociación de una hipoteca.

Además, incluye acceso a recursos prácticos descargables: simuladores hipotecarios, plantillas comparativas, checklists de documentación y herramientas para planificar tu financiación con precisión.

Este volumen forma parte de la colección Tu Negocio Inmobiliario, una serie de guías prácticas que conforman un sistema integral para gestionar operaciones inmobiliarias con autonomía, conocimiento y visión patrimonial.`,
      amazonUrl: "https://amzn.eu/d/6vOb3zr",
      image: libro2
    }
  ];

  return (
    <>
      <section id="books" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('books.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('books.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedBook(book)}
              >
                <div className="overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold leading-tight">{book.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {book.shortDescription}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(book.amazonUrl, '_blank');
                    }}
                  >
                    {t('books.cta')}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold pr-8 leading-tight">
              {selectedBook?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 pt-2">
            <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
              {selectedBook?.fullDescription}
            </p>
            <Button
              className="w-full gap-2"
              size="lg"
              onClick={() => window.open(selectedBook?.amazonUrl, '_blank')}
            >
              {t('books.cta')}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BooksSection;
