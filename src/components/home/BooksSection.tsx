import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import BookCard3D from "./BookCard3D";
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
    <section id="books" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle texture background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('books.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('books.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {books.map((book, index) => (
            <BookCard3D
              key={book.id}
              {...book}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
