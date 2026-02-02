import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoTni from "@/assets/logo-tni.png";

const HomeHero = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  // El fade solo empieza después del 40% del scroll y termina al 100%
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0]);

  const scrollToBooks = () => {
    document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated gradient background with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"
        style={{ y: backgroundY }}
      />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Radial gradient accents with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,hsl(var(--accent)/0.08),transparent_40%)]" />
      </motion.div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-6"
          style={{ y: textY, opacity }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            INVIERTE EN INMUEBLES
            <motion.span 
              className="block text-accent mt-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              COMO UN PROFESIONAL
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Descubre la colección de guías prácticas de <strong className="text-foreground">Tu Negocio Inmobiliario</strong>, donde aprenderás de forma profesional y estructurada los aspectos esenciales de los cuatro procesos clave del sector: <span className="text-accent font-medium">comprar, vender, alquilar y solicitar hipotecas</span>.
          </motion.p>

          <motion.p 
            className="text-base text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Accede también a recursos descargables exclusivos para gestionar todas tus viviendas, realizar predicciones de ingresos y simular operaciones inmobiliarias con precisión. Y para llevar tu negocio inmobiliario al siguiente nivel, podrás contar con servicios especializados prestados por profesionales.
          </motion.p>

          <motion.p 
            className="text-base text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Con todo ello, avanzarás de forma sólida, estratégica y con una <strong className="text-foreground">curva de aprendizaje exponencial</strong> que te convertirá en un verdadero profesional inmobiliario.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button 
              size="lg"
              onClick={scrollToBooks}
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8 py-6 
                shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.4)]
                hover:shadow-[0_12px_40px_-8px_hsl(var(--accent)/0.5)]
                transition-all duration-300"
            >
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative flex items-center justify-center"
          style={{ y: logoY, opacity }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl rounded-full"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.img 
            src={logoTni} 
            alt="Tu Negocio Inmobiliario" 
            className="relative z-10 w-full max-w-md md:max-w-lg object-contain drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
