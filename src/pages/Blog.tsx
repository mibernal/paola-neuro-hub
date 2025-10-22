import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, Search, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Blog = () => {
  // Artículos de ejemplo
  const articles = [
    {
      id: 1,
      title: '¿Qué es la Neuropsicología y cuándo consultarla?',
      excerpt: 'Descubre en qué consiste esta disciplina y cómo puede ayudarte a mejorar tu calidad de vida cognitiva y emocional.',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Introducción',
      image: 'brain',
    },
    {
      id: 2,
      title: 'La importancia de la estimulación cognitiva en niños',
      excerpt: 'Conoce cómo fomentar el desarrollo cognitivo infantil mediante actividades y estrategias efectivas.',
      date: '2024-01-10',
      readTime: '7 min',
      category: 'Infantil',
      image: 'children',
    },
    {
      id: 3,
      title: 'Funciones ejecutivas: el control mental de nuestras acciones',
      excerpt: 'Explora qué son las funciones ejecutivas y cómo influyen en nuestra vida diaria, desde la planificación hasta la toma de decisiones.',
      date: '2024-01-05',
      readTime: '6 min',
      category: 'Cognición',
      image: 'executive',
    },
    {
      id: 4,
      title: 'Envejecimiento activo: mantén tu cerebro saludable',
      excerpt: 'Tips y estrategias para preservar la salud cognitiva durante el envejecimiento y prevenir el deterioro.',
      date: '2023-12-28',
      readTime: '8 min',
      category: 'Adultos Mayores',
      image: 'aging',
    },
    {
      id: 5,
      title: 'TDAH en adolescentes: comprensión y abordaje',
      excerpt: 'Una guía para entender el trastorno por déficit de atención e hiperactividad en la adolescencia.',
      date: '2023-12-20',
      readTime: '9 min',
      category: 'Adolescentes',
      image: 'adhd',
    },
    {
      id: 6,
      title: 'Rehabilitación después de un daño cerebral',
      excerpt: 'Proceso de recuperación y estrategias neuropsicológicas para mejorar la calidad de vida tras una lesión cerebral.',
      date: '2023-12-15',
      readTime: '10 min',
      category: 'Rehabilitación',
      image: 'rehab',
    },
  ];

  const categories = [
    'Todos',
    'Introducción',
    'Infantil',
    'Adolescentes',
    'Adultos',
    'Adultos Mayores',
    'Cognición',
    'Rehabilitación',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            Blog y Recursos
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Artículos sobre{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Neuropsicología
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Información, consejos y reflexiones para cuidar tu salud cognitiva y emocional
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar artículos..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Todos' ? 'default' : 'outline'}
                size="sm"
                className={category === 'Todos' ? 'bg-gradient-primary' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="group overflow-hidden border-border/50 hover:shadow-medium transition-all cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-hero relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary-foreground/50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Cargar más artículos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 text-center space-y-6 border-border/50">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto flex items-center justify-center shadow-medium">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Recibe Contenido Exclusivo
              </h2>
              <p className="text-muted-foreground">
                Suscríbete para recibir artículos, tips y recursos directamente en tu correo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="flex-1"
              />
              <Button className="bg-gradient-primary shadow-soft">
                Suscribirse
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Sin spam. Puedes darte de baja en cualquier momento.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
