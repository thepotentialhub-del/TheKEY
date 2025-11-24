import { motion } from "framer-motion";
import { stats } from "@/data/stats";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-12 lg:mt-0">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, type: "spring" }}
          className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-center items-center h-full"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent mb-2 break-all">
            {stat.value}
          </h3>
          <p className="text-brand-primary font-bold text-base mb-1 leading-tight">{stat.label}</p>
          <p className="text-slate-500 text-xs leading-relaxed">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
