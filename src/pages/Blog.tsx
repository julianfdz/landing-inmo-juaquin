import { motion } from "framer-motion";
import { BookOpen, FileText, TrendingUp, Home, Wallet, Key } from "lucide-react";

const Blog = () => {
  const topics = [
    { icon: Home, label: "Comprar" },
    { icon: TrendingUp, label: "Vender" },
    { icon: Key, label: "Alquilar" },
    { icon: Wallet, label: "Hipoteca" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          
          <motion.div
            className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En este espacio encontrarás artículos prácticos sobre inversión, gestión y estrategia inmobiliaria. 
              Contenido claro, directo y orientado a que cualquier persona quiera entender cómo funcionan los 
              procesos clave del sector.
            </p>
            
            {/* Topics icons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <topic.icon className="h-4 w-4 text-accent" />
                  <span>{topic.label}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Publicamos guías, análisis, novedades relevantes y contenido de apoyo que complementa los 
              recursos y volúmenes de <strong className="text-foreground">Tu Negocio Inmobiliario</strong>. 
              Todo explicado con un enfoque sencillo, estructurado y aplicable.
            </p>
          </motion.div>
        </div>

        {/* Coming soon state */}
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-muted/30 rounded-2xl border border-border/50 p-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
              <FileText className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">Próximamente</h2>
            <p className="text-muted-foreground">
              Estamos preparando contenido de calidad. Pronto publicaremos los primeros artículos.
            </p>
          </div>
        </motion.div>

        {/* Legal disclaimer */}
        <motion.div 
          className="max-w-2xl mx-auto mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs text-muted-foreground/70 italic">
            El contenido del blog tiene carácter informativo y divulgativo. 
            No constituye asesoramiento jurídico, fiscal o financiero.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
