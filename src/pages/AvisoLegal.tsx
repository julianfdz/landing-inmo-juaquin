const AvisoLegal = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            
            {/* Titularidad */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Titularidad del sitio web</h2>
              <p>
                El sitio web <strong className="text-foreground">www.tunegocioinmobiliario.com</strong> es 
                titularidad de: <strong className="text-foreground">Joaquín Ignacio Molina Rodríguez</strong>
              </p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Responsable de los servicios profesionales:</h3>
                  <p>
                    Los servicios profesionales ofrecidos a través de este sitio web son prestados por{" "}
                    <strong className="text-foreground">Esmeralda González Rubio</strong>, con la colaboración 
                    de profesionales asociados.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-foreground">Titular de los contenidos y obras intelectuales:</h3>
                  <p>
                    <strong className="text-foreground">Joaquín Ignacio Molina Rodríguez</strong><br />
                    Autor de la colección Tu Negocio Inmobiliario y creador de los recursos digitales 
                    ofrecidos como obras intelectuales no personalizadas.
                  </p>
                </div>
              </div>
            </section>

            {/* Naturaleza del sitio web */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Naturaleza del sitio web</h2>
              <p className="mb-4">Este sitio web ofrece:</p>
              
              <ul className="space-y-4 list-none pl-0">
                <li className="pl-4 border-l-2 border-accent">
                  <strong className="text-foreground">Servicios de asesoramiento y acompañamiento en materia inmobiliaria</strong>, 
                  incluyendo estrategia de inversión, análisis de viabilidad de operaciones, solicitud de 
                  información registral, asesoría fiscal, contable e internacional vinculada a operaciones 
                  inmobiliarias, así como otros servicios adaptados a las necesidades del cliente.
                  <p className="mt-2">
                    Dichos servicios son prestados exclusivamente por <strong className="text-foreground">Esmeralda 
                    González Rubio</strong>, con la colaboración, en su caso, de profesionales asociados y 
                    asesores certificados en las distintas materias, siendo Esmeralda González Rubio la única 
                    responsable de la prestación de los servicios profesionales.
                  </p>
                </li>
                
                <li className="pl-4 border-l-2 border-accent">
                  <strong className="text-foreground">Recursos digitales de carácter informativo y formativo</strong>, 
                  tales como libros, modelos de contratos, plantillas, guías y otros materiales descargables, 
                  creados por <strong className="text-foreground">Joaquín Ignacio Molina Rodríguez</strong> como 
                  obras intelectuales originales no personalizadas, cuya adquisición no implica la prestación 
                  de asesoramiento profesional individualizado.
                </li>
              </ul>
              
              <p className="mt-4">
                El acceso al sitio web es gratuito. Algunos contenidos y servicios pueden requerir 
                contratación o compra previa conforme a las condiciones indicadas en cada caso.
              </p>
            </section>

            {/* Limitación de responsabilidades */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitación de responsabilidades</h2>
              <p>
                Los recursos descargables de esta web (contratos, plantillas, guías, tablas y documentos 
                similares) tienen carácter informativo y formativo, sin constituir asesoramiento jurídico, 
                fiscal o financiero.
              </p>
              <p className="mt-2 font-medium text-foreground">
                El uso de estos documentos es responsabilidad exclusiva del usuario.
              </p>
            </section>

            {/* Propiedad intelectual */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propiedad intelectual</h2>
              <p>
                Todos los contenidos de la web, incluidos textos, libros, recursos digitales, diseños y 
                materiales descargables, están protegidos por la normativa vigente de propiedad intelectual.
              </p>
              <p className="mt-2">
                Su reproducción, distribución o uso sin autorización está prohibido.
              </p>
              <p className="mt-2">
                Los recursos digitales creados por Joaquín Ignacio se comercializan bajo licencia de uso 
                no exclusiva para el usuario que los adquiera.
              </p>
            </section>

            {/* Condiciones de contratación */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Condiciones de contratación</h2>
              <p>
                Los servicios profesionales son prestados por colaboradores certificados, con condiciones 
                económicas, de pago y cancelación detalladas previamente a la contratación.
              </p>
              <p className="mt-2">
                De acuerdo con la normativa vigente en materia de protección al consumidor, los productos 
                digitales descargables no son susceptibles de devolución una vez que se ha efectuado el 
                acceso a los mismos.
              </p>
            </section>

            {/* Protección de datos */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Protección de datos</h2>
              <p>
                Los datos personales facilitados a través de los formularios de este sitio web serán 
                tratados de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la normativa española 
                vigente, con las siguientes finalidades y responsables del tratamiento:
              </p>
              
              <ul className="mt-4 space-y-4 list-none pl-0">
                <li className="pl-4 border-l-2 border-border">
                  En el caso de <strong className="text-foreground">consultas, solicitudes de información 
                  o contratación de servicios profesionales</strong>, los datos serán tratados por{" "}
                  <strong className="text-foreground">Esmeralda González Rubio</strong>, como responsable 
                  del tratamiento, con la finalidad de gestionar las comunicaciones, prestación de servicios, 
                  así como las obligaciones administrativas y fiscales derivadas de los mismos.
                </li>
                
                <li className="pl-4 border-l-2 border-border">
                  En el caso de <strong className="text-foreground">comunicaciones informativas, envío de 
                  noticias, novedades editoriales y contenidos de interés</strong> relacionados con la marca 
                  "Tu Negocio Inmobiliario", los datos serán tratados por{" "}
                  <strong className="text-foreground">Joaquín Ignacio Molina Rodríguez</strong>, como 
                  responsable del tratamiento, con dicha finalidad.
                </li>
              </ul>
              
              <p className="mt-4">
                La base jurídica del tratamiento es el consentimiento del usuario y, en su caso, la 
                ejecución de un contrato o la aplicación de medidas precontractuales.
              </p>
              <p className="mt-2">
                Los datos se conservarán durante el tiempo necesario para atender la finalidad para la 
                que fueron recabados y conforme a los plazos legales aplicables.
              </p>
              <p className="mt-2">
                Los datos no serán cedidos a terceros salvo obligación legal o cuando sea necesario para 
                la correcta prestación del servicio.
              </p>
              <p className="mt-4">
                El usuario podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, 
                limitación del tratamiento y portabilidad enviando un correo electrónico a{" "}
                <a href="mailto:contacto@tunegocioinmobiliario.com" className="text-accent hover:underline">
                  contacto@tunegocioinmobiliario.com
                </a>, indicando el derecho que desea ejercer y adjuntando documento acreditativo de su identidad.
              </p>
              <p className="mt-2">
                Asimismo, podrá presentar reclamación ante la Agencia Española de Protección de Datos 
                (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  www.aepd.es
                </a>) si considera que el tratamiento no se ajusta a la normativa vigente.
              </p>
            </section>

            {/* Enlaces externos */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Enlaces externos</h2>
              <p>
                Los enlaces a sitios externos presentes en esta web se ofrecen como referencia. 
                No se asume responsabilidad por los contenidos de dichas páginas.
              </p>
            </section>

            {/* Legislación aplicable */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legislación aplicable y jurisdicción</h2>
              <p>
                Este aviso legal se encuentra sujeto a la legislación española vigente. Cualquier 
                controversia que surja entre el usuario y la empresa se someterá a la jurisdicción 
                de los juzgados del domicilio del usuario.
              </p>
              <p className="mt-2">
                En aquellos casos en los que el domicilio del usuario no sea el lugar de celebración 
                del contrato, la competencia se atribuirá a los tribunales de la localidad de celebración 
                del contrato.
              </p>
            </section>

            <p className="text-sm italic mt-8 pt-6 border-t border-border">
              Última actualización: Febrero 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;
