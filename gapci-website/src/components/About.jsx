import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import logo from "../assets/logoo.png"

const serif = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" }
const mono = { fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }

export default function About() {
  return (
    <section id="sobre" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="reveal reveal-from-left">
          <span style={mono} className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            Ficha institucional — N.º 001
          </span>

          <div className="mb-6 mt-4 flex items-center gap-3">
            <img src={logo} alt="Logo GAPCI" className="h-12 w-12 object-contain" />
            <span style={mono} className="text-xs font-bold uppercase tracking-widest text-orange-600">
              GLOBAL A.P.C.I
            </span>
          </div>

          <h2 style={serif} className="text-3xl font-medium leading-tight text-gray-900 md:text-4xl">
            A ciência por trás de cada arquivo bem guardado.
          </h2>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
            Desde 2022, formamos os profissionais que organizam, preservam e
            dão valor à informação em Angola.
          </p>

          <Link
            to="/sobre-nos"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Saber Mais
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="reveal reveal-from-right overflow-hidden rounded-3xl">
          <img src={logo} alt="GAPCI" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}