const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Sobre mí</h1>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-2xl overflow-hidden border border-border">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl">👤</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Construyendo patrimonio inmobiliario desde cero
              </h2>
              
              <p>
                Soy <strong className="text-foreground">Joaquín</strong>, especialista en inversiones inmobiliarias con más de 10 años de experiencia en el sector. Mi trayectoria comenzó con una pregunta simple: ¿cómo puedo generar ingresos pasivos sin necesitar grandes capitales iniciales?
              </p>

              <p>
                A lo largo de mi carrera, he ayudado a cientos de personas a dar sus primeros pasos en el mundo de la inversión inmobiliaria, logrando <strong className="text-foreground">alta rentabilidad incluso con presupuestos bajos</strong>. Mi enfoque se centra en estrategias prácticas y replicables como Airbnb, pisos turísticos, compra-reforma-venta (house flipping) y gestión eficiente de propiedades.
              </p>

              <p>
                He publicado varios <strong className="text-foreground">libros prácticos</strong> donde explico paso a paso cómo invertir de forma segura y rentable, compartiendo mi experiencia real en el mercado. Mi misión es democratizar el acceso a la inversión inmobiliaria, mostrando que con la formación adecuada y las estrategias correctas, cualquiera puede construir un patrimonio sólido.
              </p>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Mi experiencia incluye:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span>+50 propiedades gestionadas en modalidad Airbnb y alquiler turístico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span>+20 proyectos de house flipping completados con éxito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span>Formación a más de 300 inversores principiantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span>Autor de múltiples guías sobre inversión inmobiliaria</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
