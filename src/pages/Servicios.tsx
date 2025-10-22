import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Heart, 
  Users, 
  Video, 
  ClipboardList, 
  Target, 
  Lightbulb,
  Baby,
  GraduationCap,
  UserCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Servicios = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'Evaluación Neuropsicológica Integral',
      description: 'Análisis detallado de funciones cognitivas, conductuales y emocionales mediante pruebas estandarizadas.',
      features: [
        'Evaluación de memoria, atención y concentración',
        'Análisis de funciones ejecutivas',
        'Evaluación del lenguaje y habilidades visuoespaciales',
        'Informe completo con resultados y recomendaciones',
      ],
      duration: '3-4 sesiones',
    },
    {
      icon: Heart,
      title: 'Intervención y Rehabilitación Cognitiva',
      description: 'Programas personalizados diseñados para mejorar o recuperar funciones cognitivas afectadas.',
      features: [
        'Estimulación cognitiva individualizada',
        'Estrategias compensatorias',
        'Entrenamiento en habilidades específicas',
        'Seguimiento continuo del progreso',
      ],
      duration: 'Según necesidad',
    },
    {
      icon: Video,
      title: 'Teleconsulta',
      description: 'Atención profesional a distancia con la misma calidad que una consulta presencial.',
      features: [
        'Evaluaciones online con herramientas validadas',
        'Sesiones de intervención virtual',
        'Flexibilidad de horarios',
        'Plataforma segura y confidencial',
      ],
      duration: '60 min/sesión',
    },
    {
      icon: Users,
      title: 'Talleres y Charlas',
      description: 'Programas educativos para instituciones, empresas y grupos sobre temas neuropsicológicos.',
      features: [
        'Salud cerebral y envejecimiento activo',
        'Neurodesarrollo infantil',
        'Manejo del estrés y la ansiedad',
        'Funciones ejecutivas en el aula',
      ],
      duration: 'Personalizable',
    },
  ];

  const populations = [
    {
      icon: Baby,
      title: 'Niños y Niñas',
      description: 'Evaluación del neurodesarrollo, dificultades de aprendizaje, TDAH, trastornos del lenguaje.',
    },
    {
      icon: GraduationCap,
      title: 'Adolescentes',
      description: 'Orientación vocacional, problemas de atención, ansiedad, rendimiento académico.',
    },
    {
      icon: UserCheck,
      title: 'Adultos',
      description: 'Daño cerebral adquirido, deterioro cognitivo, estrés, alteraciones emocionales.',
    },
    {
      icon: Heart,
      title: 'Adultos Mayores',
      description: 'Evaluación de memoria, prevención del deterioro, envejecimiento activo y saludable.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Primera Consulta',
      description: 'Entrevista inicial para conocer tu situación y necesidades específicas.',
    },
    {
      number: '02',
      title: 'Evaluación',
      description: 'Aplicación de pruebas especializadas según tu caso particular.',
    },
    {
      number: '03',
      title: 'Diagnóstico',
      description: 'Análisis de resultados y entrega de informe detallado.',
    },
    {
      number: '04',
      title: 'Intervención',
      description: 'Plan personalizado de tratamiento y seguimiento continuo.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <ClipboardList className="w-4 h-4" />
            Servicios Especializados
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Atención Neuropsicológica{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Integral
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Evaluación, diagnóstico e intervención basados en evidencia científica, 
            adaptados a las necesidades de cada persona.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 space-y-6 border-border/50 hover:shadow-medium transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Populations Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Atención para Todas las Edades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Servicios especializados según la etapa vital y necesidades específicas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {populations.map((pop, index) => {
              const Icon = pop.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center space-y-4 border-border/50 hover:shadow-medium transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-secondary mx-auto flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{pop.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pop.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ¿Cómo es el Proceso?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un camino estructurado hacia tu bienestar cognitivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto flex items-center justify-center shadow-medium text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-hero relative overflow-hidden border-0">
            <div className="absolute inset-0 bg-primary/90" />
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <Target className="w-12 h-12 text-primary-foreground mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                ¿Necesitas una Evaluación?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Agenda tu primera consulta y comencemos a trabajar juntos en tu bienestar cognitivo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" variant="secondary" className="shadow-medium">
                  <Link to="/reservas">
                    Reservar Consulta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/contacto">Hacer una Pregunta</Link>
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

export default Servicios;
