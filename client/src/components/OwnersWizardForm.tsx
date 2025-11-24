import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

export default function OwnersWizardForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
    // TODO: Replace this mock submit with a real GHL (GoHighLevel) webhook or embedded form.
    // This is the integration point for the client's CRM / marketing automation.
  };

  if (isSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-brand-primary mb-2">¡Solicitud Recibida!</h3>
        <p className="text-slate-600 max-w-xs mx-auto">
          Un asesor experto se pondrá en contacto contigo en breve para valorar tu inmueble.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8 px-2 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-brand-accent -z-10 transition-all duration-500" 
          style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
        />
        
        {[1, 2, 3].map((s) => (
          <div 
            key={s}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 ${
              step >= s 
                ? "bg-brand-accent border-brand-accent text-white" 
                : "bg-white border-slate-200 text-slate-400"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div className="flex-1">
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-brand-primary mb-4">Datos del Inmueble</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tipo</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="apto">Apartamento</SelectItem>
                    <SelectItem value="finca">Finca</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Ciudad</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="armenia">Armenia</SelectItem>
                    <SelectItem value="circasia">Circasia</SelectItem>
                    <SelectItem value="tebaida">La Tebaida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Dirección / Barrio</Label>
              <Input placeholder="Ej: Laureles, Calle 123..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Área (m²)</Label>
                <Input type="number" placeholder="Ej: 80" />
              </div>
              <div className="space-y-2">
                <Label>Valor Estimado</Label>
                <Input type="number" placeholder="$" />
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-brand-primary mb-4">Datos del Propietario</h3>
            
            <div className="space-y-2">
              <Label>Nombre Completo</Label>
              <Input placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <Label>Teléfono / WhatsApp</Label>
              <Input placeholder="+57 300..." />
            </div>
            <div className="space-y-2">
              <Label>Correo Electrónico</Label>
              <Input type="email" placeholder="tucorreo@email.com" />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-brand-primary mb-4">Detalles Adicionales</h3>
            
            <div className="space-y-2">
              <Label>Cuéntanos más sobre tu inmueble</Label>
              <Textarea 
                className="h-32" 
                placeholder="Características especiales, estado actual, motivo de venta..." 
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between pt-6 mt-4 border-t border-slate-100">
        <Button 
          variant="ghost" 
          onClick={handlePrev} 
          disabled={step === 1}
          className={step === 1 ? "invisible" : ""}
        >
          <ChevronLeft className="w-4 h-4 mr-2" /> Anterior
        </Button>
        
        {step < 3 ? (
          <Button onClick={handleNext} className="bg-brand-primary text-white">
            Siguiente <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit} 
            disabled={isSubmitting}
            className="bg-brand-accent hover:bg-emerald-600 text-white px-8"
          >
            {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
          </Button>
        )}
      </div>
    </div>
  );
}
