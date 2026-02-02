import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info, Clock } from "lucide-react";
import libro1 from "@/assets/libro1-real.jpg";
import libro2 from "@/assets/libro2-real.jpg";
import libro3 from "@/assets/libro3-proximamente.png";
import libro4 from "@/assets/libro4-proximamente.png";

const BooksSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const books = [
    {
      id: "vol-1-comprar-viviendas",
      titleKey: "books.book1Title",
      descKey: "books.book1Desc",
      amazonUrl: "https://amzn.eu/d/8hUnTAN",
      image: libro1
    },
    {
      id: "vol-2-solicitar-hipotecas",
      titleKey: "books.book2Title",
      descKey: "books.book2Desc",
      amazonUrl: "https://amzn.eu/d/6vOb3zr",
      image: libro2
    },
    {
      id: "vol-3-alquilar-viviendas",
      titleKey: "books.book3Title",
      descKey: "books.book3Desc",
      image: libro3,
      comingSoon: true
    },
    {
      id: "vol-4-vender-viviendas",
      titleKey: "books.book4Title",
      descKey: "books.book4Desc",
      image: libro4,
      comingSoon: true
    }
  ];

  return (
    <section id="books" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('books.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('books.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 animate-fade-in group ${
                book.comingSoon 
                  ? 'opacity-90' 
                  : 'hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted/50 relative">
                <img 
                  src={book.image} 
                  alt={t(book.titleKey)}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    book.comingSoon ? 'grayscale-[30%]' : 'group-hover:scale-105'
                  }`}
                />
                {book.comingSoon && (
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 font-semibold text-sm shadow-lg">
                      <Clock className="h-4 w-4" />
                      {t('books.comingSoon')}
                    </div>
                  </div>
                )}
                {!book.comingSoon && (
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                )}
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-sm font-bold leading-tight line-clamp-2">{t(book.titleKey)}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {t(book.descKey)}
                </p>
                {book.comingSoon ? (
                  <div className="flex items-center justify-center py-2 text-muted-foreground text-xs">
                    <Clock className="h-3 w-3 mr-1.5" />
                    {t('books.availableSoon')}
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
