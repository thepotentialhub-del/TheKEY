import SectionHeader from "@/components/SectionHeader";
import StatsGrid from "@/components/StatsGrid";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Asesoría jurídica y financiera incluida",
  "Especialistas en el mercado del Quindío",
  "Fotografía profesional y tours virtuales",
  "Acompañamiento desde la búsqueda hasta la firma"
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <SectionHeader 
              title="¿Por qué elegirnos?" 
              subtitle="Más que una inmobiliaria, somos tus aliados estratégicos para proteger y hacer crecer tu patrimonio."
              centered={false}
            />
            
            <div className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-lg text-slate-700 font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div>
            <StatsGrid />
          </div>
          
        </div>
      </div>
    </section>
  );
}
