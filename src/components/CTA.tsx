import { Button } from "@/components/ui/button";
import { Ticket, Users, Music, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero" id="entradas">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 rounded-full p-6 animate-bounce-in">
              <Ticket className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            ¡No te quedes sin tu entrada!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Únete a la fiesta universitaria más esperada del año. 
            Música, diversión y momentos únicos te esperan.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slide-in">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Music className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-white/80 text-sm">Actuaciones</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Users className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Estudiantes</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Star className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white">3h</div>
              <div className="text-white/80 text-sm">De diversión</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Ticket className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white">Gratis</div>
              <div className="text-white/80 text-sm">Para UJI</div>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              variant="hero" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-2xl px-12 py-6 animate-pulse-glow"
              onClick={() => window.open('https://www.fueujionline.es/qrnfue/fonline/cong/acceso_cong.php?idcgrs=431174&idioma=es', '_blank')}
            >
              🎟️ Reserva tu entrada aquí
            </Button>
            
            <p className="text-white/80 text-sm">
              * Entrada gratuita para estudiantes UJI con carné vigente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;