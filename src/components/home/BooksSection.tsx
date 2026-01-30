import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info } from "lucide-react";
import libro1 from "@/assets/libro1-real.jpg";
import libro2 from "@/assets/libro2-real.jpg";

interface Book {
  id: string;
  title: string;
  shortDescription: string;
  amazonUrl: string;
  image: string;
}

const BooksSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const books: Book[] = [
    {
      id: "vol-1-comprar-viviendas",
      title: "Tu Negocio Inmobiliario. Vol. 1: Guía práctica para comprar viviendas en España",
      shortDescription: "Aprende a comprar una vivienda entendiendo cada paso del proceso, evitando errores habituales y tomando decisiones con criterio propio.",
      amazonUrl: "https://amzn.eu/d/8hUnTAN",
      image: libro1
    },
    {
      id: "vol-2-solicitar-hipotecas",
      title: "Tu Negocio Inmobiliario. Vol. 2: Guía práctica para solicitar hipotecas en España",
      shortDescription: "Solicita y negocia tu hipoteca entendiendo qué te ofrece realmente el banco, comparando ofertas con criterios objetivos y evitando cláusulas abusivas.",
      amazonUrl: "https://amzn.eu/d/6vOb3zr",
      image: libro2
    }
  ];

  return (
    <section id="books" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('books.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('books.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/4] overflow-hidden bg-muted/50">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-sm font-bold leading-tight line-clamp-2">{book.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {book.shortDescription}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-1.5 text-xs"
                    onClick={() => navigate(`/libro/${book.id}`)}
                  >
                    <Info className="h-3 w-3" />
                    {t('books.moreInfo')}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gap-1.5 text-xs"
                    onClick={() => window.open(book.amazonUrl, '_blank')}
                  >
                    Amazon
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
