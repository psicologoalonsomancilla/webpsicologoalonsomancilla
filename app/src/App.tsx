import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Waves, MapPin, Video, ArrowRight, CheckCircle, 
  Instagram, Mail, Send, BookOpen, Brain, Sparkles, 
  ChevronDown, ChevronUp, Lightbulb, Target
} from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Cuánto dura un proceso terapéutico?',
      answer: 'La terapia sistémica breve se caracteriza por ser focalizada y orientada a objetivos concretos. Generalmente, los procesos oscilan entre 6 y 12 sesiones, aunque esto depende de la complejidad de cada situación. La frecuencia suele ser semanal o quincenal, y siempre vamos revisando el avance para ajustar el ritmo a tus necesidades.'
    },
    {
      question: '¿Cuál es la diferencia entre terapia sistémica y otras terapias?',
      answer: 'A diferencia del psicoanálisis, que explora el pasado y el inconsciente de forma extensa, la terapia sistémica se enfoca en el presente y en los patrones de interacción que mantienen el problema. Es más breve y práctica que la terapia humanista, y a diferencia de la TCC, trabaja con las relaciones y el contexto, no solo con pensamientos individuales. Es ideal si buscas cambios concretos en tu vida actual.'
    },
    {
      question: '¿Funciona la terapia online igual que la presencial?',
      answer: 'Las investigaciones más recientes (2024-2025) muestran que la terapia sistémica online tiene resultados equivalentes a la presencial para la mayoría de los casos. Lo importante es contar con un espacio privado, buena conexión y compromiso con el proceso. Ofrezco ambas modalidades para que elijas la que mejor se adapte a tu vida.'
    },
    {
      question: '¿Necesito tener un diagnóstico para consultar?',
      answer: 'No. Trabajo desde un enfoque no patologizante: no te defino por etiquetas diagnósticas. Me interesa entender tu situación, tus relaciones y lo que quieres cambiar. Si necesitas un informe clínico para coordinación con otros profesionales, lo puedo elaborar, pero siempre enfocado en la utilidad para ti.'
    },
    {
      question: '¿Qué pasa si no sé exactamente cuál es mi problema?',
      answer: 'Es completamente normal. Muchas personas llegan con una sensación de malestar difuso: "algo no está bien, pero no sé qué". En la primera sesión exploramos juntos tu situación, identificamos patrones y definimos juntos los objetivos. No necesitas tenerlo todo claro para empezar.'
    },
    {
      question: '¿La terapia sistémica tiene respaldo científico?',
      answer: 'Sí. La terapia sistémica breve, especialmente la centrada en soluciones (SFBT), ha demostrado su eficacia en múltiples meta-análisis. Investigaciones recientes (2024-2025) confirman su efectividad para trastornos de ansiedad, depresión, problemas relacionales y más. Es considerada una terapia basada en evidencia por organizaciones internacionales.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-[#2B5F7A]" />
              <span className={`font-semibold text-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Psicólogo Alonso Mancilla
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Inicio', 'Sobre mí', 'Enfoque', 'Evidencia', 'El Espacio', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-colors hover:opacity-80 ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white text-sm"
            >
              Agendar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/box-vista-mar.jpg"
            alt="Consulta con vista al mar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-[#7EC8E3]" />
              <span className="text-white/90 text-sm">Valparaíso, Chile</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Terapia con una vista que{' '}
              <span className="text-[#7EC8E3]">transforma</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Psicoterapia sistémica breve basada en evidencia. Un espacio seguro 
              frente al mar para tu proceso de sanación y crecimiento personal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contacto')}
                size="lg"
                className="bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white px-8"
              >
                Agendar consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => scrollToSection('enfoque')}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Conoce mi enfoque
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#7EC8E3]" />
                <span className="text-sm">Atención presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-[#7EC8E3]" />
                <span className="text-sm">Terapia online</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#7EC8E3]" />
                <span className="text-sm">Basada en evidencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/alonso-perfil.jpg"
                  alt="Psicólogo Alonso Mancilla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#2B5F7A] text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">+5</p>
                <p className="text-sm text-white/80">años de experiencia</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre mí
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Soy psicólogo clínico con formación especializada en <strong>Terapia Sistémica Breve</strong>, 
                  un enfoque que garantiza un proceso ordenado y eficaz para cada persona que 
                  confía en mi acompañamiento terapéutico.
                </p>
                <p>
                  Mi trabajo se fundamenta en metodologías <strong>basadas en evidencia científica</strong>, 
                  combinando el enfoque sistémico con técnicas de imaginería terapéutica que 
                  permiten una exploración amable y profunda de tu psiquis.
                </p>
                <p>
                  Cuento con diplomado en psicoterapia breve para pacientes que han sufrido 
                  abuso sexual, lo que me ha permitido desarrollar una práctica clínica sensible 
                  y especializada en trabajar con experiencias complejas.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#F0F7FA] p-4 rounded-xl">
                  <p className="font-semibold text-[#2B5F7A]">Formación</p>
                  <p className="text-sm text-gray-600">Psicología Clínica + Diplomado especializado</p>
                </div>
                <div className="bg-[#F0F7FA] p-4 rounded-xl">
                  <p className="font-semibold text-[#2B5F7A]">Enfoque</p>
                  <p className="text-sm text-gray-600">Sistémico con énfasis en evidencia científica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué Terapia Sistémica Breve? */}
      <section id="enfoque" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué Terapia Sistémica Breve?
            </h2>
            <p className="text-gray-600 text-lg">
              Un enfoque práctico, eficaz y respaldado por la ciencia para transformar tu vida
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Orientada al presente',
                description: 'A diferencia del psicoanálisis, que explora extensamente el pasado, la terapia sistémica trabaja con los patrones actuales que mantienen el problema. Nos enfocamos en qué está sucediendo hoy y cómo cambiarlo.',
                icon: Target,
              },
              {
                title: 'Eficacia demostrada',
                description: 'Meta-análisis recientes (2024-2025) confirman que la terapia sistémica breve es tan efectiva como otros enfoques para depresión, ansiedad y problemas relacionales, con la ventaja de ser más breve.',
                icon: CheckCircle,
              },
              {
                title: 'Proceso colaborativo',
                description: 'No soy el experto que te dice qué hacer. Juntos co-construimos soluciones, identificando recursos que ya has utilizado antes y que podemos activar nuevamente.',
                icon: Brain,
              },
              {
                title: 'Enfoque en soluciones',
                description: 'En lugar de analizar profundamente el origen del problema, nos enfocamos en las "excepciones": momentos en que el problema no aparece o es más manejable, para amplificar lo que funciona.',
                icon: Sparkles,
              },
              {
                title: 'Mirada relacional',
                description: 'Entendemos que el malestar no está solo "en ti", sino en la forma en que te relacionas con tu entorno. Trabajamos con tus vínculos, comunicación y patrones familiares o de pareja.',
                icon: Waves,
              },
              {
                title: 'Resultados medibles',
                description: 'Utilizamos escalas y objetivos concretos para evaluar el progreso. Sabrás en qué punto estás y hacia dónde vas. Cada sesión te lleva un elemento práctico para implementar.',
                icon: Lightbulb,
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-[#2B5F7A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparación de Enfoques */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comparación de enfoques terapéuticos
            </h2>
            <p className="text-gray-600 text-lg">
              Cada modelo tiene sus fortalezas. Aquí te ayudo a entender cuál podría ajustarse mejor a lo que buscas
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2B5F7A] text-white">
                  <th className="p-4 text-left font-semibold rounded-tl-xl">Aspecto</th>
                  <th className="p-4 text-left font-semibold bg-[#1E4A5F]">Terapia Sistémica Breve</th>
                  <th className="p-4 text-left font-semibold">Psicoanálisis</th>
                  <th className="p-4 text-left font-semibold rounded-tr-xl">Terapia Humanista</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900 bg-gray-50">Duración típica</td>
                  <td className="p-4 bg-[#F0F7FA]">6-12 sesiones</td>
                  <td className="p-4">Años (proceso largo)</td>
                  <td className="p-4">Variable (meses a años)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900 bg-gray-50">Enfoque temporal</td>
                  <td className="p-4 bg-[#F0F7FA]">Presente y futuro</td>
                  <td className="p-4">Pasado (infancia, inconsciente)</td>
                  <td className="p-4">Presente y experiencia subjetiva</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900 bg-gray-50">Objetivo principal</td>
                  <td className="p-4 bg-[#F0F7FA]">Cambios prácticos y observables</td>
                  <td className="p-4">Comprensión profunda del inconsciente</td>
                  <td className="p-4">Autoconocimiento y crecimiento personal</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900 bg-gray-50">Rol del terapeuta</td>
                  <td className="p-4 bg-[#F0F7FA]">Facilitador de soluciones</td>
                  <td className="p-4">Intérprete del inconsciente</td>
                  <td className="p-4">Acompañante empático</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900 bg-gray-50">Ideal para</td>
                  <td className="p-4 bg-[#F0F7FA]">Problemas concretos, crisis, cambios</td>
                  <td className="p-4">Conflictos profundos, traumas antiguos</td>
                  <td className="p-4">Crisis existenciales, búsqueda de sentido</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 bg-gray-50 rounded-bl-xl">Respaldo científico</td>
                  <td className="p-4 bg-[#F0F7FA]">Alto (evidencia reciente 2024-2025)</td>
                  <td className="p-4">Moderado (difícil de medir)</td>
                  <td className="p-4 rounded-br-xl">Moderado</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-6">
            La mejor terapia es la que se adapta a tus necesidades. Si buscas cambios concretos en tu vida actual, 
            la terapia sistémica breve puede ser ideal para ti.
          </p>
        </div>
      </section>

      {/* Evidencia Científica */}
      <section id="evidencia" className="py-20 md:py-32 bg-[#2B5F7A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Respaldado por la ciencia
            </h2>
            <p className="text-white/80 text-lg">
              Investigaciones recientes que confirman la efectividad de la terapia sistémica breve
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Meta-análisis 2024-2025',
                description: 'Żak & Pękala (2025) publicaron un umbrella review en Psychotherapy Research confirmando la efectividad de la Terapia Centrada en Soluciones (SFBT) para trastornos mentales comunes, con resultados comparables a otros enfoques establecidos.',
                source: 'Psychotherapy Research, 2025'
              },
              {
                title: 'Depresión y ansiedad',
                description: 'Huang et al. (2024) encontraron que la terapia sistémica alivia síntomas depresivos con mayor eficacia que lista de espera y con resultados similares a terapia cognitivo-conductual en estudios con niños y adolescentes.',
                source: 'Meta-análisis, 2024'
              },
              {
                title: 'Terapia online equivalente',
                description: 'Estudios recientes (2025) comparando modalidad digital vs presencial en terapia sistémica no encontraron diferencias significativas en eficacia, confirmando que la terapia online es una alternativa válida.',
                source: 'Interactive Journal of Medical Research, 2025'
              },
              {
                title: 'Trastornos de conducta',
                description: 'La Brief Strategic Family Therapy mostró efectividad en reducción de uso de sustancias y mejora en relaciones familiares en adolescentes, con evidencia de seguimiento a largo plazo.',
                source: 'Journal of Marital and Family Therapy, 2024'
              },
              {
                title: 'Eficacia en escuelas',
                description: 'Hong et al. (2025) realizaron un meta-análisis en Corea (1995-2024) demostrando que SFBT en contextos escolares reduce significativamente problemas conductuales y mejora el bienestar estudiantil.',
                source: 'Research on Social Work Practice, 2025'
              },
              {
                title: 'Reconocimiento internacional',
                description: 'La SFBT Association publicó en 2025 su manual de tratamiento actualizado, consolidando los principios y técnicas de la terapia sistémica breve como intervención basada en evidencia.',
                source: 'SFBTA Treatment Manual, 2025'
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white h-full">
                <CardContent className="p-6">
                  <BookOpen className="h-6 w-6 text-[#7EC8E3] mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{item.description}</p>
                  <p className="text-[#7EC8E3] text-xs font-medium">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm">
              Las referencias completas están disponibles bajo solicitud. 
              La terapia sistémica breve es reconocida como tratamiento basado en evidencia por múltiples organizaciones internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Técnicas Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Técnicas que utilizo
            </h2>
            <p className="text-gray-600 text-lg">
              Herramientas específicas de la terapia sistémica breve para generar cambios duraderos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Pregunta del milagro',
                description: 'Te invito a imaginar: "Si mañana despiertas y el problema se ha resuelto mágicamente, ¿qué notarías primero? ¿Qué sería diferente?" Esta técnica activa recursos y clarifica objetivos concretos.',
              },
              {
                title: 'Búsqueda de excepciones',
                description: 'Identificamos momentos en que el problema no aparece o es más manejable. "¿Cuándo fue la última vez que esto no te pasó? ¿Qué hiciste diferente?" Estas excepciones contienen las semillas de la solución.',
              },
              {
                title: 'Escalas de progreso (0-10)',
                description: 'Evaluamos tu situación en una escala numérica para hacer tangible el cambio. "Si 0 es lo peor y 10 tu objetivo, ¿dónde estás ahora? ¿Qué te haría subir medio punto?"',
              },
              {
                title: 'Imaginería terapéutica',
                description: 'Utilizamos visualizaciones guiadas para explorar tu psiquis de forma amable, acceder a recursos internos y ensayar nuevas formas de relacionarte contigo y con otros.',
              },
              {
                title: 'Reencuadre (Reframing)',
                description: 'Cambiamos la perspectiva sobre una situación problemática. Lo que parece un "defecto" puede reinterpretarse como un intento de adaptación. Esto abre nuevas posibilidades de acción.',
              },
              {
                title: 'Tareas entre sesiones',
                description: 'Diseñamos experimentos conductuales simples para probar nuevas formas de actuar. La terapia ocurre tanto dentro como fuera de la consulta.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#F8FAFC] p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2B5F7A] text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El Espacio Section */}
      <section id="el-espacio" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Un espacio que invita a la calma
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mi consulta privada está ubicada en un lugar privilegiado de Valparaíso, 
                  con una <strong>vista panorámica al mar</strong> que se convierte en parte del proceso terapéutico.
                </p>
                <p>
                  El sonido de las olas, la luz natural y la conexión con el horizonte crean 
                  un ambiente único que facilita la relajación y la introspección.
                </p>
                <p>
                  Este espacio ha sido diseñado pensando en tu comodidad y privacidad, 
                  para que cada sesión sea una experiencia de verdadero cuidado personal.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                {[
                  'Vista panorámica al mar',
                  'Ambiente tranquilo y privado',
                  'Iluminación natural',
                  'Fácil acceso en Valparaíso',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#2B5F7A]/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#2B5F7A]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/box-vista-mar.jpg"
                  alt="Espacio de consulta con vista al mar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#2B5F7A]" />
                  <div>
                    <p className="font-semibold text-gray-900">Valparaíso</p>
                    <p className="text-sm text-gray-500">Consulta presencial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 md:py-32 bg-[#2B5F7A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modalidades de atención
            </h2>
            <p className="text-white/80 text-lg">
              Elige la opción que mejor se adapte a tus necesidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Presencial</h3>
                    <p className="text-gray-500">En mi consulta en Valparaíso</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2B5F7A]">$36.000</span>
                  <span className="text-gray-500"> / sesión</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Vista al mar durante la sesión',
                    'Ambiente tranquilo y privado',
                    'Duración: 50 minutos',
                    'Ideal para Valparaíso, Viña y alrededores',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#2B5F7A] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection('contacto')}
                  className="w-full bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white"
                >
                  Consultar disponibilidad
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#7EC8E3]/20 rounded-xl flex items-center justify-center">
                    <Video className="h-6 w-6 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Online</h3>
                    <p className="text-gray-500">Desde cualquier lugar de Chile</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2B5F7A]">$28.000</span>
                  <span className="text-gray-500"> / sesión</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Desde la comodidad de tu hogar',
                    'Plataforma segura y privada',
                    'Duración: 50 minutos',
                    'Disponible para todo Chile',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#2B5F7A] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection('contacto')}
                  className="w-full bg-[#7EC8E3] hover:bg-[#5BA8C4] text-[#1E4A5F] font-semibold"
                >
                  Consultar disponibilidad
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-gray-600 text-lg">
              Respuestas a las dudas más comunes sobre el proceso terapéutico
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#2B5F7A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#2B5F7A] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comienza tu proceso
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                El primer paso es el más importante. Contáctame para coordinar una sesión 
                o resolver cualquier duda sobre el proceso terapéutico.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instagram</p>
                    <p className="font-semibold text-gray-900">@ps.almancilla</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Correo electrónico</p>
                    <p className="font-semibold text-gray-900">almancillaps@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="font-semibold text-gray-900">Valparaíso, Chile</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 mb-4">¿Listo para agendar o tienes dudas?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://www.instagram.com/ps.almancilla/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-[#E4405F] hover:bg-[#D62D4E] text-white">
                      <Instagram className="mr-2 h-4 w-4" />
                      Solicitar contacto
                    </Button>
                  </a>
                  <a 
                    href="mailto:almancillaps@gmail.com?subject=Consulta%20terapia%20-%20Contacto%20desde%20web&body=Hola%20Alonso,%0A%0AMe%20interesa%20coordinar%20una%20sesión%20de%20terapia.%0A%0AModalidad%20preferida:%20%0A%0AMotivo%20de%20consulta:%20%0A%0ASaludos,"
                  >
                    <Button variant="outline" className="w-full sm:w-auto border-[#2B5F7A] text-[#2B5F7A] hover:bg-[#2B5F7A]/10">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar email
                    </Button>
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Te responderé a la brevedad para coordinar tu sesión
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Solicita información
              </h3>
              <form 
                action="mailto:almancillaps@gmail.com" 
                method="post" 
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B5F7A] focus:ring-2 focus:ring-[#2B5F7A]/20 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B5F7A] focus:ring-2 focus:ring-[#2B5F7A]/20 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modalidad preferida
                  </label>
                  <select name="modalidad" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B5F7A] focus:ring-2 focus:ring-[#2B5F7A]/20 outline-none transition-all bg-white">
                    <option value="">Selecciona una opción</option>
                    <option value="presencial">Presencial (Valparaíso)</option>
                    <option value="online">Online</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B5F7A] focus:ring-2 focus:ring-[#2B5F7A]/20 outline-none transition-all resize-none"
                    placeholder="Cuéntame brevemente tu motivo de consulta..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white py-3"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-[#7EC8E3]" />
              <span className="font-semibold text-lg">Psicólogo Alonso Mancilla</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Valparaíso, Chile</span>
              <span>•</span>
              <span>Terapia sistémica breve basada en evidencia</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2025 Psicólogo Alonso Mancilla. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
