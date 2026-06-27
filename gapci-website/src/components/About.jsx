import { BookOpen, Users, Award } from "lucide-react"

const stats = [
  { icon: <BookOpen size={28} />, value: "2022", label: "Ano de Fundação" },
  { icon: <Users size={28} />, value: "B2B", label: "Empresas & Particulares" },
  { icon: <Award size={28} />, value: "100%", label: "Profissionais Certificados" },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Sobre Nós
          </span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6 leading-tight">
            Especialistas em Ciências da Informação em Angola
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            A GLOBAL A.P.C.I foi fundada em Junho de 2022 por <strong>Delfina dos Santos Manuel</strong>,
            formada em Ciências da Informação pela Faculdade de Ciências Sociais da Universidade Agostinho Neto.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Criada com o objectivo de oferecer às empresas serviços especializados em
            Biblioteconomia, Arquivologia, Digitalização de Documentos e Gestão da Informação,
            a GAPCI compromete-se com a qualidade, excelência e máxima satisfação dos clientes.
          </p>
        </div>

        <div className="flex flex-col gap-6 reveal">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-5 bg-gray-50 rounded-2xl p-6">
              <div className="text-orange-500">{s.icon}</div>
              <div>
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}