import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Property } from "@/data/properties";
import { MapPin, BedDouble, Bath, Car, Maximize, CheckCircle2, Share2, Heart } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-5xl h-[90vh] md:h-auto md:max-h-[95vh] p-0 overflow-hidden bg-white rounded-2xl md:rounded-3xl border-0 shadow-2xl flex flex-col">
        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          
          {/* Left: Gallery */}
          <div className="w-full md:w-1/2 bg-slate-100 relative h-48 sm:h-56 md:h-auto shrink-0">
            <img 
              src={property.image} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
               <Badge className="bg-white/90 text-brand-primary font-bold shadow-sm hover:bg-white text-xs md:text-sm">
                 ${(property.price).toLocaleString('es-CO')}
               </Badge>
            </div>
            <Button 
              onClick={onClose}
              className="absolute top-4 right-4 md:hidden rounded-full bg-black/50 hover:bg-black/70 text-white h-8 w-8 p-0 z-10"
            >
              <span className="sr-only">Cerrar</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </Button>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 flex flex-col h-full bg-white overflow-hidden">
            <ScrollArea className="flex-1">
              <div className="p-5 md:p-8 space-y-5 md:space-y-6">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-brand-accent text-brand-accent uppercase tracking-wider text-[10px] md:text-xs">
                      {property.type} en {property.operation}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary leading-tight mb-2">
                    {property.title}
                  </h2>
                  
                  <div className="flex items-center text-slate-500 font-medium text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-brand-secondary" />
                    {property.neighborhood}, {property.city}
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-4 gap-2 md:gap-4 p-3 md:p-4 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100">
                  <div className="text-center">
                    <Maximize className="w-4 h-4 md:w-5 md:h-5 mx-auto text-brand-primary mb-1" />
                    <p className="text-xs md:text-sm font-bold text-slate-700">{property.area}m²</p>
                  </div>
                  <div className="text-center">
                    <BedDouble className="w-4 h-4 md:w-5 md:h-5 mx-auto text-brand-primary mb-1" />
                    <p className="text-xs md:text-sm font-bold text-slate-700">{property.bedrooms}</p>
                  </div>
                  <div className="text-center">
                    <Bath className="w-4 h-4 md:w-5 md:h-5 mx-auto text-brand-primary mb-1" />
                    <p className="text-xs md:text-sm font-bold text-slate-700">{property.bathrooms}</p>
                  </div>
                  <div className="text-center">
                    <Car className="w-4 h-4 md:w-5 md:h-5 mx-auto text-brand-primary mb-1" />
                    <p className="text-xs md:text-sm font-bold text-slate-700">{property.parking}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary mb-2">Sobre este inmueble</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {property.description}
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary mb-3">Características</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-medium">
                        <CheckCircle2 className="w-3 h-3 mr-1.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollArea>

            {/* Footer Actions */}
            <div className="p-4 md:p-6 border-t border-slate-100 bg-slate-50/50 backdrop-blur-md shrink-0">
              <div className="flex gap-3 md:gap-4 flex-col sm:flex-row">
                <Button className="w-full flex-1 h-11 md:h-12 rounded-xl bg-brand-accent hover:bg-emerald-600 text-white font-bold text-base md:text-lg shadow-lg shadow-emerald-500/20">
                  Agendar Visita
                </Button>
                <Button variant="outline" className="w-full flex-1 h-11 md:h-12 rounded-xl border-brand-primary text-brand-primary font-bold text-base md:text-lg hover:bg-brand-primary/5">
                  Más Información
                </Button>
              </div>
              <p className="text-center text-[10px] md:text-xs text-slate-400 mt-3 hidden sm:block">
                Te contactaremos vía WhatsApp para coordinar.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
