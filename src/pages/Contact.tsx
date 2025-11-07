import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contacto desde web - ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
    );
    
    window.location.href = `mailto:julian.jfc@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderé lo antes posible"
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes dudas o quieres empezar tu proyecto? Estoy aquí para ayudarte
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hablemos de tu proyecto</h2>
              <p className="text-muted-foreground mb-8">
                Rellena el formulario y me pondré en contacto contigo en menos de 24 horas.
                También puedes escribirme directamente por email o WhatsApp.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a
                    href="mailto:julian.jfc@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    julian.jfc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Teléfono</h3>
                  <a
                    href="tel:+34660034238"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +34 660 03 42 38
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="+34 600 00 00 00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Cuéntame en qué puedo ayudarte..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                size="lg"
              >
                <Send className="h-5 w-5" />
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
