import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Car } from "lucide-react";
import ujiBuilding from "@/assets/uji-building.jpg";

const Location = () => {
  return (
    <section className="py-20 bg-background" id="ubicacion">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            📍 Ubicación del Evento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos vemos en el corazón del campus universitario de la UJI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={ujiBuilding} 
                alt="Paraninf UJI" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Paraninf de la UJI</h3>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Campus del Riu Sec, Castellón</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6 animate-fade-in">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Dirección</h3>
                    <p className="text-muted-foreground">Paraninf de la Universitat Jaume I</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Av. de Vicent Sos Baynat, s/n<br/>
                  12071 Castellón de la Plana
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Car className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Cómo llegar</h3>
                    <p className="text-muted-foreground">Acceso fácil desde toda Castellón</p>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🚌 Autobús: Líneas urbanas hasta el campus</li>
                  <li>🚗 Coche: Amplio aparcamiento disponible</li>
                  <li>🚶 A pie: Desde el centro de Castellón</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Información adicional</h3>
                    <p className="text-muted-foreground">Todo lo que necesitas saber</p>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🎫 Entrada gratuita para estudiantes UJI</li>
                  <li>🥤 Bar y zona de descanso disponibles</li>
                  <li>📱 WiFi gratuito en todo el recinto</li>
                </ul>
              </CardContent>
            </Card>

            <Button 
              variant="cta" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://www.google.com/maps/place/Universitat+Jaume+I/@39.9938,0.0703,17z', '_blank')}
            >
              <Navigation className="w-5 h-5 mr-2" />
              Ver en Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;