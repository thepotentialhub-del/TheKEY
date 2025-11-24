import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative"
    >
      <Quote className="w-10 h-10 text-brand-secondary/20 absolute top-6 right-6" />
      
      <p className="text-slate-600 text-lg italic mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xl">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-heading font-bold text-brand-primary">{testimonial.name}</h4>
          <p className="text-sm text-brand-accent font-medium">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
