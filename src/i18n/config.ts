import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Sobre mi',
        services: 'Servicios',
        resources: 'Recursos',
        blog: 'Blog',
        contact: 'Contacto'
      },
      hero: {
        title: 'Invierte en inmuebles',
        titleBold: 'con confianza',
        subtitle: 'Descubre mi colección de libros sobre inversión inmobiliaria y accede a recursos prácticos, plantillas y asesoría personalizada para dar el siguiente paso.',
        cta: 'Explora mis libros'
      },
      books: {
        title: 'Mis Libros',
        subtitle: 'Guías prácticas para inversores inmobiliarios',
        cta: 'Ver en Amazon'
      },
      quote: {
        text: 'No esperes para comprar bienes raíces. Compra bienes raíces y espera.',
        author: 'Will Rogers'
      },
      finalCta: {
        title: 'Empieza hoy tu camino hacia la inversión inmobiliaria rentable',
        button: 'Contáctame'
      },
      about: {
        title: 'Sobre mí',
        subtitle: 'Construyendo patrimonio inmobiliario desde cero',
        intro1: 'Soy <strong>Joaquín</strong>, especialista en inversiones inmobiliarias con más de 10 años de experiencia en el sector. Mi trayectoria comenzó con una pregunta simple: ¿cómo puedo generar ingresos pasivos sin necesitar grandes capitales iniciales?',
        intro2: 'A lo largo de mi carrera, he ayudado a cientos de personas a dar sus primeros pasos en el mundo de la inversión inmobiliaria, logrando <strong>alta rentabilidad incluso con presupuestos bajos</strong>. Mi enfoque se centra en estrategias prácticas y replicables como Airbnb, pisos turísticos, compra-reforma-venta (house flipping) y gestión eficiente de propiedades.',
        intro3: 'He publicado varios <strong>libros prácticos</strong> donde explico paso a paso cómo invertir de forma segura y rentable, compartiendo mi experiencia real en el mercado. Mi misión es democratizar el acceso a la inversión inmobiliaria, mostrando que con la formación adecuada y las estrategias correctas, cualquiera puede construir un patrimonio sólido.',
        experienceTitle: 'Mi experiencia incluye:',
        exp1: '+50 propiedades gestionadas en modalidad Airbnb y alquiler turístico',
        exp2: '+20 proyectos de house flipping completados con éxito',
        exp3: 'Formación a más de 300 inversores principiantes',
        exp4: 'Autor de múltiples guías sobre inversión inmobiliaria'
      },
      services: {
        title: 'Servicios',
        subtitle: 'Soluciones profesionales para impulsar tu éxito en inversión inmobiliaria',
        ctaTitle: '¿Interesado en algún servicio?',
        ctaDesc: 'Contacta conmigo para una consulta inicial gratuita y descubre cómo puedo ayudarte',
        ctaButton: 'Contáctame'
      },
      resources: {
        title: 'Recursos Gratuitos',
        subtitle: 'Descarga plantillas, modelos y herramientas prácticas para tu inversión inmobiliaria',
        emailPrompt: 'Introduce tu email para acceder a las descargas gratuitas',
        download: 'Descargar',
        newsletterTitle: '¿Necesitas más recursos?',
        newsletterDesc: 'Suscríbete a mi newsletter para recibir contenido exclusivo, consejos y nuevos recursos cada semana',
        newsletterButton: 'Suscribirme a la newsletter'
      },
      blog: {
        title: 'Blog',
        subtitle: 'Artículos, consejos y experiencias sobre inversión inmobiliaria',
        all: 'Todos',
        readMore: 'Leer más',
        comingSoon: 'Próximamente más artículos...'
      },
      contact: {
        title: 'Contacto',
        subtitle: '¿Tienes dudas o quieres empezar tu proyecto? Estoy aquí para ayudarte',
        formTitle: 'Hablemos de tu proyecto',
        formDesc: 'Rellena el formulario y me pondré en contacto contigo en menos de 24 horas. También puedes escribirme directamente por email o WhatsApp.',
        name: 'Nombre completo',
        email: 'Email',
        phone: 'Teléfono (opcional)',
        message: 'Mensaje',
        send: 'Enviar mensaje',
        successTitle: '¡Mensaje enviado!',
        successDesc: 'Te responderé lo antes posible'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About me',
        services: 'Services',
        resources: 'Resources',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'Invest in real estate',
        titleBold: 'with confidence',
        subtitle: 'Discover my collection of books on real estate investment and access practical resources, templates and personalized advice to take the next step.',
        cta: 'Explore my books'
      },
      books: {
        title: 'My Books',
        subtitle: 'Practical guides for real estate investors',
        cta: 'View on Amazon'
      },
      quote: {
        text: "Don't wait to buy real estate. Buy real estate and wait.",
        author: 'Will Rogers'
      },
      finalCta: {
        title: 'Start your journey to profitable real estate investment today',
        button: 'Contact me'
      },
      about: {
        title: 'About me',
        subtitle: 'Building real estate wealth from scratch',
        intro1: 'I am <strong>Joaquín</strong>, a real estate investment specialist with over 10 years of experience in the sector. My journey began with a simple question: how can I generate passive income without needing large initial capitals?',
        intro2: 'Throughout my career, I have helped hundreds of people take their first steps in the world of real estate investment, achieving <strong>high profitability even with low budgets</strong>. My approach focuses on practical and replicable strategies such as Airbnb, vacation rentals, buy-renovate-sell (house flipping) and efficient property management.',
        intro3: 'I have published several <strong>practical books</strong> where I explain step by step how to invest safely and profitably, sharing my real market experience. My mission is to democratize access to real estate investment, showing that with proper training and the right strategies, anyone can build solid wealth.',
        experienceTitle: 'My experience includes:',
        exp1: '+50 properties managed in Airbnb and vacation rental modality',
        exp2: '+20 successfully completed house flipping projects',
        exp3: 'Training for over 300 beginner investors',
        exp4: 'Author of multiple guides on real estate investment'
      },
      services: {
        title: 'Services',
        subtitle: 'Professional solutions to boost your success in real estate investment',
        ctaTitle: 'Interested in any service?',
        ctaDesc: 'Contact me for a free initial consultation and discover how I can help you',
        ctaButton: 'Contact me'
      },
      resources: {
        title: 'Free Resources',
        subtitle: 'Download templates, models and practical tools for your real estate investment',
        emailPrompt: 'Enter your email to access free downloads',
        download: 'Download',
        newsletterTitle: 'Need more resources?',
        newsletterDesc: 'Subscribe to my newsletter to receive exclusive content, tips and new resources every week',
        newsletterButton: 'Subscribe to newsletter'
      },
      blog: {
        title: 'Blog',
        subtitle: 'Articles, tips and experiences about real estate investment',
        all: 'All',
        readMore: 'Read more',
        comingSoon: 'More articles coming soon...'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Have questions or want to start your project? I am here to help',
        formTitle: "Let's talk about your project",
        formDesc: 'Fill out the form and I will contact you within 24 hours. You can also write to me directly by email or WhatsApp.',
        name: 'Full name',
        email: 'Email',
        phone: 'Phone (optional)',
        message: 'Message',
        send: 'Send message',
        successTitle: 'Message sent!',
        successDesc: 'I will respond as soon as possible'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
