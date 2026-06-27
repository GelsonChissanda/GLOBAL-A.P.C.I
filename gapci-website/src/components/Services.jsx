import { useState } from "react"
import { Archive, Database, Library, Monitor, BookMarked, ScanLine, GraduationCap, CalendarDays } from "lucide-react"

const empresas = [
  { icon: <Archive size={24} />, title: "Gestão de Arquivos Institucionais", desc: "Diagnóstico, organização e capacitação em gestão documental." },
  { icon: <Database size={24} />, title: "Gestão da Informação", desc: "Definição de políticas, ferramentas digitais e preservação da memória institucional." },
  { icon: <Library size={24} />, title: "Gestão Bibliotecária", desc: "Catalogação, indexação, bibliotecas digitais e repositórios institucionais." },
  { icon: <Monitor size={24} />, title: "Software BibLivre", desc: "Implementação, configuração e formação no software de gestão bibliográfica BibLivre." },
  { icon: <BookMarked size={24} />, title: "Bibliotecas Especializadas", desc: "Planeamento e implementação de bibliotecas no seio organizacional." },
  { icon: <ScanLine size={24} />, title: "Digitalização de Documentos", desc: "Conversão e preservação digital de documentos físicos." },
  { icon: <GraduationCap size={24} />, title: "Formação Profissional", desc: "Cursos em Arquivologia, Biblioteconomia, BibLivre e Digitalização." },
  { icon: <CalendarDays size={24} />, title: "Gestão de Eventos", desc: "Organização e gestão de eventos académicos e corporativos." },
]

const particulares = [
  { icon: <GraduationCap size={24} />, title: "Formação Profissional", desc: "Cursos em Arquivologia, Biblioteconomia, BibLivre e Digitalização." },
  { icon: <Archive size={24} />, title: "Gestão de Arquivos Institucionais", desc: "Diagnóstico, organização e capacitação em gestão documental." },
  { icon: <Database size={24} />, title: "Gestão da Informação", desc: "Definição de políticas e práticas para acesso e uso da informação." },
  { icon: <Library size={24} />, title: "Gestão Bibliotecária", desc: "Catalogação, indexação e implementação de sistemas bibliotecários." },
  { icon: <Monitor size={24} />, title: "Software BibLivre", desc: "Consultoria e formação no software de gestão bibliográfica BibLivre." },
]

export default function Services() {
  const [tab, setTab] = useState("empresas")
  const list = tab === "empresas" ? empresas : particulares

  return (
    <section id="servicos" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-4xl font-black text-gray-900 mt-2">Serviços Prestados</h2>
        </div>

        <div className="flex justify-center gap-4 mb-12 reveal">
          {["empresas", "particulares"].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${
                tab === t
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-400"
              }`}
            >
              {t === "empresas" ? "Empresas" : "Particulares"}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((s, i) => (
            <div key={i} className="reveal bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-orange-500 mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}