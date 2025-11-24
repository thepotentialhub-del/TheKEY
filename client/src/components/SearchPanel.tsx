import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function SearchPanel() {
  const [priceRange, setPriceRange] = useState([0, 5000000000]);

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="w-full max-w-6xl mx-auto relative z-30"
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          
          {/* Operation */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Operación</label>
            <Select defaultValue="venta">
              <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:ring-brand-accent">
                <SelectValue placeholder="Operación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="venta">Comprar</SelectItem>
                <SelectItem value="arriendo">Arrendar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Type */}
          <div className="md:col-span-3 space-y-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Tipo de Inmueble</label>
            <Select>
              <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50/50">
                <div className="flex items-center gap-2 truncate">
                  <Home className="w-4 h-4 text-brand-secondary shrink-0" />
                  <SelectValue placeholder="Todos los tipos" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="finca">Finca</SelectItem>
                <SelectItem value="lote">Lote</SelectItem>
                <SelectItem value="local">Local</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="md:col-span-3 space-y-2">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Ubicación</label>
            <Select>
              <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50/50">
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-4 h-4 text-brand-secondary shrink-0" />
                  <SelectValue placeholder="Ciudad / Barrio" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="armenia">Armenia</SelectItem>
                <SelectItem value="circasia">Circasia</SelectItem>
                <SelectItem value="tebaida">La Tebaida</SelectItem>
                <SelectItem value="calarca">Calarcá</SelectItem>
                <SelectItem value="filandia">Filandia</SelectItem>
                <SelectItem value="salento">Salento</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price (Simplified for demo) */}
          <div className="md:col-span-2 space-y-2">
             <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Presupuesto</label>
             <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full h-12 justify-start text-left font-normal rounded-xl border-slate-200 bg-slate-50/50">
                  <DollarSign className="w-4 h-4 mr-2 text-brand-secondary" />
                  <span>${(priceRange[0]/1000000).toFixed(0)}M - ${(priceRange[1]/1000000).toFixed(0)}M</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                  <h4 className="font-medium leading-none">Rango de Precio</h4>
                  <Slider
                    defaultValue={[0, 5000]}
                    max={5000}
                    step={100}
                    className="mt-6"
                    onValueChange={(val) => setPriceRange([val[0] * 1000000, val[1] * 1000000])}
                  />
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>${(priceRange[0]/1000000).toFixed(0)} Millones</span>
                    <span>${(priceRange[1]/1000000).toFixed(0)} Millones</span>
                  </div>
                </div>
              </PopoverContent>
             </Popover>
          </div>

          {/* Search Button */}
          <div className="md:col-span-2">
            <Button className="w-full h-12 rounded-xl bg-brand-primary hover:bg-brand-primary-soft text-white font-semibold shadow-lg shadow-brand-primary/20 transition-all hover:scale-[1.02]">
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
