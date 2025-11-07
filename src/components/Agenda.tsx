import { Card, CardContent } from "@/components/ui/card";
import { Clock, Music, Star, Users } from "lucide-react";

const Agenda = () => {
  const events = [
    {
      time: "10:00",
      title: "Concierto de Melendi",
      description: "El artista español nos deleitará con sus mejores hits",
      icon: Music,
      color: "text-primary"
    },
    {
      time: "11:00", 
      title: "Actuación de Los del Río",
      description: "¡La Macarena y muchos más éxitos que harán bailar a todos!",
      icon: Users,
      color: "text-accent"
    },
    {
      time: "12:00",
      title: "Fiesta con Paquito el Chocolatero",
      description: "Diversión asegurada con el animador más querido",
      icon: Star,
      color: "text-primary"
    },
    {
      time: "13:00",
      title: "Show especial: El Vicerrector bailando",
      description: "¡No te pierdas este momento único e irrepetible!",
      icon: Star,
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card" id="agenda">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            🎵 Programación del Evento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una agenda llena de música, diversión y momentos únicos que no podrás olvidar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-hero"></div>
            
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center mb-12 animate-slide-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Time badge */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-glow z-10">
                    <Clock className="w-6 h-6" />
                  </div>
                  
                  {/* Content card */}
                  <Card className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} ml-20 md:ml-0 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-6 h-6 ${event.color}`} />
                        <span className="text-2xl font-bold text-primary">{event.time}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-16 animate-bounce-in">
          <div className="inline-block bg-gradient-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-lg shadow-card">
            🎉 ¡Y muchas sorpresas más durante la noche!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;