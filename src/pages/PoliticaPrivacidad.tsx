const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Responsable del tratamiento</h2>
              <p>
                De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 
                3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), 
                le informamos que los datos personales recabados serán tratados por:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Responsable:</strong> Joaquín (TuNegocioInmobiliario.com)</li>
                <li><strong>Email de contacto:</strong> [Email a completar]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Finalidad del tratamiento</h2>
              <p>
                Los datos personales que nos proporcione serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Gestionar las consultas realizadas a través del formulario de contacto.</li>
                <li>Enviar información relacionada con nuestros servicios y publicaciones, si ha dado su consentimiento.</li>
                <li>Gestionar la suscripción a nuestra newsletter.</li>
                <li>Mantener la relación comercial o profesional que pudiera establecerse.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Legitimación</h2>
              <p>
                La base legal para el tratamiento de sus datos es:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>El consentimiento del interesado para las finalidades indicadas.</li>
                <li>El interés legítimo del responsable para mantener la relación con clientes y usuarios.</li>
                <li>La ejecución de un contrato cuando se contraten servicios.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Conservación de datos</h2>
              <p>
                Los datos personales se conservarán mientras se mantenga la relación con el usuario y 
                durante el tiempo necesario para cumplir con las obligaciones legales aplicables. 
                Posteriormente serán eliminados de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Destinatarios</h2>
              <p>
                Los datos no serán cedidos a terceros, salvo obligación legal o cuando sea necesario 
                para la prestación del servicio solicitado. En caso de ser necesario compartir datos 
                con terceros, se informará previamente al usuario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Derechos del interesado</h2>
              <p>
                Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación 
                del tratamiento y portabilidad dirigiéndose al responsable del tratamiento a través 
                del email de contacto indicado.
              </p>
              <p className="mt-4">
                Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de 
                Protección de Datos (www.aepd.es) si considera que sus derechos no han sido atendidos 
                correctamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Seguridad</h2>
              <p>
                Se han adoptado las medidas técnicas y organizativas necesarias para garantizar la 
                seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o 
                acceso no autorizado.
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

export default PoliticaPrivacidad;
