import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import { useState, useEffect } from "react";

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      variant="sticky"
      size="sticky"
      className="animate-bounce-in"
      onClick={() => window.open('https://www.fueujionline.es/qrnfue/fonline/cong/acceso_cong.php?idcgrs=431174&idioma=es', '_blank')}
      title="Consigue tu entrada"
    >
      <Ticket className="w-8 h-8" />
    </Button>
  );
};

export default StickyButton;