import publ from "../assets/publ.jpeg"
import publ2 from "../assets/publ2.jpeg"
import publ3 from "../assets/publ3.jpeg"

const posts = [
  {
    image: publ,
    title: "Sessão de Formação em Gestão Documental",
    desc: "Uma conversa prática sobre organização, preservação e acesso à informação em ambientes corporativos.",
  },
  {
    image: publ2,
    title: "Evento de Capacitação para Profissionais",
    desc: "Explorámos novas metodologias, boas práticas e soluções inovadoras para o setor da informação.",
  },
  {
    image: publ3,
    title: "Parcerias e Projetos de Impacto",
    desc: "A GAPCI reforça a sua presença com iniciativas que unem conhecimento, cultura e transformação.",
  },
]

export default function Values() {
  return (
    <section id="valores" className="bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <div className="reveal reveal-from-left rounded-2xl bg-orange-500 p-10">
            <h3 className="mb-4 text-2xl font-black text-white">Formação Complementar</h3>
            <p className="leading-relaxed text-orange-100">
              Programas de formação prática nas áreas de Arquivologia, Biblioteconomia e Digitalização de Documentos,
              destinados a profissionais que pretendem aprofundar os seus conhecimentos e melhorar o desempenho no ambiente de trabalho.
            </p>
          </div>
          <div className="reveal reveal-from-right rounded-2xl border border-white/10 bg-white/10 p-10">
            <h3 className="mb-4 text-2xl font-black text-white">Formação Executiva</h3>
            <p className="leading-relaxed text-gray-400">
              Formação especializada para gestores e quadros superiores, focada na gestão estratégica da informação
              e na implementação de boas práticas documentais no seio das organizações angolanas.
            </p>
          </div>
        </div>

        <div id="social-media" className="mb-12 text-center reveal reveal-from-left">
          <h2 className="mt-2 text-4xl font-black text-white">Social Media</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <div
              key={i}
              className="reveal reveal-from-bottom overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-5">
                <div className="value-icon-shell mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-orange-400">
                  ✦
                </div>
              </div>
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h4 className="mb-2 font-bold text-white">{post.title}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}