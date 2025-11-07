import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-concert.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-bounce-in">
          ¡Vive la Fiesta Universitaria 
          <span className="block text-accent">UJI 2025!</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-in">
          Música, diversión y sorpresas en el Paraninf de la UJI
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open('https://www.fueujionline.es/qrnfue/fonline/cong/acceso_cong.php?idcgrs=431174&idioma=es', '_blank')}
          >
            🎟️ Consigue tu entrada
          </Button>
          
          <div className="text-accent font-semibold text-lg">
            📅 Próximamente en 2025
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-primary-glow rounded-full animate-bounce delay-300"></div>
    </section>
  );
};

export default Hero;