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

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Sección Principal */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" 
            alt="Fondo terapéutico" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 uppercase">
            Psicólogo Alonso Mancilla
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed italic">
            "Terapia con una vista que transforma"
          </p>
          <div className="mt-10">
            <a href="#contacto" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300">
              Agenda tu Sesión
            </a>
          </div>
        </div>
      </header>

      {/* Sobre Mí */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-200 aspect-[3/4] flex items-center justify-center">
             <span className="text-slate-400 italic">Foto de Perfil</span>
          </div>
          <div>
            <h2 className="text-3xl font-light mb-6 text-slate-900">Sobre Mí</h2>
            <p className="text-lg leading-relaxed mb-4 text-slate-600">
              Psicólogo con Diplomado en Intervenciones Sistémicas Breves. Mi enfoque se centra en movilizar los recursos propios de cada persona para generar cambios significativos en el menor tiempo posible.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Cuento con experiencia acompañando a adultos en diversos contextos de alta complejidad. Mi práctica ofrece un espacio de comprensión profunda y estrategias prácticas para abordar desafíos emocionales y relacionales, adaptándome a la realidad única de cada consultante.
            </p>
          </div>
        </div>
      </section>

      {/* Terapia Sistémica */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-12">¿Por qué Terapia Sistémica Breve?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Target className="text-sky-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-2">Foco en Soluciones</h3>
              <p className="text-slate-600 italic">Construimos juntos el camino hacia la vida que deseas vivir.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Waves className="text-sky-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-2">Visión Integral</h3>
              <p className="text-slate-600 italic">Entendemos tus dificultades dentro de tu contexto relacional único.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="text-sky-600 mb-4" size={32} />
              <h3 className="text-xl font-medium mb-2">Eficiencia</h3>
              <p className="text-slate-600 italic">Intervenciones directas diseñadas para generar alivio desde el inicio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Respaldo Científico */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Respaldo Científico</h2>
          <div className="space-y-10">
            <div className="border-l-4 border-sky-500 pl-6 py-2">
              <p className="text-lg text-slate-700 italic mb-2">
                "La Terapia Breve Centrada en Soluciones ha demostrado una eficacia del 60-80% en diversos entornos clínicos, siendo superior o igual a otros enfoques tradicionales pero en menor tiempo."
              </p>
              <a href="https://doi.org/10.1111/jmft.12000" target="_blank" className="text-sm text-sky-600 flex items-center gap-1 hover:underline">
                Gingerich & Peterson (2013) <ExternalLink size={14} />
              </a>
            </div>
            <div className="border-l-4 border-sky-500 pl-6 py-2">
              <p className="text-lg text-slate-700 italic mb-2">
                "Los metaanálisis confirman que el enfoque sistémico es altamente efectivo en el tratamiento de trastornos de ansiedad, depresión y conflictos relacionales en adultos."
              </p>
              <a href="https://www.sciencedirect.com/science/article/pii/S019339731930030X" target="_blank" className="text-sm text-sky-600 flex items-center gap-1 hover:underline">
                Carr (2019) <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="text-sky-400" size={32} />
              <h2 className="text-3xl font-light">Atención Presencial</h2>
            </div>
            <p className="text-slate-300 text-lg">
              Un espacio terapéutico adecuado y tranquilo en el centro de Valparaíso. Un entorno cómodo y seguro diseñado para favorecer tu bienestar.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <Video className="text-sky-400" size={32} />
              <h2 className="text-3xl font-light">Terapia Online</h2>
            </div>
            <p className="text-slate-300 text-lg">
              Comodidad y cercanía desde cualquier lugar. La modalidad online permite acceder a un proceso de calidad con la flexibilidad que necesitas hoy.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Información de Sesión</h2>
          <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100 mb-12">
            <div className="text-5xl font-light mb-2 text-slate-900">$40.000<span className="text-xl text-slate-500"> / sesión</span></div>
            <p className="text-slate-500 mb-6 italic">Duración: 50 minutos aproximadamente</p>
            <ul className="text-left space-y-4 mb-8 text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-sky-600" /> Boleta reembolsable en Isapre/Seguros</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-sky-600" /> Atención personalizada para adultos</li>
            </ul>
            <a href="mailto:alonsomancillaps@gmail.com" className="w-full block bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
              Agendar vía Email
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-
