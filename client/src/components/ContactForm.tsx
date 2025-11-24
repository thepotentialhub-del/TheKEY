import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-4 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-heading font-bold text-brand-primary mb-2">Escríbenos</h3>
      <p className="text-slate-500 text-sm mb-6">Responderemos en menos de 24 horas.</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Nombre</Label>
          <Input placeholder="Tu nombre" />
        </div>
        <div className="space-y-2">
          <Label>Teléfono</Label>
          <Input placeholder="+57" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>Correo</Label>
        <Input type="email" placeholder="email@ejemplo.com" />
      </div>
      
      <div className="space-y-2">
        <Label>Mensaje</Label>
        <Textarea placeholder="Estoy interesado en..." className="h-32" />
      </div>

      <Button className="w-full h-12 bg-brand-primary hover:bg-brand-primary-soft text-white rounded-xl font-bold text-lg">
        Enviar Mensaje <Send className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
