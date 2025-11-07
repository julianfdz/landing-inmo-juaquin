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
