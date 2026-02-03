import { Mail, Phone, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-delay-1">
          <div className="bg-card rounded-xl border border-border p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">{t("contact.helpTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("contact.helpDescription")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a
                    href="mailto:contacto@Tunegocioinmobiliario.com"
                    className="text-muted-foreground hover:text-accent transition-colors text-lg"
                  >
                    contacto@Tunegocioinmobiliario.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t("contact.phone")}</h3>
                  <a
                    href="tel:+34683466706"
                    className="text-muted-foreground hover:text-accent transition-colors text-lg"
                  >
                    +34 683 46 67 06
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer elegante */}
            <div className="flex items-start gap-3 p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground italic">
                {t("contact.phoneDisclaimer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
