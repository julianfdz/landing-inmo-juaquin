import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import willRogers from "@/assets/will-rogers.png";

const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="w-24 h-24 mx-auto rounded-full bg-muted overflow-hidden
              shadow-[0_8px_30px_-8px_rgba(255,255,255,0.3)]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src={willRogers} 
              alt="Will Rogers"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
          
          <motion.blockquote 
            className="text-3xl md:text-4xl font-serif italic leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            "{t('quote.text')}"
          </motion.blockquote>
          
          <motion.cite 
            className="text-xl not-italic text-primary-foreground/80 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            — {t('quote.author')}
          </motion.cite>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
