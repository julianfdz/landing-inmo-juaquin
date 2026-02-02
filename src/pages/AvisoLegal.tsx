const AvisoLegal = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datos identificativos</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad 
                de la Información y Comercio Electrónico (LSSICE), se informa a los usuarios de los datos 
                del titular del sitio web:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Titular:</strong> Joaquín (TuNegocioInmobiliario.com)</li>
                <li><strong>Domicilio:</strong> [Dirección a completar]</li>
                <li><strong>Email de contacto:</strong> [Email a completar]</li>
                <li><strong>NIF:</strong> [NIF a completar]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Objeto</h2>
              <p>
                El presente sitio web tiene como finalidad proporcionar información sobre inversión inmobiliaria, 
                formación a través de publicaciones y recursos descargables, así como servicios de asesoramiento 
                relacionados con el sector inmobiliario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos del sitio web, incluyendo textos, imágenes, gráficos, diseño, logotipos, 
                iconos, software, así como cualquier otro material, están protegidos por la legislación española 
                e internacional sobre propiedad intelectual e industrial.
              </p>
              <p className="mt-4">
                Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier 
                otra forma de explotación de los contenidos sin autorización expresa del titular.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Condiciones de uso</h2>
              <p>
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos en 
                este sitio web, absteniéndose de emplearlos para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Realizar actividades ilícitas o contrarias a la buena fe.</li>
                <li>Provocar daños en los sistemas físicos y lógicos del sitio web o de terceros.</li>
                <li>Introducir o difundir virus informáticos o cualesquiera otros programas dañinos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Exclusión de responsabilidad</h2>
              <p>
                El titular no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran 
                derivarse del uso de los contenidos del sitio web. La información proporcionada tiene carácter 
                meramente orientativo y no sustituye el asesoramiento profesional personalizado.
              </p>
              <p className="mt-4">
                Los recursos descargables son modelos generales que el usuario deberá adaptar a su situación 
                particular, siendo recomendable consultar con profesionales cualificados cuando sea necesario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Legislación aplicable</h2>
              <p>
                Para la resolución de cualquier controversia que pudiera surgir en relación con el sitio web 
                o las actividades desarrolladas en él, será de aplicación la legislación española, 
                sometiéndose las partes a los Juzgados y Tribunales competentes.
              </p>
            </section>

            <p className="text-sm italic mt-8">
              Última actualización: Febrero 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;
