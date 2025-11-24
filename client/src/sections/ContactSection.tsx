import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            <SectionHeader 
              title="Contáctanos" 
              subtitle="Estamos listos para ayudarte a encontrar tu lugar ideal."
              centered={false}
            />
            
            <div className="space-y-8 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-primary">Visítanos</h4>
                  <p className="text-slate-600">Av. Bolívar #12N-30, Edificio Mocawa Plaza<br />Armenia, Quindío</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-primary">Llámanos</h4>
                  <p className="text-slate-600">+57 (6) 745 0000<br />+57 300 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-primary">Escríbenos</h4>
                  <p className="text-slate-600">info@thekeyinmobiliaria.com<br />ventas@thekeyinmobiliaria.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
