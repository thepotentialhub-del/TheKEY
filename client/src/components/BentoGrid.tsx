import { motion } from "framer-motion";
import { Home, TrendingUp, Key, ShieldCheck, FileText, HeartHandshake } from "lucide-react";

const items = [
  {
    title: "Comprar tu próximo hogar",
    description: "Te acompañamos a encontrar la propiedad perfecta que se ajuste a tu estilo de vida y presupuesto.",
    icon: Home,
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-brand-primary to-slate-800"
  },
  {
    title: "Invertir en renta",
    description: "Maximiza tu retorno con propiedades seleccionadas estratégicamente para renta tradicional o turística.",
    icon: TrendingUp,
    className: "md:col-span-1 md:row-span-2",
    gradient: "from-brand-secondary to-orange-400"
  },
  {
    title: "Arrendar con tranquilidad",
    description: "Proceso ágil, digital y seguro para inquilinos.",
    icon: Key,
    className: "md:col-span-1",
    gradient: "from-brand-accent to-emerald-600"
  },
  {
    title: "Administración 360°",
    description: "Cuidamos tu patrimonio como si fuera nuestro.",
    icon: ShieldCheck,
    className: "md:col-span-1",
    gradient: "from-slate-700 to-slate-900"
  },
  {
    title: "Avalúos Certificados",
    description: "Conoce el valor real de tu inmueble.",
    icon: FileText,
    className: "md:col-span-1",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    title: "Asesoría Jurídica",
    description: "Respaldo legal en cada etapa del negocio.",
    icon: HeartHandshake,
    className: "md:col-span-1",
    gradient: "from-purple-600 to-purple-800"
  },
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(220px,auto)]">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative group overflow-hidden rounded-3xl p-6 flex flex-col justify-between ${item.className} bg-gradient-to-br ${item.gradient} shadow-xl`}
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
            <item.icon className="w-24 h-24 text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
        </motion.div>
      ))}
    </div>
  );
}
