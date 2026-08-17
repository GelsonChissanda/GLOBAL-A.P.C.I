import { useState } from "react"
import { Archive, Database, Library, Monitor, BookOpen, ShieldCheck, FolderOpen, CalendarDays, Info, BookMarked, LayoutDashboard } from "lucide-react"
import useReveal from "../hooks/useReveal"

const empresas = [
  { icon: <Archive size={24} />, title: "Consultoria de Gestão de Arquivos Institucionais", desc: "Diagnóstico, organização e capacitação em gestão documental." },
  { icon: <Database size={24} />, title: "Consultoria em Gestão da Informação", desc: "Definição de políticas, ferramentas digitais e preservação da memória institucional." },
  { icon: <Library size={24} />, title: "Consultoria em Gestão Bibliotecária", desc: "Catalogação, indexação, bibliotecas digitais e repositórios institucionais." },
  { icon: <BookOpen size={24} />, title: "Implementação de Bibliotecas Especializadas no seio Organizacional", desc: "Planeamento e implementação de bibliotecas no seio organizacional." },
  { icon: <Monitor size={24} />, title: "Consultoria em Software de Gestão Bibliotecária BibLivre", desc: "Implementação, configuração e formação no software de gestão bibliográfica BibLivre." },
  { icon: <ShieldCheck size={24} />, title: "Higienização e Desinfestação de Documentos", desc: "Tratamento e preservação física de documentos institucionais." },
  { icon: <CalendarDays size={24} />, title: "Gestão de Eventos Académicos e Corporativos", desc: "Organização e gestão de eventos académicos e corporativos." },
]

const particulares = [
  { icon: <FolderOpen size={24} />, title: "Consultoria em Gestão Documental", desc: "Diagnóstico, organização e capacitação em gestão documental." },
  { icon: <Info size={24} />, title: "Consultoria em Gestão da Informação", desc: "Definição de políticas e práticas para acesso e uso da informação." },
  { icon: <BookMarked size={24} />, title: "Consultoria em Gestão Bibliotecária", desc: "Catalogação, indexação e implementação de sistemas bibliotecários." },
  { icon: <LayoutDashboard size={24} />, title: "Consultoria em Software de Gestão Bibliotecária BibLivre", desc: "Consultoria e formação no software de gestão bibliográfica BibLivre." },
]

export default function Services() {
  const [tab, setTab] = useState("empresas")
  const list = tab === "empresas" ? empresas : particulares

  useReveal([tab])

  return (
    <section id="servicos" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center reveal reveal-from-left">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            O que fazemos
          </span>
          <h2 className="mt-2 text-4xl font-black text-gray-900">Serviços Prestados</h2>
        </div>

        <div className="mb-12 flex justify-center gap-4 reveal reveal-scale">
          {["empresas", "particulares"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                tab === t
                  ? "bg-orange-500 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-orange-400"
              }`}
            >
              {t === "empresas" ? "Empresas" : "Particulares"}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => (
            <div
              key={i}
              className="reveal reveal-from-bottom group rounded-2xl border border-gray-100 bg-white p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="service-icon mb-4 inline-flex text-orange-500">{s.icon}</div>
              <h3 className="mb-2 font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}