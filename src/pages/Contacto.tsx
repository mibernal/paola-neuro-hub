import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'jessi.henao4@gmail.com',
      link: 'mailto:jessi.henao4@gmail.com',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+57 300 123 4567',
      link: 'tel:+573001234567',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Bogotá, Colombia',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Send className="w-4 h-4" />
            Contacto
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            ¿Tienes alguna{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              pregunta?
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estoy aquí para ayudarte. Escríbeme y te responderé a la brevedad posible.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center space-y-3 border-border/50 hover:shadow-medium transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{info.title}</h3>
                  {info.link !== '#' ? (
                    <a
                      href={info.link}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="md:col-span-2 p-8 border-border/50">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Envíame un Mensaje
                </h2>
                <p className="text-muted-foreground">
                  Completa el formulario y me pondré en contacto contigo lo antes posible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Motivo de tu consulta"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame en qué puedo ayudarte..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary shadow-medium">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Al enviar este formulario, aceptas nuestra política de privacidad.
                </p>
              </form>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 space-y-4 border-border/50 bg-gradient-subtle">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horarios de Atención
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Lunes - Viernes:</span>
                    <span className="font-medium text-foreground">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sábados:</span>
                    <span className="font-medium text-foreground">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Domingos:</span>
                    <span className="font-medium text-foreground">Cerrado</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4 border-border/50">
                <h3 className="font-semibold text-foreground">Tiempo de Respuesta</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Normalmente respondo en menos de 24 horas durante días hábiles. 
                  Para urgencias, por favor llama directamente.
                </p>
              </Card>

              <Card className="p-6 space-y-4 border-border/50 bg-gradient-hero relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/90" />
                <div className="relative space-y-3">
                  <h3 className="font-semibold text-primary-foreground">¿Prefieres agendar directamente?</h3>
                  <p className="text-sm text-primary-foreground/90">
                    Reserva tu cita de forma rápida y sencilla
                  </p>
                  <Button asChild variant="secondary" className="w-full shadow-medium">
                    <a href="/reservas">Ir a Reservas</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
