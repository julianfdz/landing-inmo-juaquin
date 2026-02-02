const PoliticaCookies = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo 
                (ordenador, tablet, teléfono móvil) cuando los visita. Sirven para recordar sus preferencias, 
                facilitar la navegación y recopilar información estadística sobre el uso del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Tipos de cookies que utilizamos</h2>
              
              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Cookies técnicas o necesarias</h3>
              <p>
                Son esenciales para el funcionamiento del sitio web. Permiten navegar por el sitio y 
                utilizar sus funciones básicas. Sin estas cookies, el sitio no funcionaría correctamente.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Cookies de preferencias</h3>
              <p>
                Permiten recordar sus preferencias, como el idioma seleccionado, para ofrecer una 
                experiencia más personalizada en sus visitas futuras.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Cookies analíticas</h3>
              <p>
                Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando 
                información de forma anónima. Esta información nos permite mejorar continuamente 
                nuestros contenidos y servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies de terceros</h2>
              <p>
                Este sitio web puede utilizar servicios de terceros que, a su vez, pueden instalar 
                cookies en su dispositivo. Estos servicios están sujetos a sus propias políticas 
                de privacidad y cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. ¿Cómo gestionar las cookies?</h2>
              <p>
                Puede configurar su navegador para aceptar o rechazar todas las cookies, o para que 
                le notifique cuando se envía una cookie. Tenga en cuenta que si desactiva las cookies, 
                algunas funciones del sitio web podrían no funcionar correctamente.
              </p>
              <p className="mt-4">
                A continuación le indicamos cómo gestionar las cookies en los navegadores más comunes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Actualizaciones de esta política</h2>
              <p>
                Esta política de cookies puede ser actualizada periódicamente para adaptarse a cambios 
                legislativos o a nuevas funcionalidades del sitio web. Le recomendamos revisarla 
                periódicamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Más información</h2>
              <p>
                Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos a través 
                de los datos de contacto indicados en el Aviso Legal.
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

export default PoliticaCookies;
