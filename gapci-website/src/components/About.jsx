import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import logo from "../assets/logoo.png"

export default function About() {
  return (
    <section id="sobre" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="reveal reveal-from-left">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Sobre Nós
          </span>

          <div className="mb-6 mt-3 flex items-center gap-3">
            <img src={logo} alt="Logo GAPCI" className="h-14 w-14 object-contain" />
            <span className="text-sm font-bold text-orange-600">GLOBAL A.P.C.I</span>
          </div>

          <p className="mb-4 text-lg leading-relaxed text-gray-600">
            Somos uma academia de transformação e inovação!
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Fundada em Junho de 2022, a GLOBAL A.P.C.I - Academia dos Profissionais de
            Ciências da Informação oferece às empresas e particulares serviços
            especializados em Biblioteconomia, Arquivologia, Digitalização de Documentos
            e Gestão da Informação.
          </p>

          <Link
            to="/sobre-nos"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Saber Mais <ArrowRight size={18} />
          </Link>
        </div>

        <div className="reveal reveal-from-right overflow-hidden rounded-3xl">
          <img
            src={logo}
            alt="GAPCI"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}