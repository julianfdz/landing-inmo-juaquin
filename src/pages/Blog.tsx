import { Calendar, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const categories = ["Compra", "Hipoteca", "Venta", "Alquiler"];
  
  const posts = [
    {
      title: "10 errores comunes al comprar tu primera vivienda",
      excerpt: "Descubre los fallos más frecuentes que cometen los compradores novatos y cómo evitarlos para hacer una inversión inteligente.",
      category: "Compra",
      date: "15 de Marzo, 2025",
      readTime: "5 min"
    },
    {
      title: "Cómo conseguir la mejor hipoteca en 2025",
      excerpt: "Guía completa con estrategias para negociar condiciones favorables y ahorrar miles de euros en tu hipoteca.",
      category: "Hipoteca",
      date: "10 de Marzo, 2025",
      readTime: "8 min"
    },
    {
      title: "House flipping: mi primer proyecto rentable",
      excerpt: "Caso real de cómo compré, reformé y vendí mi primera propiedad generando un 30% de beneficio en 6 meses.",
      category: "Venta",
      date: "5 de Marzo, 2025",
      readTime: "6 min"
    },
    {
      title: "Airbnb vs Alquiler tradicional: ¿Qué es más rentable?",
      excerpt: "Análisis comparativo de rentabilidades, ventajas e inconvenientes de cada modalidad de alquiler.",
      category: "Alquiler",
      date: "1 de Marzo, 2025",
      readTime: "7 min"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 mb-12 flex-wrap justify-center animate-fade-in-delay-1">
            <button className="px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium">
              {t('blog.all')}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime} lectura</span>
                  <span className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-delay-3">
            <p className="text-muted-foreground">
              {t('blog.comingSoon')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
