import { motion } from "framer-motion";
import { MapPin, BedDouble, Bath, Car, Maximize } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/data/properties";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10 border border-slate-100 cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge 
            className={cn(
              "border-0 px-3 py-1 text-xs font-semibold uppercase tracking-wider",
              property.operation === 'Venta' ? "bg-brand-accent text-white" : "bg-brand-secondary text-brand-primary"
            )}
          >
            En {property.operation}
          </Badge>
          {property.featured && (
            <Badge className="bg-white/20 backdrop-blur-md border-0 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Destacado
            </Badge>
          )}
        </div>

        {/* Price on Image */}
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-2xl font-heading font-bold">
            ${(property.price).toLocaleString('es-CO')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {property.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-heading font-bold text-brand-primary mb-1 line-clamp-1 group-hover:text-brand-secondary transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin className="w-3.5 h-3.5 mr-1 text-brand-accent" />
          <span className="truncate">{property.neighborhood}, {property.city}</span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-2 py-4 border-t border-slate-100">
          <div className="flex flex-col items-center justify-center gap-1">
            <Maximize className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-700">{property.area}m²</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <BedDouble className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-700">{property.bedrooms} Habs</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Bath className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-700">{property.bathrooms} Baños</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Car className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-700">{property.parking} Parq</span>
          </div>
        </div>

        <div className="mt-4">
          <Button className="w-full rounded-xl bg-slate-900 text-white group-hover:bg-brand-accent transition-colors font-medium">
            Ver Detalles
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
