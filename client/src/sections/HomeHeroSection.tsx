import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SearchPanel from "@/components/SearchPanel";
import heroBg from "@assets/generated_images/landscape_of_quindío_coffee_region_with_mountains.png";

export default function HomeHeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-brand-primary/40 to-slate-50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-32">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-emerald-300 text-xs md:text-sm font-bold tracking-widest uppercase shadow-lg">
            Inmobiliaria en Armenia y el Quindío
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-6"
        >
          Tu llave a los <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">
            mejores inmuebles
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto mb-10 font-light"
        >
          Compra, vende e invierte con un equipo experto que te acompaña en cada paso del camino.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto"
        >
          <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-brand-accent hover:bg-emerald-600 text-white font-semibold text-base md:text-lg shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-1">
            Quiero comprar o arrendar
          </button>
          <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-semibold text-base md:text-lg transition-transform hover:-translate-y-1">
            Quiero consignar mi inmueble
          </button>
        </motion.div>
      </div>

      {/* Search Panel */}
      <div className="w-full px-4 relative -mt-8 mb-8 md:mb-0 md:mt-0 md:absolute md:bottom-0 md:translate-y-1/2 z-20">
        <SearchPanel />
      </div>
    </section>
  );
}
