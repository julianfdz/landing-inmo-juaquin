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
        cta: 'Ver en Amazon',
        moreInfo: 'Más info'
      },
      quote: {
        text: 'No esperes para comprar bienes raíces. Compra bienes raíces y espera.',
        author: 'Will Rogers'
      },
      finalCta: {
        title: 'Empieza tu camino hacia la inversión inmobiliaria premeditada',
        subtitle: 'Aprende a controlar todo el proceso y mantente actualizado ante cualquier novedad.',
        newsletter: 'Suscríbete a la newsletter para recibir novedades legislativas, contenido exclusivo y consejos inmobiliarios.',
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
        ctaDesc: 'Contacta con nosotros y descubre cómo podemos ayudarte para dar el siguiente paso.',
        ctaButton: 'Contáctanos',
        service1: {
          title: 'Diseño de Estrategias de Inversión',
          description: 'Diseño de estrategias de inversión adaptadas a tus objetivos para maximizar el rendimiento de tu patrimonio inmobiliario.',
          feature1: 'Análisis de viabilidad de operaciones',
          feature2: 'Comparación de productos y escenarios',
          feature3: 'Evaluación de riesgos y oportunidades',
          feature4: 'Optimización del rendimiento a corto y largo plazo'
        },
        service2: {
          title: 'Solicitud de Notas Simples Registrales',
          description: 'Obtén de forma rápida y segura la información registral de cualquier inmueble.',
          feature1: 'Gestión directa de solicitudes',
          feature2: 'Entrega en formato digital'
        },
        service3: {
          title: 'Asesoría Fiscal',
          description: 'Planificación y gestión fiscal especializada en inversión inmobiliaria, ofrecida por asesores fiscales certificados.',
          feature1: 'Asesoramiento fiscal a personas físicas y jurídicas',
          feature2: 'Declaración de la renta',
          feature3: 'Presentación de modelos e impuestos (compra, venta, alquiler)',
          feature4: 'Gestión del depósito de fianzas por arrendamiento',
          feature5: 'Optimización fiscal de operaciones inmobiliarias'
        },
        service4: {
          title: 'Asesoría Contable',
          description: 'Organización y seguimiento contable para propietarios e inversores inmobiliarios, ofrecida por asesores contables certificados.',
          feature1: 'Asesoramiento contable a personas físicas y jurídicas',
          feature2: 'Contabilidad de operaciones inmobiliarias',
          feature3: 'Servicios contables para empresas y autónomos (balance, libros obligatorios, etc.)'
        },
        service5: {
          title: 'Asesoramiento Internacional',
          description: 'Orientación práctica para extranjeros residentes o no residentes que deseen invertir en España.',
          feature1: 'Análisis fiscal general',
          feature2: 'Trámites frecuentes',
          feature3: 'Acompañamiento informativo en compra, alquiler o gestión patrimonial'
        },
        service6: {
          title: 'Servicios Adaptados a tus Necesidades',
          description: 'Si tienes un proyecto concreto y necesitas apoyo adicional, cuéntanos qué necesitas y te ofreceremos la solución más adecuada.',
          feature1: 'Análisis personalizado de tu situación',
          feature2: 'Propuesta de solución a medida'
        }
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
        cta: 'View on Amazon',
        moreInfo: 'More info'
      },
      quote: {
        text: "Don't wait to buy real estate. Buy real estate and wait.",
        author: 'Will Rogers'
      },
      finalCta: {
        title: 'Start your journey to premeditated real estate investment',
        subtitle: 'Learn to control the entire process and stay updated on any news.',
        newsletter: 'Subscribe to the newsletter to receive legislative updates, exclusive content and real estate tips.',
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
        ctaDesc: 'Contact us and discover how we can help you take the next step.',
        ctaButton: 'Contact us',
        service1: {
          title: 'Investment Strategy Design',
          description: 'Investment strategy design tailored to your goals to maximize the performance of your real estate portfolio.',
          feature1: 'Operation feasibility analysis',
          feature2: 'Product and scenario comparison',
          feature3: 'Risk and opportunity assessment',
          feature4: 'Short and long-term performance optimization'
        },
        service2: {
          title: 'Property Registry Notes Request',
          description: 'Quickly and securely obtain the registry information of any property.',
          feature1: 'Direct request management',
          feature2: 'Digital format delivery'
        },
        service3: {
          title: 'Tax Advisory',
          description: 'Specialized tax planning and management for real estate investment, provided by certified tax advisors.',
          feature1: 'Tax advice for individuals and companies',
          feature2: 'Income tax returns',
          feature3: 'Filing of forms and taxes (purchase, sale, rental)',
          feature4: 'Rental deposit management with authorities',
          feature5: 'Tax optimization of real estate operations'
        },
        service4: {
          title: 'Accounting Advisory',
          description: 'Accounting organization and tracking for property owners and real estate investors, provided by certified accountants.',
          feature1: 'Accounting advice for individuals and companies',
          feature2: 'Real estate operations accounting',
          feature3: 'Accounting services for companies and freelancers (balance sheet, mandatory books, etc.)'
        },
        service5: {
          title: 'International Advisory',
          description: 'Practical guidance for foreign residents or non-residents who wish to invest in Spain.',
          feature1: 'General tax analysis',
          feature2: 'Common procedures',
          feature3: 'Informative support in purchase, rental or asset management'
        },
        service6: {
          title: 'Services Tailored to Your Needs',
          description: 'If you have a specific project and need additional support, tell us what you need and we will offer you the most suitable solution.',
          feature1: 'Personalized analysis of your situation',
          feature2: 'Custom solution proposal'
        }
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
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über mich',
        services: 'Dienstleistungen',
        resources: 'Ressourcen',
        blog: 'Blog',
        contact: 'Kontakt'
      },
      hero: {
        title: 'Investieren Sie in Immobilien',
        titleBold: 'mit Vertrauen',
        subtitle: 'Entdecken Sie meine Buchsammlung über Immobilieninvestitionen und greifen Sie auf praktische Ressourcen, Vorlagen und persönliche Beratung zu, um den nächsten Schritt zu machen.',
        cta: 'Meine Bücher entdecken'
      },
      books: {
        title: 'Meine Bücher',
        subtitle: 'Praktische Leitfäden für Immobilieninvestoren',
        cta: 'Auf Amazon ansehen',
        moreInfo: 'Mehr Info'
      },
      quote: {
        text: 'Warten Sie nicht, um Immobilien zu kaufen. Kaufen Sie Immobilien und warten Sie.',
        author: 'Will Rogers'
      },
      finalCta: {
        title: 'Beginnen Sie Ihren Weg zur durchdachten Immobilieninvestition',
        subtitle: 'Lernen Sie, den gesamten Prozess zu kontrollieren und bleiben Sie über alle Neuigkeiten informiert.',
        newsletter: 'Abonnieren Sie den Newsletter, um Gesetzesänderungen, exklusive Inhalte und Immobilientipps zu erhalten.',
        button: 'Kontaktieren Sie mich'
      },
      about: {
        title: 'Über mich',
        subtitle: 'Immobilienvermögen von Grund auf aufbauen',
        intro1: 'Ich bin <strong>Joaquín</strong>, Spezialist für Immobilieninvestitionen mit über 10 Jahren Erfahrung in der Branche. Meine Reise begann mit einer einfachen Frage: Wie kann ich passives Einkommen generieren, ohne große Anfangskapitalien zu benötigen?',
        intro2: 'Im Laufe meiner Karriere habe ich Hunderten von Menschen geholfen, ihre ersten Schritte in der Welt der Immobilieninvestitionen zu machen und <strong>hohe Rentabilität auch mit niedrigen Budgets</strong> zu erzielen. Mein Ansatz konzentriert sich auf praktische und replizierbare Strategien wie Airbnb, Ferienvermietungen, Kaufen-Renovieren-Verkaufen (House Flipping) und effiziente Immobilienverwaltung.',
        intro3: 'Ich habe mehrere <strong>praktische Bücher</strong> veröffentlicht, in denen ich Schritt für Schritt erkläre, wie man sicher und profitabel investiert und meine echte Markterfahrung teile. Meine Mission ist es, den Zugang zu Immobilieninvestitionen zu demokratisieren und zu zeigen, dass jeder mit der richtigen Ausbildung und den richtigen Strategien ein solides Vermögen aufbauen kann.',
        experienceTitle: 'Meine Erfahrung umfasst:',
        exp1: '+50 verwaltete Immobilien im Airbnb- und Ferienvermietungsbereich',
        exp2: '+20 erfolgreich abgeschlossene House-Flipping-Projekte',
        exp3: 'Schulung von über 300 Anfängerinvestoren',
        exp4: 'Autor mehrerer Leitfäden zur Immobilieninvestition'
      },
      services: {
        title: 'Dienstleistungen',
        subtitle: 'Professionelle Lösungen zur Förderung Ihres Erfolgs bei Immobilieninvestitionen',
        ctaTitle: 'Interesse an einer Dienstleistung?',
        ctaDesc: 'Kontaktieren Sie uns und erfahren Sie, wie wir Ihnen beim nächsten Schritt helfen können.',
        ctaButton: 'Kontaktieren Sie uns',
        service1: {
          title: 'Investitionsstrategie-Design',
          description: 'Entwicklung von Investitionsstrategien, die auf Ihre Ziele zugeschnitten sind, um die Rendite Ihres Immobilienportfolios zu maximieren.',
          feature1: 'Machbarkeitsanalyse von Operationen',
          feature2: 'Produkt- und Szenarienvergleich',
          feature3: 'Risiko- und Chancenbewertung',
          feature4: 'Kurz- und langfristige Renditeoptimierung'
        },
        service2: {
          title: 'Grundbuchauszug-Anforderung',
          description: 'Erhalten Sie schnell und sicher die Registrierungsinformationen jeder Immobilie.',
          feature1: 'Direkte Antragsbearbeitung',
          feature2: 'Lieferung im digitalen Format'
        },
        service3: {
          title: 'Steuerberatung',
          description: 'Spezialisierte Steuerplanung und -verwaltung für Immobilieninvestitionen, angeboten von zertifizierten Steuerberatern.',
          feature1: 'Steuerberatung für Privatpersonen und Unternehmen',
          feature2: 'Einkommensteuererklärungen',
          feature3: 'Einreichung von Formularen und Steuern (Kauf, Verkauf, Vermietung)',
          feature4: 'Mietkautionsverwaltung bei Behörden',
          feature5: 'Steueroptimierung von Immobilienoperationen'
        },
        service4: {
          title: 'Buchhaltungsberatung',
          description: 'Buchhaltungsorganisation und -verfolgung für Immobilieneigentümer und Investoren, angeboten von zertifizierten Buchhaltern.',
          feature1: 'Buchhaltungsberatung für Privatpersonen und Unternehmen',
          feature2: 'Buchhaltung für Immobilienoperationen',
          feature3: 'Buchhaltungsservices für Unternehmen und Freiberufler (Bilanz, Pflichtbücher, etc.)'
        },
        service5: {
          title: 'Internationale Beratung',
          description: 'Praktische Orientierung für ausländische Residenten oder Nicht-Residenten, die in Spanien investieren möchten.',
          feature1: 'Allgemeine Steueranalyse',
          feature2: 'Häufige Verfahren',
          feature3: 'Informative Begleitung bei Kauf, Miete oder Vermögensverwaltung'
        },
        service6: {
          title: 'An Ihre Bedürfnisse angepasste Dienste',
          description: 'Wenn Sie ein konkretes Projekt haben und zusätzliche Unterstützung benötigen, teilen Sie uns mit, was Sie brauchen, und wir bieten Ihnen die passendste Lösung.',
          feature1: 'Personalisierte Analyse Ihrer Situation',
          feature2: 'Maßgeschneiderte Lösungsvorschläge'
        }
      },
      resources: {
        title: 'Kostenlose Ressourcen',
        subtitle: 'Laden Sie Vorlagen, Modelle und praktische Tools für Ihre Immobilieninvestition herunter',
        emailPrompt: 'Geben Sie Ihre E-Mail ein, um auf kostenlose Downloads zuzugreifen',
        download: 'Herunterladen',
        newsletterTitle: 'Brauchen Sie mehr Ressourcen?',
        newsletterDesc: 'Abonnieren Sie meinen Newsletter, um exklusive Inhalte, Tipps und jede Woche neue Ressourcen zu erhalten',
        newsletterButton: 'Newsletter abonnieren'
      },
      blog: {
        title: 'Blog',
        subtitle: 'Artikel, Tipps und Erfahrungen über Immobilieninvestitionen',
        all: 'Alle',
        readMore: 'Weiterlesen',
        comingSoon: 'Weitere Artikel folgen...'
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Haben Sie Fragen oder möchten Sie Ihr Projekt starten? Ich bin hier, um zu helfen',
        formTitle: 'Lassen Sie uns über Ihr Projekt sprechen',
        formDesc: 'Füllen Sie das Formular aus und ich werde mich innerhalb von 24 Stunden bei Ihnen melden. Sie können mir auch direkt per E-Mail oder WhatsApp schreiben.',
        name: 'Vollständiger Name',
        email: 'E-Mail',
        phone: 'Telefon (optional)',
        message: 'Nachricht',
        send: 'Nachricht senden',
        successTitle: 'Nachricht gesendet!',
        successDesc: 'Ich werde so schnell wie möglich antworten'
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
