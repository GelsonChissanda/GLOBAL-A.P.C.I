import { BookOpen, Users, Award } from "lucide-react"
import logo from "../assets/logoo.png"

const stats = [
  { icon: <BookOpen size={28} />, value: "2022", label: "Ano de Fundação" },
  { icon: <Users size={28} />, value: "B2B", label: "Empresas & Particulares" },
  { icon: <Award size={28} />, value: "100%", label: "Profissionais Certificados" },
]

export default function About() {

  return (
    <section id="sobre" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="reveal reveal-from-left">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Sobre Nós
          </span>
          <div className="mb-6 flex items-center gap-3">
            <img src={logo} alt="Logo GAPCI" className="h-14 w-14 object-contain" />
            <span className="text-sm font-bold text-orange-600">GLOBAL A.P.C.I</span>
          </div>
          <p className="mb-4 text-lg leading-relaxed text-gray-600">
            Somos uma academia de transformação e inovação!
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Fundada em Junho de 2022, a GLOBAL A. P. C. I-Academia dos Profissionais de Ciências da Informação surgiu com o objectivo de oferecer às empresas e particulares serviços especializados nas áreas das Ciências da Informação: Biblioteconomia, Arquivologia, Digitalização de Documentos e Gestão da Informação. A GAPCI compromete-se com a qualidade, excelência e a máxima satisfação dos clientes.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Promovemos eventos culturais e comerciais com um foco nos temas relevantes para as nossas áreas de actuação, mantendo sempre uma perspectiva global.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Missão</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Capacitar organizações e indivíduos com soluções de excelência em gestão da informação, biblioteconomia e arquivologia.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Visão</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Ser referência em transformação, inovação e desenvolvimento sustentável nas áreas da informação e conhecimento.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Valores</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Qualidade, excelência, ética, inovação, compromisso e satisfação dos clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-from-${i % 2 === 0 ? "left" : "right"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-5 rounded-2xl bg-gray-50 p-6">
                <div className="text-orange-500">{s.icon}</div>
                <div>
                  <p className="text-2xl font-black text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}