import { Heart, Shield, Lightbulb, Star, Unlock, Scale, Users, BookOpen } from "lucide-react"

const values = [
  { icon: <Heart size={24} />, title: "Comprometimento", desc: "Dedicação total à satisfação do cliente." },
  { icon: <Shield size={24} />, title: "Preservação", desc: "Garantir a integridade e longevidade dos documentos." },
  { icon: <Lightbulb size={24} />, title: "Inovação", desc: "Tecnologias modernas para optimizar processos." },
  { icon: <Star size={24} />, title: "Excelência", desc: "Serviços de alta qualidade e confiabilidade." },
  { icon: <Unlock size={24} />, title: "Acessibilidade", desc: "Democratizar o acesso à informação e ao conhecimento." },
  { icon: <Scale size={24} />, title: "Transparência", desc: "Ética e clareza em todas as relações institucionais." },
  { icon: <Users size={24} />, title: "Responsabilidade Social", desc: "Valorização cultural e educacional da sociedade." },
  { icon: <BookOpen size={24} />, title: "Capacitação", desc: "Investir na formação contínua de profissionais." },
]

export default function Values() {
  return (
    <section id="valores" className="py-24 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="reveal bg-orange-500 rounded-2xl p-10">
            <h3 className="text-white font-black text-2xl mb-4">Missão</h3>
            <p className="text-orange-100 leading-relaxed">
              Facilitar o acesso à informação e preservar a memória institucional através da
              digitalização de documentos, organização de bibliotecas e gestão eficiente de
              arquivos institucionais, promovendo a capacitação profissional em Biblioteconomia e Arquivística.
            </p>
          </div>
          <div className="reveal bg-white/10 rounded-2xl p-10 border border-white/10">
            <h3 className="text-white font-black text-2xl mb-4">Visão</h3>
            <p className="text-gray-400 leading-relaxed">
              Ser uma academia de suporte referencial ao nível nacional e internacional
              na área das Ciências da Informação.
            </p>
          </div>
        </div>

        <div className="text-center mb-12 reveal">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Os nossos princípios
          </span>
          <h2 className="text-4xl font-black text-white mt-2">Valores</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="reveal bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="text-orange-500 mb-3">{v.icon}</div>
              <h4 className="text-white font-bold mb-1">{v.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}