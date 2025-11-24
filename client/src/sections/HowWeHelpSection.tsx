import BentoGrid from "@/components/BentoGrid";
import SectionHeader from "@/components/SectionHeader";

export default function HowWeHelpSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 mt-20">
        <SectionHeader 
          title="¿Cómo te ayudamos?"
          subtitle="Servicios inmobiliarios integrales pensados para compradores, arrendatarios y propietarios."
        />
        
        <BentoGrid />
      </div>
    </section>
  );
}
