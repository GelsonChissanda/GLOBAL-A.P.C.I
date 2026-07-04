import { BadgeCheck, UserCheck, DollarSign, Award } from "lucide-react"

const reasons = [
  { icon: <BadgeCheck size={32} />, title: "Elevado Padrão Técnico", desc: "Serviços com rigor e qualidade profissional em todas as entregas." },
  { icon: <UserCheck size={32} />, title: "Atendimento Personalizado", desc: "Cada cliente recebe atenção dedicada e soluções à medida." },
  { icon: <DollarSign size={32} />, title: "Preços Competitivos", desc: "Valores compatíveis com o mercado angolano sem abrir mão da qualidade." },
  { icon: <Award size={32} />, title: "Equipa Certificada", desc: "Profissionais com certificações nacionais e internacionais na área." },
]

export default function WhyUs() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center reveal reveal-from-left">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Os nossos diferenciais
          </span>
          <h2 className="mt-2 text-4xl font-black text-gray-900">Porquê escolher a GAPCI?</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div key={i} className="reveal reveal-from-bottom text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                {r.icon}
              </div>
              <h3 className="mb-2 text-lg font-black text-gray-900">{r.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}