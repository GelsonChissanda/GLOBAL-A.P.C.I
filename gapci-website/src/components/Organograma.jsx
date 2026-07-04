import foto1 from "../assets/foto1.jpeg"
import foto2 from "../assets/foto2.jpeg"
import foto3 from "../assets/foto3.jpeg"
import foto4 from "../assets/foto4.jpeg"
import foto5 from "../assets/foto5.jpeg"

export default function Organograma() {
  const perfis = [
    {
      grupo: "Conselho de Administração",
      pessoas: [
        {
          nome: "Ana Martins",
          cargo: "Presidente do Conselho de Administração",
          foto: foto1,
        },
        {
          nome: "Miguel Costa",
          cargo: "Director do Gabinete do Presidente do Conselho de Administração",
          foto: foto2 ,
        },
        {
          nome: "Lúcio Fernandes",
          cargo: "Director Executivo",
          foto: foto3,
        },
      ],
    },
    {
      grupo: "Serviços de Apoio à Direção",
      pessoas: [
        {
          nome: "Rui Silva",
          cargo: "Chefe do Departamento de Apoio ao Conselho de Administração",
          foto: foto4,
        },
        {
          nome: "Marta Dias",
          cargo: "Chefe do Departamento de Administração e Serviços Gerais",
          foto: foto5,
        },
        {
          nome: "Paulo Mendes",
          cargo: "Chefe do Departamento de Recursos Humanos",
          foto: foto2,
        },
        {
          nome: "Sofia Lopes",
          cargo: "Chefe do Departamento de Tecnologias de Informação",
          foto: foto1,
        },
        {
          nome: "Dário Nunes",
          cargo: "Chefe do Departamento de Comunicação e Marketing",
          foto: foto4,
        },
        {
          nome: "Cláudia Rocha",
          cargo: "Chefe do Departamento de Logística e Património",
          foto: foto5,
        },
        {
          nome: "Tiago Borges",
          cargo: "Chefe do Departamento de Protocolo e Relações Institucionais",
          foto: foto2,
        },
      ],
    },
    {
      grupo: "Direcções Operacionais",
      pessoas: [
        {
          nome: "Helena Tavares",
          cargo: "Chefe do Departamento de Formação, Desenvolvimento e Certificação",
          foto: foto1,
        },
        {
          nome: "Bruno Azevedo",
          cargo: "Chefe do Departamento de Serviços de Apoio às Empresas",
          foto: foto2,
        },
        {
          nome: "Inês Cardoso",
          cargo: "Chefe do Departamento de Serviços de Apoio a Pessoas Individuais",
          foto: foto3,
        },
        {
          nome: "Alexandre Pinto",
          cargo: "Chefe do Departamento de Eventos Académicos e Corporativos",
          foto: foto4,
        },
      ],
    },
  ]

  return (
    <section id="organograma" className="bg-[#fff7ed] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="reveal visible mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Estrutura
          </span>
          <h2 className="mt-2 text-4xl font-black text-slate-900">Organograma</h2>
        </div>

        <div className="reveal visible space-y-10">
          {perfis.map((grupo, index) => (
            <div key={index}>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">{grupo.grupo}</h3>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {grupo.pessoas.map((pessoa, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-[0_10px_35px_rgba(249,115,22,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(249,115,22,0.2)]"
                  >
                    <div className="h-56 overflow-hidden bg-orange-50">
                      <img
                        src={pessoa.foto}
                        alt={pessoa.nome}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="border-t border-orange-100 p-5">
                      <h4 className="text-lg font-bold text-slate-900">{pessoa.nome}</h4>
                      <p className="mt-2 text-sm font-semibold text-orange-500">{pessoa.cargo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
