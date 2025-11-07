import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import libro1 from "@/assets/libro1.jpeg";
import libro2 from "@/assets/libro2.jpeg";
import libro3 from "@/assets/libro3.jpeg";

const BooksSection = () => {
  const { t } = useTranslation();

  const books = [
    {
      title: "Inversión Inmobiliaria desde Cero",
      description: "Aprende a invertir en bienes raíces con presupuestos bajos. Estrategias prácticas para dar tus primeros pasos en el mercado.",
      amazonUrl: "https://www.amazon.es",
      image: libro1
    },
    {
      title: "Airbnb y Pisos Turísticos Rentables",
      description: "Cómo transformar inmuebles en negocios altamente rentables con alquileres vacacionales. Casos reales y plantillas.",
      amazonUrl: "https://www.amazon.es",
      image: libro2
    },
    {
      title: "Compra, Reforma y Vende",
      description: "La guía definitiva del house flipping: detectar oportunidades, calcular rentabilidades, gestionar reformas y maximizar beneficios.",
      amazonUrl: "https://www.amazon.es",
      image: libro3
    }
  ];

  return (
    <section id="books" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('books.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('books.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {book.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => window.open(book.amazonUrl, '_blank')}
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
  );
};

export default BooksSection;
