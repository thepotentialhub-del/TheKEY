import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import PropertyModal from "@/components/PropertyModal";
import FiltersBar from "@/components/FiltersBar";
import SectionHeader from "@/components/SectionHeader";
import { useFilteredProperties } from "@/hooks/useFilteredProperties";
import { Property } from "@/data/properties";

export default function FeaturedPropertiesSection() {
  const { properties, filters, setFilter } = useFilteredProperties();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section id="featured" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Inmuebles Destacados"
          subtitle="Una selección curada de las mejores propiedades en el mercado actual."
        />

        <FiltersBar filters={filters} setFilter={setFilter} />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {properties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onClick={() => setSelectedProperty(property)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {properties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-slate-400 font-medium">No se encontraron propiedades con estos filtros.</p>
          </div>
        )}

        <PropertyModal 
          property={selectedProperty} 
          isOpen={!!selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      </div>
    </section>
  );
}
