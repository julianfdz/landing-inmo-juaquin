import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 animate-fade-in">{t('about.title')}</h1>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1 animate-fade-in-delay-1">
              <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-2xl overflow-hidden border border-border">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl">👤</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground animate-fade-in-delay-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('about.name')}
              </h2>
              
              <p dangerouslySetInnerHTML={{ __html: t('about.bio1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.bio2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.bio3') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.bio4') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.bio5') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.bio6') }} />

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('about.servicesTitle')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('about.servicesDesc') }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
