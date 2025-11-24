import Navbar from "@/components/Navbar";
import HomeHeroSection from "@/sections/HomeHeroSection";
import HowWeHelpSection from "@/sections/HowWeHelpSection";
import FeaturedPropertiesSection from "@/sections/FeaturedPropertiesSection";
import OwnersSection from "@/sections/OwnersSection";
import WhyUsSection from "@/sections/WhyUsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-accent/30">
      <Navbar />
      
      <main>
        <HomeHeroSection />
        <HowWeHelpSection />
        <FeaturedPropertiesSection />
        <OwnersSection />
        <WhyUsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-brand-primary text-slate-400 py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-secondary rounded-lg flex items-center justify-center">
                  <span className="text-brand-primary font-bold text-lg">K</span>
                </div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  The Key
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Tu aliado inmobiliario en el Quindío. Transformamos la experiencia de comprar y vender propiedades con tecnología y transparencia.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold font-heading mb-6">Navegación</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#hero" className="hover:text-brand-secondary transition-colors">Inicio</a></li>
                <li><a href="#featured" className="hover:text-brand-secondary transition-colors">Propiedades</a></li>
                <li><a href="#owners" className="hover:text-brand-secondary transition-colors">Propietarios</a></li>
                <li><a href="#blog" className="hover:text-brand-secondary transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold font-heading mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-brand-secondary transition-colors">Política de Datos</a></li>
                <li><a href="#" className="hover:text-brand-secondary transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-brand-secondary transition-colors">Trabaja con nosotros</a></li>
              </ul>
            </div>

            {/* Contact Small */}
            <div>
              <h4 className="text-white font-bold font-heading mb-6">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span>Av. Bolívar #12N-30<br/>Armenia, Quindío</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span>+57 (6) 745 0000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span>info@thekey.com</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} The Key Inmobiliaria. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <FloatingWhatsAppButton />
    </div>
  );
}
