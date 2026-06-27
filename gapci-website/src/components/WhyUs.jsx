import { BadgeCheck, UserCheck, DollarSign, Award } from "lucide-react"

const reasons = [
  { icon: <BadgeCheck size={32} />, title: "Elevado Padrão Técnico", desc: "Serviços com rigor e qualidade profissional em todas as entregas." },
  { icon: <UserCheck size={32} />, title: "Atendimento Personalizado", desc: "Cada cliente recebe atenção dedicada e soluções à medida." },
  { icon: <DollarSign size={32} />, title: "Preços Competitivos", desc: "Valores compatíveis com o mercado angolano sem abrir mão da qualidade." },
  { icon: <Award size={32} />, title: "Equipa Certificada", desc: "Profissionais com certificações nacionais e internacionais na área." },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Os nossos diferenciais
          </span>
          <h2 className="text-4xl font-black text-gray-900 mt-2">Porquê escolher a GAPCI?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {r.icon}
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}