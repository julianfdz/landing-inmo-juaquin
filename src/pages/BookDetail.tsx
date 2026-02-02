import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import libro1 from "@/assets/libro1-real.jpg";
import libro2 from "@/assets/libro2-real.jpg";

const booksData = [
  {
    id: "vol-1-comprar-viviendas",
    titleKey: "books.book1Title",
    introKey: "books.book1Intro",
    mainTextKey: "books.book1MainText",
    learnTitleKey: "books.book1LearnTitle",
    bulletKeys: [
      "books.book1Bullet1",
      "books.book1Bullet2",
      "books.book1Bullet3",
      "books.book1Bullet4",
      "books.book1Bullet5",
      "books.book1Bullet6"
    ],
    practicalNoteKey: "books.book1PracticalNote",
    bonusKey: "books.book1Bonus",
    collectionKey: "books.book1Collection",
    amazonUrl: "https://amzn.eu/d/8hUnTAN",
    image: libro1
  },
  {
    id: "vol-2-solicitar-hipotecas",
    titleKey: "books.book2Title",
    introKey: "books.book2Intro",
    mainTextKey: "books.book2MainText",
    learnTitleKey: "books.book2LearnTitle",
    bulletKeys: [
      "books.book2Bullet1",
      "books.book2Bullet2",
      "books.book2Bullet3",
      "books.book2Bullet4",
      "books.book2Bullet5",
      "books.book2Bullet6",
      "books.book2Bullet7"
    ],
    practicalNoteKey: "books.book2PracticalNote",
    bonusKey: "books.book2Bonus",
    collectionKey: "books.book2Collection",
    amazonUrl: "https://amzn.eu/d/6vOb3zr",
    image: libro2
  }
];

const BookDetail = () => {
  const { t } = useTranslation();
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [bookId]);

  const book = booksData.find(b => b.id === bookId);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('books.notFound')}</h1>
          <Button onClick={() => navigate("/")}>{t('books.backHome')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Button
          variant="ghost"
          className="mb-8 gap-2 animate-fade-in"
          onClick={() => navigate("/#books")}
        >
          <ArrowLeft className="h-4 w-4" />
          {t('books.backToBooks')}
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagen del libro */}
          <div className="animate-fade-in-delay-1">
            <div className="bg-muted/30 rounded-2xl p-6 flex items-center justify-center">
              <img
                src={book.image}
                alt={t(book.titleKey)}
                className="w-full max-w-xs h-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Información del libro */}
          <div className="space-y-6 animate-fade-in-delay-2">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {t(book.titleKey)}
            </h1>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg italic border-l-4 border-accent pl-4">
                {t(book.introKey)}
              </p>
              
              <p className="font-medium text-foreground">
                {t(book.mainTextKey)}
              </p>

              <div className="bg-muted/30 rounded-xl p-6 space-y-3">
                <h3 className="font-bold text-foreground text-lg">{t(book.learnTitleKey)}</h3>
                <ul className="space-y-2">
                  {book.bulletKeys.map((bulletKey, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>{t(bulletKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                <strong className="text-foreground">{t('books.note')}:</strong> {t(book.practicalNoteKey)}
              </p>

              <p>
                <strong className="text-foreground">🎁 {t('books.bonus')}:</strong> {t(book.bonusKey)}
              </p>

              <p className="text-sm text-muted-foreground/80 italic">
                {t(book.collectionKey)}
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 text-lg px-8"
                onClick={() => window.open(book.amazonUrl, '_blank')}
              >
                {t('books.cta')}
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
