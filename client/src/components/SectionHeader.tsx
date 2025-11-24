import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true, 
  className,
  light = false
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4",
          light ? "text-white" : "text-brand-primary"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Decorative line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "h-1 w-24 rounded-full mt-6 bg-gradient-to-r from-brand-secondary to-brand-accent",
          centered ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
