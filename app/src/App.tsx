import { useEffect, useState } from 'react';
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
      answer: 'La terapia sistémica breve se caracteriza por ser focalizada y orientada a objetivos concretos. Generalmente, los procesos oscilan entre 6 y 12 sesiones, aunque esto depende de la complejidad de cada situación.'
    },
    {
      question: '¿Cuál es la diferencia entre terapia sistémica y otras terapias?',
      answer: 'A diferencia del psicoanálisis, la terapia sistémica se enfoca en el presente y en los patrones de interacción que mantienen el problema. Es ideal si buscas cambios concretos en tu vida actual.'
    },
    {
      question: '¿Funciona la terapia online igual que la presencial?',
      answer: 'Investigaciones de 2024-2025 muestran que la terapia sistémica online tiene resultados equivalentes a la presencial. Ofrezco ambas modalidades.'
    },
    {
      question: '¿Necesito tener un diagnóstico para consultar?',
      answer: 'No. Trabajo desde un enfoque no patologizante: no te defino por etiquetas diagnósticas. Me interesa entender tu situación y lo que quieres cambiar.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <Waves className={`h-6 w-6 ${scrolled ? 'text-[#2B5F7A]' : 'text-white'}`} />
              <span className={`font-semibold text-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Alonso Mancilla
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
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Agendar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/1771861945878.jpg"
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
              Terapia con una vista que <span className="text-[#7EC8E3]">transforma</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Psicoterapia sistémica breve basada en evidencia. Un espacio seguro frente al mar para tu proceso de crecimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center transition-all shadow-lg"
              >
                Agendar consulta <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                onClick={() => scrollToSection('enfoque')}
                className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium transition-all"
              >
                Conoce mi enfoque
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/1771861945854.jpg"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>Soy psicólogo clínico con formación especializada en <strong>Terapia Sistémica Breve</strong>.</p>
                <p>Mi trabajo se fundamenta en metodologías <strong>basadas en evidencia científica</strong>, combinando el enfoque sistémico con técnicas de imaginería terapéutica.</p>
                <p>Cuento con diplomado en psicoterapia breve para pacientes que han sufrido abuso sexual, lo que permite una práctica clínica sensible y especializada.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="font-semibold text-[#2B5F7A]">Formación</p>
                  <p className="text-sm">Diplomado Sistémico Breve</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="font-semibold text-[#2B5F7A]">Atención</p>
                  <p className="text-sm">Adultos y Parejas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El resto de las secciones (Enfoque, Evidencia, Contacto) se mantienen idénticas con el diseño de KIMI */}
      <section id="contacto" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-8">Comienza tu proceso</h2>
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 mb-8">
            <p className="text-xl mb-6 font-light italic">"Terapia basada en soluciones con respaldo científico"</p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
              <div className="flex items-center gap-2"><MapPin className="text-[#7EC8E3]" /> Presencial Valparaíso</div>
              <div className="flex items-center gap-2"><Video className="text-[#7EC8E3]" /> Online todo Chile</div>
            </div>
            <a href="mailto:almancillaps@gmail.com" className="inline-flex items-center gap-3 bg-[#2B5F7A] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#1E4A5F] transition-all">
              <Mail /> Contactar vía Email
            </a>
          </div>
          <p className="text-slate-500 text-sm">© 2025 Psicólogo Alonso Mancilla | Valparaíso, Chile</p>
        </div>
      </section>
    </div>
  );
}

export default App;
