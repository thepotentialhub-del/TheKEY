import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingWhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573000000000" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-shadow"
      aria-label="Contactar por WhatsApp"
    >
      <Phone className="w-7 h-7 md:w-8 md:h-8 fill-current" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
      </span>
    </motion.a>
  );
}
