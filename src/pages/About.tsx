import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 animate-fade-in">{t('about.title')}</h1>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1 animate-fade-in-delay-1">
              <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-2xl overflow-hidden border border-border">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl">👤</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground animate-fade-in-delay-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Joaquín Ignacio
              </h2>
              
              <p>
                <strong className="text-foreground font-medium">Autor de la colección Tu Negocio Inmobiliario</strong> y 
                desarrollador de una metodología propia orientada a estructurar y optimizar cada fase del proceso inmobiliario.
              </p>
              
              <p>
                Su trayectoria abarca la <strong className="text-foreground font-medium">gestión integral de operaciones 
                de inversión</strong> en distintos segmentos del mercado español, incluyendo vivienda urbana, propiedad 
                turística y terrenos rústicos destinados a explotación agrícola.
              </p>
              
              <p>
                A lo largo de su trayectoria ha participado en numerosos procesos de <strong className="text-foreground font-medium">compra 
                y venta, análisis de operaciones, evaluación de riesgos y viabilidad, negociación hipotecaria y 
                estructuración financiera</strong> de proyectos inmobiliarios, aplicando un enfoque que integra criterios 
                económicos, documentales y procedimentales para garantizar decisiones sólidas y replicables dentro de 
                cualquier estrategia de inversión.
              </p>
              
              <p>
                Asimismo, posee amplia experiencia en la <strong className="text-foreground font-medium">puesta en marcha 
                y administración de arrendamientos tradicionales y turísticos</strong>, así como en la organización 
                documental y operativa necesaria para mantener, de forma profesionalizada, un patrimonio inmobiliario.
              </p>
              
              <p>
                Su trabajo se centra en transformar esta experiencia práctica en <strong className="text-foreground font-medium">contenidos 
                formativos, guías técnicas y recursos aplicados</strong> que permiten al inversor comprender, evaluar y 
                ejecutar sus decisiones con criterio y seguridad.
              </p>
              
              <p>
                Como <strong className="text-foreground font-medium">fundador intelectual del proyecto Tu Negocio Inmobiliario</strong>, 
                Joaquín Ignacio aporta el marco conceptual, la metodología y las directrices estratégicas que sustentan 
                la plataforma, ofreciendo un modelo estructurado y orientado a la mejora continua del inversor.
              </p>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Quién presta los servicios</h3>
                <p>
                  Los servicios profesionales disponibles en esta web son prestados exclusivamente por{" "}
                  <strong className="text-foreground font-medium">profesionales colaboradores certificados</strong> en 
                  sus respectivas áreas (fiscalidad, contabilidad, arquitectura, etc.). Todo ello se realiza siguiendo 
                  la metodología formativa desarrollada por Joaquín Ignacio para el proyecto Tu Negocio Inmobiliario y 
                  en base a la normativa actual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
