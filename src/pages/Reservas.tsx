import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, Video, MapPin, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const Reservas = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'presencial',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Solicitud enviada",
      description: "En breve nos pondremos en contacto contigo para confirmar tu cita.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'presencial',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceOptions = [
    {
      value: 'presencial',
      icon: MapPin,
      title: 'Presencial',
      description: 'Consulta en el consultorio',
    },
    {
      value: 'virtual',
      icon: Video,
      title: 'Teleconsulta',
      description: 'Sesión por videollamada',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Calendar className="w-4 h-4" />
            Sistema de Reservas
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Agenda tu{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Consulta
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="md:col-span-2 p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Información Personal</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+57 300 123 4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Type */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Tipo de Consulta</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceOptions.map((option) => {
                      const Icon = option.icon;
                      const isSelected = formData.serviceType === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: option.value })}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            isSelected
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <Icon className={`w-5 h-5 mt-0.5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                            <div className="space-y-1">
                              <div className="font-semibold text-foreground">{option.title}</div>
                              <div className="text-sm text-muted-foreground">{option.description}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">Fecha y Hora Preferida</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Fecha preferida</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Hora preferida</Label>
                      <Input
                        id="preferredTime"
                        name="preferredTime"
                        type="time"
                        value={formData.preferredTime}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Motivo de consulta (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente el motivo de tu consulta..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary shadow-medium">
                  Enviar Solicitud
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Al enviar este formulario, aceptas nuestra política de privacidad y tratamiento de datos.
                </p>
              </form>
            </Card>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="p-6 space-y-4 border-border/50">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horarios de Atención
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-medium text-foreground">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium text-foreground">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium text-foreground">Cerrado</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4 border-border/50 bg-gradient-subtle">
                <h3 className="font-semibold text-foreground">¿Qué incluye la primera consulta?</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    'Entrevista clínica completa',
                    'Análisis de tu situación',
                    'Orientación inicial',
                    'Plan de evaluación',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 space-y-3 border-border/50">
                <h3 className="font-semibold text-foreground">¿Necesitas ayuda?</h3>
                <p className="text-sm text-muted-foreground">
                  Si tienes alguna pregunta, no dudes en contactarnos.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Ir a Contacto
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservas;
