import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">{t('about.title')}</h1>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-2xl overflow-hidden border border-border">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl">👤</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('about.subtitle')}
              </h2>
              
              <p dangerouslySetInnerHTML={{ __html: t('about.intro1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.intro2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.intro3') }} />

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('about.experienceTitle')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span>{t('about.exp1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span>{t('about.exp2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span>{t('about.exp3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▪</span>
                    <span>{t('about.exp4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
