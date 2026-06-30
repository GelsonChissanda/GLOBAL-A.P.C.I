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
    <section id="valores" className="py-24 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
       <div className="grid md:grid-cols-2 gap-8 mb-20">
  <div className="reveal bg-orange-500 rounded-2xl p-10">
    <h3 className="text-white font-black text-2xl mb-4">Formação Complementar</h3>
    <p className="text-orange-100 leading-relaxed">
      Programas de formação prática nas áreas de Arquivologia, Biblioteconomia e Digitalização de Documentos, 
      destinados a profissionais que pretendem aprofundar os seus conhecimentos e melhorar o desempenho no ambiente de trabalho.
    </p>
  </div>
  <div className="reveal bg-white/10 rounded-2xl p-10 border border-white/10">
    <h3 className="text-white font-black text-2xl mb-4">Formação Executiva</h3>
    <p className="text-gray-400 leading-relaxed">
      Formação especializada para gestores e quadros superiores, focada na gestão estratégica da informação 
      e na implementação de boas práticas documentais no seio das organizações angolanas.
    </p>
  </div>
</div>

        <div id="social-media" className="text-center mb-12 reveal">
          <h2 className="text-4xl font-black text-white mt-2">Social Media</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div key={i} className="reveal overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-white font-bold mb-2">{post.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}