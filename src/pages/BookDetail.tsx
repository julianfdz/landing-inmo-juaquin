import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import libro1 from "@/assets/libro1-real.jpg";
import libro2 from "@/assets/libro2-real.jpg";

const books = [
  {
    id: "vol-1-comprar-viviendas",
    title: "Tu Negocio Inmobiliario. Vol. 1: Guía práctica para comprar viviendas en España",
    intro: "Muchas personas compran una vivienda sin entender completamente el proceso. Se confía en la agencia, en el banco o en terceros, se firman documentos con prisas y se toman decisiones importantes sin tener una visión global de la operación.",
    mainText: "Esta guía práctica y estructurada te permite aprender a comprar una vivienda por ti mismo, entendiendo cada paso del proceso, sabiendo qué decisiones estás tomando y con qué consecuencias, y evitando errores habituales que pueden costar tiempo, dinero y problemas legales.",
    learnTitle: "Con esta guía aprenderás a:",
    bullets: [
      "Situar correctamente todas las fases del proceso de compra.",
      "Analizar viviendas e identificar oportunidades con criterio profesional.",
      "Evaluar precios, cargas, licencias y documentación antes de comprometerte.",
      "Negociar con seguridad y protegerte en contratos de arras y compraventa.",
      "Calcular los costes reales de adquisición y prever su impacto financiero.",
      "Coordinar correctamente notaría, Registro de la Propiedad y entidades financieras."
    ],
    practicalNote: "No es un libro para leer de principio a fin sin más, sino una guía práctica pensada para consultarse y utilizarse a medida que avanzas en el proceso de compra, y a la que podrás volver cada vez que afrontes una nueva operación inmobiliaria.",
    bonus: "Además, incluye acceso a recursos prácticos descargables: modelos de contrato, hojas de cálculo comparativas, checklists y herramientas para planificar tu compra de principio a fin.",
    collection: "Este volumen forma parte de la colección Tu Negocio Inmobiliario, una serie de guías prácticas que conforman un sistema integral para gestionar operaciones inmobiliarias con autonomía, conocimiento y visión patrimonial.",
    amazonUrl: "https://amzn.eu/d/8hUnTAN",
    image: libro1
  },
  {
    id: "vol-2-solicitar-hipotecas",
    title: "Tu Negocio Inmobiliario. Vol. 2: Guía práctica para solicitar hipotecas en España",
    intro: "En el proceso de adquirir una vivienda, la hipoteca suele ser el punto donde más decisiones se toman sin comprender del todo sus consecuencias. Muchas personas comparan únicamente la cuota mensual y firman confiando en lo que les ofrece el banco, sin tener una visión clara del coste real del préstamo ni de las condiciones que están aceptando.",
    mainText: "Esta guía práctica y estructurada te permite solicitar y negociar una hipoteca por ti mismo, entendiendo qué te ofrece realmente la entidad financiera y con qué margen de decisión cuentas en cada fase del proceso.",
    learnTitle: "Con esta guía aprenderás a:",
    bullets: [
      "Comprender las fases precontractual y contractual y su alcance jurídico.",
      "Diferenciar correctamente entre TIN y TAE y valorar su impacto real en el coste del préstamo.",
      "Comparar ofertas hipotecarias con criterios objetivos y financieros.",
      "Detectar cláusulas abusivas y condiciones desfavorables.",
      "Preparar y presentar correctamente la documentación necesaria ante el banco.",
      "Negociar productos vinculados con autonomía, claridad y criterio.",
      "Interpretar la escritura hipotecaria y el acta notarial de transparencia antes de firmar."
    ],
    practicalNote: "No es un libro para leer de principio a fin sin más, sino una guía práctica pensada para consultarse y utilizarse a medida que avanzas en el proceso de solicitud y negociación de una hipoteca.",
    bonus: "Además, incluye acceso a recursos prácticos descargables: simuladores hipotecarios, plantillas comparativas, checklists de documentación y herramientas para planificar tu financiación con precisión.",
    collection: "Este volumen forma parte de la colección Tu Negocio Inmobiliario, una serie de guías prácticas que conforman un sistema integral para gestionar operaciones inmobiliarias con autonomía, conocimiento y visión patrimonial.",
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

  const book = books.find(b => b.id === bookId);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Libro no encontrado</h1>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
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
          Volver a libros
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagen del libro */}
          <div className="animate-fade-in-delay-1">
            <div className="bg-muted/30 rounded-2xl p-6 flex items-center justify-center">
              <img
                src={book.image}
                alt={book.title}
                className="w-full max-w-xs h-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Información del libro */}
          <div className="space-y-6 animate-fade-in-delay-2">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {book.title}
            </h1>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg italic border-l-4 border-accent pl-4">
                {book.intro}
              </p>
              
              <p className="font-medium text-foreground">
                {book.mainText}
              </p>

              <div className="bg-muted/30 rounded-xl p-6 space-y-3">
                <h3 className="font-bold text-foreground text-lg">{book.learnTitle}</h3>
                <ul className="space-y-2">
                  {book.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                <strong className="text-foreground">Nota:</strong> {book.practicalNote}
              </p>

              <p>
                <strong className="text-foreground">🎁 Bonus:</strong> {book.bonus}
              </p>

              <p className="text-sm text-muted-foreground/80 italic">
                {book.collection}
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
