import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Comprar / Arrendar", href: "#featured" },
    { name: "Propietarios", href: "#owners" },
    { name: "Por qué nosotros", href: "#why-us" },
    { name: "Blog", href: "#blog" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300",
        isScrolled ? "pt-4" : "pt-6"
      )}
    >
      <div
        className={cn(
          "w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-secondary rounded-lg flex items-center justify-center">
            <span className="text-brand-primary font-bold text-lg">K</span>
          </div>
          <span className={cn("font-heading font-bold text-xl tracking-tight", isScrolled ? "text-brand-primary" : "text-white")}>
            The Key
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-secondary",
                isScrolled ? "text-slate-600" : "text-slate-200"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            className={cn("rounded-full gap-2", isScrolled ? "text-brand-primary" : "text-white hover:bg-white/10 hover:text-white")}
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp</span>
          </Button>
          <Button 
            className="bg-brand-accent hover:bg-emerald-600 text-white rounded-full px-6 shadow-lg shadow-emerald-500/20"
          >
            Consignar inmueble
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-slate-800" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-slate-800" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 md:hidden border border-slate-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700 py-2 border-b border-slate-100 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button className="w-full bg-brand-primary text-white rounded-xl py-6">
                Consignar inmueble
              </Button>
              <Button variant="outline" className="w-full rounded-xl py-6 border-slate-200">
                <Phone className="w-4 h-4 mr-2" />
                Contactar por WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
