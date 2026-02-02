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
        title1: 'INVIERTE EN INMUEBLES',
        title2: 'COMO UN PROFESIONAL',
        description: 'Descubre la colección de guías prácticas de <strong>Tu Negocio Inmobiliario</strong>, donde aprenderás de forma profesional y estructurada los aspectos esenciales de los cuatro procesos clave del sector: <span class="text-accent font-medium">comprar, vender, alquilar y solicitar hipotecas</span>.',
        cta: 'Explora mis libros'
      },
      intro: {
        resourcesTitle: 'Recursos exclusivos',
        resourcesDesc: 'Accede a recursos descargables exclusivos para gestionar todas tus viviendas, realizar predicciones de ingresos y simular operaciones inmobiliarias con precisión.',
        servicesTitle: 'Servicios profesionales',
        servicesDesc: 'Para llevar tu negocio inmobiliario al siguiente nivel, podrás contar con servicios especializados prestados por profesionales certificados.',
        learningTitle: 'Curva de aprendizaje exponencial',
        learningDesc: 'Con todo ello, avanzarás de forma sólida, estratégica y con una <strong>curva de aprendizaje exponencial</strong> que te convertirá en un verdadero profesional inmobiliario.'
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
        name: 'Joaquín Ignacio',
        bio1: 'Autor de la colección Tu Negocio Inmobiliario y desarrollador de una metodología propia orientada a estructurar y optimizar cada fase del proceso inmobiliario.',
        bio2: 'Su trayectoria abarca la <strong>gestión integral de operaciones de inversión</strong> en distintos segmentos del mercado español, incluyendo vivienda urbana, propiedad turística y terrenos rústicos destinados a explotación agrícola.',
        bio3: 'A lo largo de su trayectoria ha participado en numerosos procesos de <strong>compra y venta, análisis de operaciones, evaluación de riesgos y viabilidad, negociación hipotecaria y estructuración financiera</strong> de proyectos inmobiliarios, aplicando un enfoque que integra criterios económicos, documentales y procedimentales para garantizar decisiones sólidas y replicables dentro de cualquier estrategia de inversión.',
        bio4: 'Asimismo, posee amplia experiencia en la <strong>puesta en marcha y administración de arrendamientos tradicionales y turísticos</strong>, así como en la organización documental y operativa necesaria para mantener, de forma profesionalizada, un patrimonio inmobiliario.',
        bio5: 'Su trabajo se centra en transformar esta experiencia práctica en <strong>contenidos formativos, guías técnicas y recursos aplicados</strong> que permiten al inversor comprender, evaluar y ejecutar sus decisiones con criterio y seguridad.',
        bio6: 'Como <strong>fundador intelectual del proyecto Tu Negocio Inmobiliario</strong>, Joaquín Ignacio aporta el marco conceptual, la metodología y las directrices estratégicas que sustentan la plataforma, ofreciendo un modelo estructurado y orientado a la mejora continua del inversor.',
        servicesTitle: 'Quién presta los servicios',
        servicesDesc: 'Los servicios profesionales disponibles en esta web son prestados exclusivamente por <strong>profesionales colaboradores certificados</strong> en sus respectivas áreas (fiscalidad, contabilidad, arquitectura, etc.). Todo ello se realiza siguiendo la metodología formativa desarrollada por Joaquín Ignacio para el proyecto Tu Negocio Inmobiliario y en base a la normativa actual.'
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
        description: 'En este espacio encontrarás artículos prácticos sobre inversión, gestión y estrategia inmobiliaria. Contenido claro, directo y orientado a que cualquier persona quiera entender cómo funcionan los procesos clave del sector.',
        description2: 'Publicamos guías, análisis, novedades relevantes y contenido de apoyo que complementa los recursos y volúmenes de <strong>Tu Negocio Inmobiliario</strong>. Todo explicado con un enfoque sencillo, estructurado y aplicable.',
        topicBuy: 'Comprar',
        topicSell: 'Vender',
        topicRent: 'Alquilar',
        topicMortgage: 'Hipoteca',
        comingSoonTitle: 'Próximamente',
        comingSoonDesc: 'Estamos preparando contenido de calidad. Pronto publicaremos los primeros artículos.',
        disclaimer: 'El contenido del blog tiene carácter informativo y divulgativo. No constituye asesoramiento jurídico, fiscal o financiero.'
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
        title1: 'INVEST IN REAL ESTATE',
        title2: 'LIKE A PROFESSIONAL',
        description: 'Discover the collection of practical guides from <strong>Tu Negocio Inmobiliario</strong>, where you will learn professionally and in a structured way the essential aspects of the four key processes in the sector: <span class="text-accent font-medium">buying, selling, renting and applying for mortgages</span>.',
        cta: 'Explore my books'
      },
      intro: {
        resourcesTitle: 'Exclusive resources',
        resourcesDesc: 'Access exclusive downloadable resources to manage all your properties, make income predictions and simulate real estate operations with precision.',
        servicesTitle: 'Professional services',
        servicesDesc: 'To take your real estate business to the next level, you can count on specialized services provided by certified professionals.',
        learningTitle: 'Exponential learning curve',
        learningDesc: 'With all this, you will advance in a solid, strategic way and with an <strong>exponential learning curve</strong> that will turn you into a true real estate professional.'
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
        name: 'Joaquín Ignacio',
        bio1: 'Author of the Tu Negocio Inmobiliario collection and developer of a proprietary methodology aimed at structuring and optimizing each phase of the real estate process.',
        bio2: 'His career encompasses the <strong>comprehensive management of investment operations</strong> across various segments of the Spanish market, including urban housing, tourist properties, and rural land for agricultural use.',
        bio3: 'Throughout his career, he has participated in numerous <strong>buying and selling processes, operation analysis, risk and feasibility assessment, mortgage negotiation, and financial structuring</strong> of real estate projects, applying an approach that integrates economic, documentary, and procedural criteria to ensure solid and replicable decisions within any investment strategy.',
        bio4: 'He also has extensive experience in the <strong>launch and management of traditional and tourist rentals</strong>, as well as in the documentary and operational organization necessary to professionally maintain a real estate portfolio.',
        bio5: 'His work focuses on transforming this practical experience into <strong>training content, technical guides, and applied resources</strong> that allow investors to understand, evaluate, and execute their decisions with criteria and confidence.',
        bio6: 'As the <strong>intellectual founder of the Tu Negocio Inmobiliario project</strong>, Joaquín Ignacio provides the conceptual framework, methodology, and strategic guidelines that support the platform, offering a structured model oriented towards the continuous improvement of the investor.',
        servicesTitle: 'Who provides the services',
        servicesDesc: 'The professional services available on this website are provided exclusively by <strong>certified collaborating professionals</strong> in their respective areas (taxation, accounting, architecture, etc.). All of this is done following the training methodology developed by Joaquín Ignacio for the Tu Negocio Inmobiliario project and based on current regulations.'
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
        description: 'In this space you will find practical articles about investment, management and real estate strategy. Clear, direct content aimed at anyone who wants to understand how the key processes of the sector work.',
        description2: 'We publish guides, analysis, relevant news and supporting content that complements the resources and volumes of <strong>Tu Negocio Inmobiliario</strong>. Everything explained with a simple, structured and applicable approach.',
        topicBuy: 'Buy',
        topicSell: 'Sell',
        topicRent: 'Rent',
        topicMortgage: 'Mortgage',
        comingSoonTitle: 'Coming Soon',
        comingSoonDesc: 'We are preparing quality content. We will soon publish the first articles.',
        disclaimer: 'The blog content is informative and educational. It does not constitute legal, tax or financial advice.'
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
        title1: 'INVESTIEREN SIE IN IMMOBILIEN',
        title2: 'WIE EIN PROFI',
        description: 'Entdecken Sie die Sammlung praktischer Leitfäden von <strong>Tu Negocio Inmobiliario</strong>, wo Sie professionell und strukturiert die wesentlichen Aspekte der vier Schlüsselprozesse der Branche lernen: <span class="text-accent font-medium">kaufen, verkaufen, vermieten und Hypotheken beantragen</span>.',
        cta: 'Meine Bücher entdecken'
      },
      intro: {
        resourcesTitle: 'Exklusive Ressourcen',
        resourcesDesc: 'Zugang zu exklusiven herunterladbaren Ressourcen zur Verwaltung aller Ihrer Immobilien, Einkommensprognosen und präzisen Simulation von Immobilienoperationen.',
        servicesTitle: 'Professionelle Dienstleistungen',
        servicesDesc: 'Um Ihr Immobiliengeschäft auf die nächste Stufe zu heben, können Sie auf spezialisierte Dienstleistungen von zertifizierten Fachleuten zählen.',
        learningTitle: 'Exponentielle Lernkurve',
        learningDesc: 'Mit all dem werden Sie solide und strategisch vorankommen, mit einer <strong>exponentiellen Lernkurve</strong>, die Sie zu einem echten Immobilienprofi macht.'
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
        name: 'Joaquín Ignacio',
        bio1: 'Autor der Sammlung Tu Negocio Inmobiliario und Entwickler einer eigenen Methodik zur Strukturierung und Optimierung jeder Phase des Immobilienprozesses.',
        bio2: 'Seine Karriere umfasst das <strong>umfassende Management von Investitionsoperationen</strong> in verschiedenen Segmenten des spanischen Marktes, einschließlich Stadtwohnungen, Touristenimmobilien und landwirtschaftlichen Grundstücken.',
        bio3: 'Im Laufe seiner Karriere hat er an zahlreichen <strong>Kauf- und Verkaufsprozessen, Operationsanalysen, Risiko- und Machbarkeitsbewertungen, Hypothekenverhandlungen und Finanzstrukturierungen</strong> von Immobilienprojekten teilgenommen, wobei er einen Ansatz anwendet, der wirtschaftliche, dokumentarische und verfahrenstechnische Kriterien integriert, um solide und replizierbare Entscheidungen innerhalb jeder Investitionsstrategie zu gewährleisten.',
        bio4: 'Er verfügt auch über umfangreiche Erfahrung in der <strong>Einrichtung und Verwaltung von traditionellen und touristischen Vermietungen</strong> sowie in der dokumentarischen und operativen Organisation, die erforderlich ist, um ein Immobilienportfolio professionell zu führen.',
        bio5: 'Seine Arbeit konzentriert sich darauf, diese praktische Erfahrung in <strong>Schulungsinhalte, technische Leitfäden und angewandte Ressourcen</strong> umzuwandeln, die es Investoren ermöglichen, ihre Entscheidungen mit Kriterien und Sicherheit zu verstehen, zu bewerten und umzusetzen.',
        bio6: 'Als <strong>intellektueller Gründer des Projekts Tu Negocio Inmobiliario</strong> liefert Joaquín Ignacio den konzeptionellen Rahmen, die Methodik und die strategischen Richtlinien, die die Plattform unterstützen, und bietet ein strukturiertes Modell, das auf die kontinuierliche Verbesserung des Investors ausgerichtet ist.',
        servicesTitle: 'Wer erbringt die Dienstleistungen',
        servicesDesc: 'Die auf dieser Website verfügbaren professionellen Dienstleistungen werden ausschließlich von <strong>zertifizierten Fachkollegen</strong> in ihren jeweiligen Bereichen (Steuern, Buchhaltung, Architektur usw.) erbracht. All dies erfolgt nach der von Joaquín Ignacio für das Projekt Tu Negocio Inmobiliario entwickelten Schulungsmethodik und basierend auf den aktuellen Vorschriften.'
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
        description: 'In diesem Bereich finden Sie praktische Artikel über Investition, Verwaltung und Immobilienstrategie. Klarer, direkter Inhalt für alle, die verstehen wollen, wie die wichtigsten Prozesse der Branche funktionieren.',
        description2: 'Wir veröffentlichen Leitfäden, Analysen, relevante Neuigkeiten und unterstützende Inhalte, die die Ressourcen und Bände von <strong>Tu Negocio Inmobiliario</strong> ergänzen. Alles erklärt mit einem einfachen, strukturierten und anwendbaren Ansatz.',
        topicBuy: 'Kaufen',
        topicSell: 'Verkaufen',
        topicRent: 'Mieten',
        topicMortgage: 'Hypothek',
        comingSoonTitle: 'Demnächst',
        comingSoonDesc: 'Wir bereiten qualitativ hochwertige Inhalte vor. Wir werden bald die ersten Artikel veröffentlichen.',
        disclaimer: 'Der Bloginhalt ist informativ und lehrreich. Er stellt keine rechtliche, steuerliche oder finanzielle Beratung dar.'
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
