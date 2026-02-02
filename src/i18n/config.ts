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
        ctaDesc: 'Contacta conmigo para una consulta inicial gratuita y descubre cómo puedo ayudarte',
        ctaButton: 'Contáctame',
        service1: {
          title: 'Asesoría en Inversión Inmobiliaria',
          description: 'Te ayudo a identificar oportunidades de inversión, analizar rentabilidades y crear estrategias personalizadas según tu presupuesto y objetivos.',
          feature1: 'Análisis de mercado y zonas rentables',
          feature2: 'Estrategias de compra e inversión',
          feature3: 'Gestión de Airbnb y pisos turísticos',
          feature4: 'House flipping y reformas rentables'
        },
        service2: {
          title: 'Asesoría Fiscal y Contable',
          description: 'Servicios especializados de asesoría fiscal y contable para optimizar la gestión de tus inversiones inmobiliarias.',
          feature1: 'Declaraciones fiscales optimizadas',
          feature2: 'Planificación tributaria',
          feature3: 'Gestión contable de propiedades',
          feature4: 'Asesoramiento en deducciones'
        },
        service3: {
          title: 'Mentorías Personalizadas',
          description: 'Sesiones individuales donde te guío paso a paso en tu proyecto de inversión inmobiliaria, desde cero hasta tu primera propiedad rentable.',
          feature1: 'Sesiones 1 a 1 online o presencial',
          feature2: 'Plan de acción personalizado',
          feature3: 'Seguimiento de proyectos',
          feature4: 'Acceso a recursos exclusivos'
        },
        service4: {
          title: 'Formación y Cursos',
          description: 'Programas formativos completos sobre inversión inmobiliaria, desde nivel inicial hasta estrategias avanzadas de rentabilidad.',
          feature1: 'Cursos online y presenciales',
          feature2: 'Material didáctico exclusivo',
          feature3: 'Casos prácticos reales',
          feature4: 'Comunidad de inversores'
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
        ctaDesc: 'Contact me for a free initial consultation and discover how I can help you',
        ctaButton: 'Contact me',
        service1: {
          title: 'Real Estate Investment Advisory',
          description: 'I help you identify investment opportunities, analyze returns and create personalized strategies according to your budget and goals.',
          feature1: 'Market and profitable areas analysis',
          feature2: 'Purchase and investment strategies',
          feature3: 'Airbnb and vacation rental management',
          feature4: 'House flipping and profitable renovations'
        },
        service2: {
          title: 'Tax and Accounting Advisory',
          description: 'Specialized tax and accounting advisory services to optimize the management of your real estate investments.',
          feature1: 'Optimized tax returns',
          feature2: 'Tax planning',
          feature3: 'Property accounting management',
          feature4: 'Deduction advice'
        },
        service3: {
          title: 'Personalized Mentoring',
          description: 'Individual sessions where I guide you step by step in your real estate investment project, from scratch to your first profitable property.',
          feature1: 'One-on-one sessions online or in person',
          feature2: 'Personalized action plan',
          feature3: 'Project tracking',
          feature4: 'Access to exclusive resources'
        },
        service4: {
          title: 'Training and Courses',
          description: 'Complete training programs on real estate investment, from beginner level to advanced profitability strategies.',
          feature1: 'Online and in-person courses',
          feature2: 'Exclusive educational material',
          feature3: 'Real practical cases',
          feature4: 'Investor community'
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
        ctaDesc: 'Kontaktieren Sie mich für eine kostenlose Erstberatung und erfahren Sie, wie ich Ihnen helfen kann',
        ctaButton: 'Kontaktieren Sie mich',
        service1: {
          title: 'Immobilieninvestitionsberatung',
          description: 'Ich helfe Ihnen, Investitionsmöglichkeiten zu identifizieren, Renditen zu analysieren und personalisierte Strategien nach Ihrem Budget und Ihren Zielen zu erstellen.',
          feature1: 'Markt- und rentable Gebietsanalyse',
          feature2: 'Kauf- und Investitionsstrategien',
          feature3: 'Airbnb- und Ferienvermietungsmanagement',
          feature4: 'House Flipping und rentable Renovierungen'
        },
        service2: {
          title: 'Steuer- und Buchhaltungsberatung',
          description: 'Spezialisierte Steuer- und Buchhaltungsberatung zur Optimierung der Verwaltung Ihrer Immobilieninvestitionen.',
          feature1: 'Optimierte Steuererklärungen',
          feature2: 'Steuerplanung',
          feature3: 'Immobilienbuchhaltung',
          feature4: 'Abzugsberatung'
        },
        service3: {
          title: 'Personalisiertes Mentoring',
          description: 'Einzelsitzungen, in denen ich Sie Schritt für Schritt bei Ihrem Immobilieninvestitionsprojekt begleite, von Null bis zu Ihrer ersten rentablen Immobilie.',
          feature1: 'Einzelsitzungen online oder persönlich',
          feature2: 'Personalisierter Aktionsplan',
          feature3: 'Projektverfolgung',
          feature4: 'Zugang zu exklusiven Ressourcen'
        },
        service4: {
          title: 'Schulung und Kurse',
          description: 'Komplette Schulungsprogramme für Immobilieninvestitionen, vom Anfängerniveau bis zu fortgeschrittenen Rentabilitätsstrategien.',
          feature1: 'Online- und Präsenzkurse',
          feature2: 'Exklusives Lehrmaterial',
          feature3: 'Echte praktische Fälle',
          feature4: 'Investorengemeinschaft'
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
