import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTilt } from "@/hooks/use-tilt";

interface BookCard3DProps {
  id: string;
  title: string;
  shortDescription: string;
  amazonUrl: string;
  image: string;
  index: number;
}

const BookCard3D = ({ id, title, shortDescription, amazonUrl, image, index }: BookCard3DProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { ref, tilt, handlers } = useTilt(12);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        perspective: "1000px",
      }}
      {...handlers}
    >
      <motion.div
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          scale: tilt.scale,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-card rounded-lg border border-border overflow-hidden 
          shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)]
          hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]
          transition-shadow duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div 
          className="aspect-[4/4] overflow-hidden bg-muted/50 relative"
          style={{ transform: "translateZ(20px)" }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/10 to-transparent" />
        </div>
        <div 
          className="p-4 space-y-3"
          style={{ transform: "translateZ(30px)" }}
        >
          <h3 className="text-sm font-bold leading-tight line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 gap-1.5 text-xs hover:shadow-md transition-shadow"
              onClick={() => navigate(`/libro/${id}`)}
            >
              <Info className="h-3 w-3" />
              {t('books.moreInfo')}
            </Button>
            <Button
              size="sm"
              className="flex-1 gap-1.5 text-xs hover:shadow-md transition-shadow"
              onClick={() => window.open(amazonUrl, '_blank')}
            >
              Amazon
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookCard3D;
