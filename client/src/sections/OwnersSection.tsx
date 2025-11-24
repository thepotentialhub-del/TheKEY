import { motion } from "framer-motion";
import OwnersWizardForm from "@/components/OwnersWizardForm";
import SectionHeader from "@/components/SectionHeader";
import { Search, Megaphone, UserCheck } from "lucide-react";

const steps = [
  {
    title: "Valoración Experta",
    desc: "Analizamos el mercado para definir el precio correcto.",
    icon: Search
  },
  {
    title: "Marketing Premium",
    desc: "Fotos profesionales y publicación en portales top.",
    icon: Megaphone
  },
  {
    title: "Cierre Seguro",
    desc: "Filtramos clientes y aseguramos el pago.",
    icon: UserCheck
  }
];

export default function OwnersSection() {
  return (
    <section id="owners" className="py-24 bg-brand-primary-soft relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="text-white">
            <SectionHeader 
              title="¿Necesitas vender o arrendar?" 
              subtitle="Nos encargamos de todo el proceso para que tu propiedad esté en las mejores manos."
              centered={false}
              light={true}
            />
            
            <div className="space-y-8 mt-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-brand-secondary group-hover:text-brand-primary transition-colors duration-300 shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading mb-1">{step.title}</h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Wizard Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 min-h-[500px]"
          >
            <OwnersWizardForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
