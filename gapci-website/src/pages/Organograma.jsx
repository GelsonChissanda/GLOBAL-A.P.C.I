import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowUpRight,
  X,
  Users,
  Building2,
  BriefcaseBusiness,
} from "lucide-react"

import secretaria from "../assets/secretaria.jpeg"
import foto1 from "../assets/foto1.jpeg"
import foto2 from "../assets/foto2.jpeg"
import foto3 from "../assets/foto3.jpeg"
import foto4 from "../assets/foto4.jpeg"
import foto5 from "../assets/foto5.jpeg"

/* =========================================================
   DADOS
========================================================= */

const perfis = [
  {
    grupo: "Conselho de Administração",
    descricao:
      "Responsável pela orientação estratégica, liderança e tomada de decisões da organização.",
    icon: Building2,
    pessoas: [
      {
        nome: "Henriqueta Pedro",
        cargo: "Secretária Geral",
        foto: secretaria,
      },
      {
        nome: "Miguel Costa",
        cargo: "Director do Gabinete do Presidente do Conselho de Administração",
        foto: foto2,
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
    descricao:
      "Equipas responsáveis pelo suporte administrativo, tecnológico, humano e institucional da GAPCI.",
    icon: BriefcaseBusiness,
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
    descricao:
      "Áreas responsáveis pela execução das principais actividades e serviços da GAPCI.",
    icon: Users,
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

/* =========================================================
   REVEAL
========================================================= */

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.12,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-1000 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* =========================================================
   MODAL
========================================================= */

function PersonModal({ pessoa, onClose }) {
  useEffect(() => {
    if (!pessoa) return

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [pessoa, onClose])

  if (!pessoa) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* FECHAR */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-orange-500"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-[1fr_0.9fr]">

          {/* IMAGEM */}

          <div className="h-[330px] bg-neutral-950 sm:h-[430px] md:h-[600px]">
            <img
              src={pessoa.foto}
              alt={pessoa.nome}
              className="h-full w-full object-contain"
            />
          </div>

          {/* INFORMAÇÕES */}

          <div className="flex items-center p-7 sm:p-10 md:p-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                Estrutura GAPCI
              </span>

              <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                {pessoa.nome}
              </h2>

              <div className="my-6 h-px w-12 bg-orange-500" />

              <p className="text-sm font-semibold leading-7 text-orange-500">
                {pessoa.cargo}
              </p>

              <p className="mt-5 text-sm leading-7 text-neutral-500">
                Profissional integrante da estrutura organizacional da
                GLOBAL A.P.C.I, contribuindo para o desenvolvimento,
                organização e crescimento da instituição.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-8 rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:bg-orange-500"
              >
                Fechar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

/* =========================================================
   CARD
========================================================= */

function PersonCard({ pessoa, index, onClick }) {
  return (
    <Reveal delay={index * 80}>
      <button
        type="button"
        onClick={() => onClick(pessoa)}
        className="group block h-full w-full overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white text-left shadow-[0_15px_45px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_25px_70px_rgba(249,115,22,0.13)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      >
        <div className="relative h-72 overflow-hidden bg-orange-50">
          <img
            src={pessoa.foto}
            alt={pessoa.nome}
            loading="lazy"
            className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-950 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-black text-neutral-950">
            {pessoa.nome}
          </h3>

          <p className="mt-2 text-sm font-semibold leading-6 text-orange-500">
            {pessoa.cargo}
          </p>

          <div className="mt-6 h-px w-10 bg-orange-500 transition-all duration-700 group-hover:w-full" />
        </div>
      </button>
    </Reveal>
  )
}

/* =========================================================
   PÁGINA
========================================================= */

export default function Organograma() {
  const [selectedPerson, setSelectedPerson] = useState(null)

  return (
    <main className="overflow-hidden bg-[#fafafa] text-neutral-950">

      {/* =================================================
          HERO
      ================================================== */}

      <section className="relative min-h-[70vh] overflow-hidden bg-neutral-950">

        <div className="absolute inset-0">
          <img
            src={foto1}
            alt="Organograma GLOBAL A.P.C.I"
            className="h-full w-full scale-105 object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:px-10 md:pb-24">

          <div className="max-w-5xl">

            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black"
            >
              <ArrowLeft size={15} />
              Voltar à página inicial
            </Link>

            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />

                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-400 md:text-xs">
                  GLOBAL A.P.C.I · Estrutura
                </p>
              </div>

              <h1 className="max-w-5xl text-[3.2rem] font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl">
                Pessoas.
                <br />

                <span className="text-orange-500">
                  Estrutura.
                </span>

                <br />

                Propósito.
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-xl md:leading-8">
                Conheça as pessoas e departamentos que formam a estrutura
                da GLOBAL A.P.C.I e tornam possível a nossa missão.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* =================================================
          INTRODUÇÃO
      ================================================== */}

      <section className="px-5 py-24 sm:px-8 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">

              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                  A nossa organização
                </span>

                <h2 className="mt-4 text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  Uma estrutura.
                  <br />

                  <span className="text-neutral-300">
                    Um propósito comum.
                  </span>
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
                A GLOBAL A.P.C.I está organizada em diferentes áreas
                estratégicas e operacionais, permitindo uma gestão
                integrada e eficiente das suas actividades.
              </p>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =================================================
          ORGANOGRAMA
      ================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 md:px-10 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="space-y-28">

            {perfis.map((grupo, groupIndex) => {
              const Icon = grupo.icon

              return (
                <section key={grupo.grupo}>

                  {/* CABEÇALHO DO GRUPO */}

                  <Reveal>
                    <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                      <div className="flex items-start gap-5">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                          <Icon size={24} />
                        </div>

                        <div>
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                            Grupo {String(groupIndex + 1).padStart(2, "0")}
                          </span>

                          <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-neutral-950 md:text-4xl">
                            {grupo.grupo}
                          </h2>
                        </div>

                      </div>

                      <p className="max-w-md text-sm leading-7 text-neutral-500 md:text-right">
                        {grupo.descricao}
                      </p>

                    </div>
                  </Reveal>

                  {/* PESSOAS */}

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                    {grupo.pessoas.map((pessoa, index) => (
                      <PersonCard
                        key={pessoa.nome}
                        pessoa={pessoa}
                        index={index}
                        onClick={setSelectedPerson}
                      />
                    ))}

                  </div>

                </section>
              )
            })}

          </div>
        </div>
      </section>

      {/* =================================================
          CTA
      ================================================== */}

      <section className="relative overflow-hidden bg-orange-500 px-5 py-24 sm:px-8 md:px-10 md:py-32">

        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border-[70px] border-white/10" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border-[70px] border-black/5" />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/70">
                  GLOBAL A.P.C.I
                </span>

                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
                  Uma equipa orientada
                  <br />
                  para o futuro.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 md:text-lg">
                  Conheça melhor a nossa estrutura e descubra as pessoas
                  que fazem parte da nossa jornada.
                </p>
              </div>

              <Link
                to="/#contacto"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-black text-neutral-950 transition-all duration-300 hover:gap-6 hover:bg-neutral-950 hover:text-white"
              >
                Fale connosco

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =================================================
          MODAL
      ================================================== */}

      <PersonModal
        pessoa={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />

      {/* =================================================
          REDUCED MOTION
      ================================================== */}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </main>
  )
}