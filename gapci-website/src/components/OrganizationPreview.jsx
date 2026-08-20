import { Link } from "react-router-dom"
import { ArrowUpRight, Users } from "lucide-react"

import foto1 from "../assets/foto1.jpeg"
import foto2 from "../assets/foto2.jpeg"
import foto3 from "../assets/foto3.jpeg"

const serif = {
  fontFamily: "'Fraunces', ui-serif, Georgia, serif",
}

const mono = {
  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
}

export default function OrganizationPreview() {
  return (
    <section
      id="organograma"
      className="overflow-hidden bg-[#fafafa] px-6 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* =================================================
            TEXTO
        ================================================== */}

        <div className="reveal reveal-from-left">
          <span
            style={mono}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500"
          >
            Estrutura institucional — N.º 002
          </span>

          <div className="mb-6 mt-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Users size={22} />
            </div>

            <span
              style={mono}
              className="text-xs font-bold uppercase tracking-widest text-orange-600"
            >
              ORGANOGRAMA
            </span>
          </div>

          <h2
            style={serif}
            className="text-3xl font-medium leading-tight text-gray-900 md:text-4xl"
          >
            Pessoas que dão forma à nossa visão.
          </h2>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
            Conheça a estrutura da GLOBAL A.P.C.I, os responsáveis
            pela gestão e as equipas que trabalham diariamente para
            transformar informação em conhecimento.
          </p>

          <Link
            to="/organograma"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
          >
            Saber Mais

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* =================================================
            IMAGENS
        ================================================== */}

        <div className="reveal reveal-from-right">
          <div className="grid grid-cols-2 gap-3">

            <div className="relative row-span-2 h-[420px] overflow-hidden rounded-[2rem] bg-orange-50">
              <img
                src={foto1}
                alt="Estrutura da GLOBAL A.P.C.I"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span
                  style={mono}
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-white"
                >
                  Conselho de Administração
                </span>
              </div>
            </div>

            <div className="h-[203px] overflow-hidden rounded-[2rem] bg-orange-50">
              <img
                src={foto2}
                alt="Profissionais da GLOBAL A.P.C.I"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="h-[203px] overflow-hidden rounded-[2rem] bg-orange-50 overflow-hidden">
              <img
                src={foto3}
                alt="Equipa da GLOBAL A.P.C.I"
                className="h-full w-full object-cover object-top scale-100 transition duration-700 
                
                hover:scale-105"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}