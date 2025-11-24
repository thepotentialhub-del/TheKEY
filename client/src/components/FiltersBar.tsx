import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FiltersBarProps {
  filters: any;
  setFilter: (key: any, value: any) => void;
}

export default function FiltersBar({ filters, setFilter }: FiltersBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
      
      {/* Operation Pills */}
      <div className="flex p-1 bg-slate-100 rounded-full">
        {['Todos', 'Venta', 'Arriendo'].map((op) => (
          <button
            key={op}
            onClick={() => setFilter('operation', op)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              filters.operation === op 
                ? "bg-white text-brand-primary shadow-sm" 
                : "text-slate-500 hover:text-brand-primary"
            )}
          >
            {op}
          </button>
        ))}
      </div>

      {/* Dropdowns */}
      <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
        <Select value={filters.type} onValueChange={(v) => setFilter('type', v)}>
          <SelectTrigger className="w-[140px] rounded-full border-slate-200 bg-white h-9 text-sm">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Apartamento">Apartamento</SelectItem>
            <SelectItem value="Casa">Casa</SelectItem>
            <SelectItem value="Finca">Finca</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.city} onValueChange={(v) => setFilter('city', v)}>
          <SelectTrigger className="w-[140px] rounded-full border-slate-200 bg-white h-9 text-sm">
            <SelectValue placeholder="Ciudad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todas</SelectItem>
            <SelectItem value="Armenia">Armenia</SelectItem>
            <SelectItem value="Circasia">Circasia</SelectItem>
            <SelectItem value="La Tebaida">La Tebaida</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
