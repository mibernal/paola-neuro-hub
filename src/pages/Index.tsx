import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Heart, Users, Video, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const services = [
    {
      icon: Brain,
      title: 'Evaluación Neuropsicológica',
      description: 'Análisis completo de funciones cognitivas, emocionales y conductuales.',
    },
    {
      icon: Heart,
      title: 'Intervención y Rehabilitación',
      description: 'Programas personalizados para mejorar capacidades cognitivas y emocionales.',
    },
    {
      icon: Users,
      title: 'Atención a Todas las Edades',
      description: 'Servicios especializados para niños, adolescentes, adultos y adultos mayores.',
    },
    {
      icon: Video,
      title: 'Teleconsulta',
      description: 'Atención profesional desde la comodidad de tu hogar.',
    },
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Madre de paciente',
      content: 'El acompañamiento de Paola ha sido fundamental en el desarrollo de mi hijo. Su profesionalismo y calidez humana son excepcionales.',
      rating: 5,
    },
    {
      name: 'Carlos Ramírez',
      role: 'Paciente',
      content: 'Después de mi accidente, la rehabilitación cognitiva me ayudó a recuperar mi confianza y habilidades. Muy agradecido.',
      rating: 5,
    },
    {
      name: 'Ana López',
      role: 'Familiar',
      content: 'Excelente atención y seguimiento. Los resultados han sido notables y el trato siempre muy humano y profesional.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Neuropsicología Profesional y Humana
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Cuidamos tu{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                salud cerebral
              </span>{' '}
              y bienestar
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Evaluación, diagnóstico e intervención neuropsicológica especializada. 
              Acompañamiento personalizado en cada etapa de tu vida.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-primary shadow-medium hover:shadow-strong transition-all">
                <Link to="/reservas">
                  Reservar Consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/sobre-mi">Conocer Más</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Servicios Especializados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atención integral adaptada a tus necesidades específicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-medium transition-all duration-300 border-border/50 bg-card group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-soft">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="group">
              <Link to="/servicios">
                Ver Todos los Servicios
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Testimonios de Pacientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La confianza de quienes he acompañado es mi mayor motivación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4 border-border/50 hover:shadow-medium transition-all">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              ¿Listo para empezar tu proceso?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Agenda tu primera consulta y comienza tu camino hacia el bienestar cognitivo y emocional
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" variant="secondary" className="shadow-medium">
                <Link to="/reservas">Reservar Ahora</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
