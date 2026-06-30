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
          departamento: "Administração Geral",
          foto: foto1,
        },
        {
          nome: "Miguel Costa",
          cargo: "Director do Gabinete do Presidente do Conselho de Administração",
          departamento: "Gabinete Presidencial",
          foto: foto2 ,
        },
        {
          nome: "Lúcio Fernandes",
          cargo: "Director Executivo",
          departamento: "Direção Executiva",
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
          departamento: "Apoio Institucional",
          foto: foto4,
        },
        {
          nome: "Marta Dias",
          cargo: "Chefe do Departamento de Administração e Serviços Gerais",
          departamento: "Administração e Serviços",
          foto: foto5,
        },
        {
          nome: "Paulo Mendes",
          cargo: "Chefe do Departamento de Recursos Humanos",
          departamento: "Recursos Humanos",
          foto: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80",
        },
        {
          nome: "Sofia Lopes",
          cargo: "Chefe do Departamento de Tecnologias de Informação",
          departamento: "Tecnologias de Informação",
          foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
        },
        {
          nome: "Dário Nunes",
          cargo: "Chefe do Departamento de Comunicação e Marketing",
          departamento: "Comunicação e Marketing",
          foto: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=500&q=80",
        },
        {
          nome: "Cláudia Rocha",
          cargo: "Chefe do Departamento de Logística e Património",
          departamento: "Logística e Património",
          foto: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80",
        },
        {
          nome: "Tiago Borges",
          cargo: "Chefe do Departamento de Protocolo e Relações Institucionais",
          departamento: "Protocolo e Relações Institucionais",
          foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },
    {
      grupo: "Direcções Operacionais",
      pessoas: [
        {
          nome: "Helena Tavares",
          cargo: "Chefe do Departamento de Formação, Desenvolvimento e Certificação",
          departamento: "Formação e Certificação",
          foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
        },
        {
          nome: "Bruno Azevedo",
          cargo: "Chefe do Departamento de Serviços de Apoio às Empresas",
          departamento: "Suporte Empresarial",
          foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
        },
        {
          nome: "Inês Cardoso",
          cargo: "Chefe do Departamento de Serviços de Apoio a Pessoas Individuais",
          departamento: "Suporte Individual",
          foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
        },
        {
          nome: "Alexandre Pinto",
          cargo: "Chefe do Departamento de Eventos Académicos e Corporativos",
          departamento: "Eventos e Produção",
          foto: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },
  ]

  return (
    <section id="organograma" className="py-24 bg-linear-to-br from-orange-50 via-white to-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Estrutura
          </span>
          <h2 className="text-4xl font-black text-gray-900 mt-2">Organograma</h2>
        </div>

        <div className="space-y-10 reveal">
          {perfis.map((grupo, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{grupo.grupo}</h3>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {grupo.pessoas.map((pessoa, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_10px_35px_rgba(249,115,22,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(249,115,22,0.16)]"
                  >
                    <div className="h-56 overflow-hidden bg-gray-100">
                      <img
                        src={pessoa.foto}
                        alt={pessoa.nome}
                        className="h-full w-full object-contain object-center scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-gray-900">{pessoa.nome}</h4>
                      <p className="mt-2 text-sm font-semibold text-orange-500">{pessoa.cargo}</p>
                      <p className="mt-2 text-sm text-gray-600">Departamento: {pessoa.departamento}</p>
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
