import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const navItems = [
    { path: "/", label: t('nav.home') },
    { path: "/sobre-mi", label: t('nav.about') },
    { path: "/servicios", label: t('nav.services') },
    { path: "/recursos", label: t('nav.resources') },
    { path: "/contacto", label: t('nav.contact') },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button onClick={scrollToTop} className="text-2xl font-bold text-foreground text-left">
            TuNegocioInmobiliario<span className="text-sm font-normal text-muted-foreground">.com</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.path === "/" ? (
                <button
                  key={item.path}
                  onClick={scrollToTop}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {i18n.language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('es')}>
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('de')}>
                  🇩🇪 Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navItems.map((item) => (
              item.path === "/" ? (
                <button
                  key={item.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTop();
                  }}
                  className={`block text-sm font-medium transition-colors text-left ${
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeLanguage('es')}
              >
                🇪🇸 ES
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeLanguage('en')}
              >
                🇬🇧 EN
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeLanguage('de')}
              >
                🇩🇪 DE
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
