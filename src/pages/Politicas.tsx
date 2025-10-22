import { Card } from '@/components/ui/card';
import { Shield, FileText } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Politicas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Shield className="w-4 h-4" />
            Políticas y Términos
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Privacidad y{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Términos
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tu privacidad y seguridad son fundamentales para nosotros
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Privacy Policy */}
          <Card className="p-8 border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-soft">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Política de Privacidad</h2>
            </div>

            <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground">
              <p className="text-foreground font-medium">Última actualización: Enero 2024</p>
              
              <h3 className="text-lg font-semibold text-foreground mt-6">1. Información que Recopilamos</h3>
              <p>
                Recopilamos información personal que usted nos proporciona directamente, incluyendo nombre, 
                correo electrónico, teléfono y datos relacionados con su consulta neuropsicológica.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">2. Uso de la Información</h3>
              <p>Utilizamos su información para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Proporcionar servicios de evaluación e intervención neuropsicológica</li>
                <li>Comunicarnos con usted sobre su tratamiento</li>
                <li>Mejorar nuestros servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">3. Protección de Datos Sensibles</h3>
              <p>
                Los datos clínicos y de salud están protegidos bajo estrictos protocolos de confidencialidad 
                según la Ley 1581 de 2012 de Colombia y normativas vigentes sobre protección de datos personales.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">4. Compartir Información</h3>
              <p>
                No compartimos su información personal con terceros, excepto cuando sea necesario para 
                proporcionar el servicio, con su consentimiento explícito, o cuando sea requerido por ley.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">5. Sus Derechos</h3>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Acceder a su información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Revocar su consentimiento</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">6. Seguridad</h3>
              <p>
                Implementamos medidas técnicas y organizativas apropiadas para proteger su información 
                contra acceso no autorizado, pérdida o destrucción.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">7. Contacto</h3>
              <p>
                Para cualquier consulta sobre esta política de privacidad, puede contactarnos en 
                contacto@paolahenao.com
              </p>
            </div>
          </Card>

          {/* Terms and Conditions */}
          <Card className="p-8 border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center shadow-soft">
                <FileText className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Términos y Condiciones</h2>
            </div>

            <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground">
              <p className="text-foreground font-medium">Última actualización: Enero 2024</p>

              <h3 className="text-lg font-semibold text-foreground mt-6">1. Aceptación de Términos</h3>
              <p>
                Al utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">2. Servicios Ofrecidos</h3>
              <p>
                Ofrecemos servicios de evaluación neuropsicológica, intervención cognitiva, teleconsulta 
                y otros servicios relacionados con la neuropsicología clínica.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">3. Responsabilidades del Usuario</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Asistir puntualmente a las citas programadas</li>
                <li>Notificar cancelaciones con al menos 24 horas de anticipación</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso (si aplica)</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">4. Política de Cancelación</h3>
              <p>
                Las cancelaciones deben realizarse con al menos 24 horas de anticipación. 
                Cancelaciones tardías o inasistencias sin aviso pueden estar sujetas a cargos.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">5. Confidencialidad Profesional</h3>
              <p>
                Toda la información compartida en las sesiones está protegida por el secreto profesional, 
                excepto en casos donde la ley requiera su divulgación.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">6. Teleconsulta</h3>
              <p>
                Los servicios de teleconsulta requieren una conexión estable a internet y un dispositivo 
                con cámara y micrófono. El usuario es responsable de garantizar un entorno privado para la sesión.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">7. Limitación de Responsabilidad</h3>
              <p>
                Los servicios se proporcionan con fines de evaluación e intervención neuropsicológica. 
                No sustituyen atención médica de emergencia ni tratamiento psiquiátrico cuando sea necesario.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">8. Propiedad Intelectual</h3>
              <p>
                Todo el contenido de este sitio web, incluyendo textos, imágenes y materiales, 
                está protegido por derechos de autor.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">9. Modificaciones</h3>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Los cambios serán notificados a través del sitio web.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">10. Contacto</h3>
              <p>
                Para consultas sobre estos términos, contáctenos en contacto@paolahenao.com
              </p>
            </div>
          </Card>

          {/* Important Notice */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Nota Importante:</strong> Estas políticas y términos 
              son plantillas generales. Es fundamental que consultes con un abogado especializado en 
              salud y protección de datos para adaptarlos a tu práctica específica y asegurar el 
              cumplimiento de todas las normativas aplicables en Colombia.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Politicas;
