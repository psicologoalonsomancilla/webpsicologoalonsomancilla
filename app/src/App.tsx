import { 
  Waves, 
  Clock, 
  Target, 
  MapPin, 
  Video, 
  CheckCircle2, 
  Mail,
  ExternalLink
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Portada */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" 
            alt="Fondo" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 uppercase tracking-tight">
            Psicólogo Alonso Mancilla
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 italic font-light">
            "Terapia con una vista que transforma"
          </p>
          <div className="mt-10">
            <a href="#contacto" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all">
              Agenda tu Sesión
            </a>
          </div>
        </div>
      </header>

      {/* Sobre Mí */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-200 aspect-[3/4] flex items-center justify-center">
             <span className="text-slate-400 italic">Espacio para Foto de Perfil</span>
          </div>
          <div>
            <h2 className="text-3xl font-light mb-6 text-slate-900">Sobre Mí</h2>
            <p className="text-lg leading-relaxed mb-4 text-slate-600">
              Psicólogo con Diplomado en Intervenciones Sistémicas Breves. Mi enfoque se centra en movilizar los recursos propios de cada persona para generar cambios significativos.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Acompaño a adultos en contextos de alta complejidad, ofreciendo un espacio de comprensión profunda y estrategias prácticas para abordar desafíos emocionales y relacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-12">Enfoque Terapéutico</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Target className="text-sky-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Foco en Soluciones</h3>
              <p className="text-slate-600 italic">Construimos el camino hacia la vida que deseas vivir.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Waves className="text-sky-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Visión Integral</h3>
              <p className="text-slate-600 italic">Entendemos tus dificultades dentro de tu contexto único.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="text-sky-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Eficiencia</h3>
              <p className="text-slate-600 italic">Intervenciones directas para generar alivio pronto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Valores */}
      <section id="contacto" className="py-20 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 mb-10">
            <h2 className="text-2xl mb-4 font-light">Información de Sesión</h2>
            <p className="text-4xl font-light mb-6 text-slate-900">$40.000 <span className="text-lg text-slate-400">/ sesión</span></p>
            <div className="flex flex-col gap-4 text-slate-600 mb-8">
              <div className="flex items-center justify-center gap-2"><MapPin size={18} className="text-sky-600"/> Valparaíso</div>
              <div className="flex items-center justify-center gap-2"><Video size={18} className="text-sky-600"/> Terapia Online</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle2 size={18} className="text-sky-600"/> Boleta Reembolsable</div>
            </div>
            <a href="mailto:alonsomancillaps@gmail.com" className="block w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-sky-800 transition-colors">
              Agendar vía Email
            </a>
          </div>
          <a href="https://doi.org/10.1111/jmft.12000" target="_blank" className="text-xs text-slate-400 flex items-center justify-center gap-1 hover:underline">
             Respaldo Científico: Gingerich & Peterson (2013) <ExternalLink size={12} />
          </a>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 text-xs">
        © {new Date().getFullYear()} Alonso Mancilla - Psicólogo Clínico
      </footer>
    </div>
  );
}
