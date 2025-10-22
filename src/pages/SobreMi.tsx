import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, BookOpen, Heart, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const SobreMi = () => {
  const education = [
    {
      title: 'Maestría en Neuropsicología Clínica',
      institution: 'Universidad Nacional de Colombia',
      year: '2018',
    },
    {
      title: 'Psicología',
      institution: 'Universidad de los Andes',
      year: '2015',
    },
    {
      title: 'Especialización en Neuropsicología Infantil',
      institution: 'Universidad Javeriana',
      year: '2020',
    },
  ];

  const certifications = [
    'Evaluación Neuropsicológica Integral (ESNEP)',
    'Intervención en Trastornos del Neurodesarrollo',
    'Rehabilitación Cognitiva Computarizada',
    'Mindfulness y Neurociencia Aplicada',
  ];

  const values = [
    {
      icon: Heart,
      title: 'Empatía',
      description: 'Cada persona es única y merece una atención personalizada y comprensiva.',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Compromiso con la actualización constante y las mejores prácticas.',
    },
    {
      icon: BookOpen,
      title: 'Evidencia Científica',
      description: 'Todos mis métodos están respaldados por la investigación actual.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="w-4 h-4" />
                Sobre Mí
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Paola Henao
              </h1>
              
              <p className="text-xl text-primary font-medium">
                Neuropsicóloga Clínica
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Con más de 10 años de experiencia en el campo de la neuropsicología, mi pasión es 
                  ayudar a las personas a comprender y potenciar sus capacidades cognitivas y emocionales.
                </p>
                <p>
                  Me especializo en la evaluación, diagnóstico e intervención neuropsicológica en niños, 
                  adolescentes, adultos y adultos mayores, siempre desde un enfoque integral, humano y 
                  basado en evidencia científica.
                </p>
                <p>
                  Mi objetivo es acompañarte en tu proceso de desarrollo, recuperación o adaptación, 
                  brindándote herramientas personalizadas que te permitan alcanzar tu máximo potencial 
                  y mejorar tu calidad de vida.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-gradient-primary shadow-medium">
                  <Link to="/reservas">
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-hero shadow-strong overflow-hidden">
                <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                  {/* Placeholder para foto profesional */}
                  <div className="text-center p-8">
                    <GraduationCap className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-50">Foto profesional aquí</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Formación Académica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respaldada por instituciones de alto prestigio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {education.map((item, index) => (
              <Card key={index} className="p-6 space-y-3 border-border/50 hover:shadow-medium transition-all">
                <GraduationCap className="w-10 h-10 text-primary" />
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                <p className="text-xs text-primary font-medium">{item.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Certificaciones y Especializaciones
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mis Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principios que guían mi práctica profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center space-y-4 border-border/50 hover:shadow-medium transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary mx-auto flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-hero relative overflow-hidden border-0">
            <div className="absolute inset-0 bg-primary/90" />
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                ¿Hablamos sobre tu caso?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Estoy aquí para escucharte y acompañarte en tu proceso. Agenda tu primera consulta.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" variant="secondary" className="shadow-medium">
                  <Link to="/reservas">Reservar Consulta</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/contacto">Enviar Mensaje</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreMi;
