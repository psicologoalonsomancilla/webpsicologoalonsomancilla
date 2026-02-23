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
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 uppercase tracking-tight">
            Psicólogo Alonso Mancilla
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 italic font-light">
            "Terapia con una vista que transforma"
          </p>
        </div>
      </header>

      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-8">Sobre Mí</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Psicólogo con Diplomado en Intervenciones Sistémicas Breves. Mi enfoque busca movilizar tus recursos para generar cambios significativos.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6"><Target className="mx-auto text-sky-600 mb-2" /><p>Foco en Soluciones</p></div>
            <div className="p-6"><Waves className="mx-auto text-sky-600 mb-2" /><p>Visión Integral</p></div>
            <div className="p-6"><Clock className="mx-auto text-sky-600 mb-2" /><p>Eficiencia</p></div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-4 bg-slate-100 text-center">
        <div className="max-w-xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl mb-4">Contacto y Sesiones</h2>
            <p className="text-4xl font-light mb-6 text-slate-900">$40.000</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center gap-2"><MapPin size={18}/> Valparaíso</div>
              <div className="flex items-center justify-center gap-2"><Video size={18}/> Online</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle2 size={18}/> Adultos</div>
            </div>
            <a href="mailto:alonsomancillaps@gmail.com" className="mt-8 block bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
              <Mail className="inline-block mr-2" size={18} /> Agendar Sesión
            </a>
          </div>
          <div className="mt-8">
            <a href="https://doi.org/10.1111/jmft.12000" target="_blank" className="text-xs text-slate-400 flex items-center justify-center gap-1 hover:underline">
               Respaldo Científico <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Alonso Mancilla
      </footer>
    </div>
  );
}
