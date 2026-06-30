import { BookOpen, Users, Award } from "lucide-react"
import logo from "../assets/logoo.png"
import LoopGallery from "./LoopGallery"

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
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Logo GAPCI" className="h-14 w-14 object-contain" />
            <span
            className="text-sm  font-bold text-orange-600"
          >
            GLOBAL A.P.C.I
          </span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Somos uma academia de transformação e inovação!
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Fundada em Junho de 2022, a GLOBAL A. P. C. I-Academia dos Profissionais de Ciências da Informação surgiu com o objectivo de oferecer às empresas e particulares serviços especializados nas áreas das Ciências da Informação: Biblioteconomia, Arquivologia, Digitalização de Documentos e Gestão da Informação. A GAPCI compromete-se com a qualidade, excelência e a máxima satisfação dos clientes.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Promovemos eventos culturais e comerciais com um foco nos temas relevantes para as nossas áreas de actuação, mantendo sempre uma perspectiva global.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Missão</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Capacitar organizações e indivíduos com soluções de excelência em gestão da informação, biblioteconomia e arquivologia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Visão</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Ser referência em transformação, inovação e desenvolvimento sustentável nas áreas da informação e conhecimento.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Valores</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Qualidade, excelência, ética, inovação, compromisso e satisfação dos clientes.
              </p>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-2xl p-4">
              <p className="text-sm font-semibold text-orange-600">Existência</p>
              <p className="text-2xl font-black text-gray-900 mt-1">4 anos</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4">
              <p className="text-sm font-semibold text-orange-600">Formandos</p>
              <p className="text-2xl font-black text-gray-900 mt-1">+ 5000</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4 sm:col-span-2">
              <p className="text-sm font-semibold text-orange-600">Actividades Académicas e Corporativas</p>
              <p className="text-2xl font-black text-gray-900 mt-1">+ 600 Participantes</p>
            </div>
          </div>
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

          <LoopGallery
            title="Inovação e Formação"
            subtitle="Experiências em destaque"
            items={[
              { src: logo, alt: "Logo GAPCI", caption: "Academia de transformação e inovação" },
              { src: logo, alt: "Logo GAPCI", caption: "Eventos e capacitações para empresas e particulares" },
            ]}
          />
        </div>
      </div>
    </section>
  )
}