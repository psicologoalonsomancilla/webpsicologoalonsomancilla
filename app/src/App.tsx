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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Portada con la vista de tu consulta */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/psicologoalonsomancilla/webpsicologoalonsomancilla/main/app/public/1771861945878.jpg" 
            alt="Vista desde la consulta de Alonso Mancilla" 
            className="w-full h-full object-cover brightness-[0.5]"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 uppercase tracking-[0.2em]">
            Alonso Mancilla
          </h1>
          <div className="h-1 w-24 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-slate-100 font-light italic tracking-wide">
            "Terapia con una vista que transforma"
          </p>
          <div className="mt-12">
            <a href="#contacto" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-500 font-medium tracking-widest text-sm uppercase">
              Agenda tu Sesión
            </a>
          </div>
        </div>
      </header>

      {/* Sobre Mí con tu Foto de Perfil */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-sky-100 rounded-2xl -rotate-3 z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-slate-200">
               <img 
                src="https://raw.githubusercontent.com/psicologoalonsomancilla/webpsicologoalonsomancilla/main/app/public/1771861945854.jpg" 
                alt="Psicólogo Alonso Mancilla" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-light mb-8 text-slate-900 border-b pb-4 border-sky-100 inline-block uppercase tracking-wider">Sobre Mí</h2>
            <p className="text-xl leading-relaxed mb-6 text-slate-600 font-light">
              Psicólogo con Diplomado en <span className="font-medium text-slate-800">Intervenciones Sistémicas Breves</span>. Mi enfoque se centra en movilizar los recursos propios de cada persona para generar cambios significativos en el menor tiempo posible.
            </p>
            <p className="text-xl leading-relaxed text-slate-600 font-light">
              Acompaño a adultos en contextos de alta complejidad, ofreciendo un espacio de comprensión profunda y estrategias prácticas para abordar desafíos emocionales y relacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Ejes de Trabajo */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-16 text-center tracking-widest uppercase">Ejes de Trabajo</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Target className="text-sky-500 mb-6" size={40}/>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Foco en Soluciones</h3>
              <p className="text-slate-500 font-light italic leading-relaxed text-lg">Construimos el camino hacia la vida que deseas vivir.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Waves className="text-sky-500 mb-6" size={40}/>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Visión Integral</h3>
              <p className="text-slate-500 font-light italic leading-relaxed text-lg">Entendemos tus dificultades dentro de tu contexto único.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Clock className="text-sky-500 mb-6" size={40}/>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Eficiencia</h3>
              <p className="text-slate-500 font-light italic leading-relaxed text-lg">Intervenciones directas para generar alivio pronto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Valor */}
      <section id="contacto" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-12">Agenda tu espacio</h2>
          <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 mb-12">
            <div className="text-6xl font-extralight mb-4">$40.000 <span className="text-xl text-slate-400">/ sesión</span></div>
            <p className="text-sky-300 italic mb-10 text-lg">Boleta reembolsable en Isapre y Seguros Complementarios</p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mb-12 text-lg">
              <div className="flex items-center gap-4"><MapPin className="text-sky-400" /> <span>Presencial Valparaíso</span></div>
              <div className="flex items-center gap-4"><Video className="text-sky-400" /> <span>Terapia Online</span></div>
              <div className="flex items-center gap-4"><CheckCircle2 className="text-sky-400" /> <span>Atención Adultos</span></div>
              <div className="flex items-center gap-4"><Mail className="text-sky-400" /> <span>alonsomancillaps@gmail.com</span></div>
            </div>

            <a href="mailto:alonsomancillaps@gmail.com" className="inline-block bg-sky-500 text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-sky-400 transition-colors shadow-lg">
              Enviar Correo
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://doi.org/10.1111/jmft.12000" target="_blank" className="text-slate-500 text-xs flex items-center gap-2 hover:text-white transition-colors tracking-widest">
              RESPALDO CIENTÍFICO <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 text-[10px] uppercase tracking-[0.4em] bg-slate-950">
        © {new Date().getFullYear()} Alonso Mancilla — Psicología Clínica
      </footer>
    </div>
  );
}
