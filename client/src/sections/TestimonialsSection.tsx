import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorator */}
      <div className="absolute -left-20 top-40 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Lo que dicen nuestros clientes"
          subtitle="La confianza se construye con resultados. Estas son algunas de las historias de éxito."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
