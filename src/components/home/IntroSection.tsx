import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BookOpen, Download, Briefcase, GraduationCap } from "lucide-react";

const IntroSection = () => {
  const { t } = useTranslation();

  const features = [
    { icon: BookOpen, labelKey: "intro.volumes", sublabelKey: "intro.volumesDesc" },
    { icon: Download, labelKey: "intro.resources", sublabelKey: "intro.resourcesDesc" },
    { icon: Briefcase, labelKey: "intro.services", sublabelKey: "intro.servicesDesc" },
    { icon: GraduationCap, labelKey: "intro.training", sublabelKey: "intro.trainingDesc" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Main message */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('intro.mainText') }}
            />
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="font-semibold text-sm">{t(item.labelKey)}</span>
                <span className="text-xs text-muted-foreground">{t(item.sublabelKey)}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
