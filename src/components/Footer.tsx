import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold text-foreground">
              TuNegocioInmobiliario<span className="text-sm font-normal text-muted-foreground">.com</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Todos los derechos reservados.
            </p>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/aviso-legal" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Aviso Legal
            </Link>
            <Link 
              to="/politica-privacidad" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link 
              to="/politica-cookies" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Política de Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
