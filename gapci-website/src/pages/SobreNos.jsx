import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowUpRight,
  Play,
  Pause,
  Target,
  Eye,
  ShieldCheck,
  TrendingUp,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react"

import logo from "../assets/logoo.png"

import foto1 from "../assets/foto1.jpeg"
import foto2 from "../assets/foto2.jpeg"
import foto3 from "../assets/foto3.jpeg"
import foto4 from "../assets/foto4.jpeg"
import foto5 from "../assets/foto5.jpeg"

import videoGapci from "../assets/video-gapci.mp4"

/* =========================================================
   DADOS
========================================================= */

const pillars = [
  {
    number: "01",
    icon: Target,
    title: "Missão",
    text: "Capacitar organizações e indivíduos com soluções de excelência em gestão da informação, biblioteconomia e arquivologia.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Visão",
    text: "Ser referência em transformação, inovação e desenvolvimento sustentável nas áreas da informação e conhecimento.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Valores",
    text: "Qualidade, excelência, ética, inovação, compromisso e satisfação dos clientes.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Posicionamento",
    text: "A GAPCI é uma academia de referência que presta serviços adaptados às novas realidades do mercado angolano de gestão documental.",
  },
]

const historia = [
  {
    year: "2022",
    title: "Fundação",
    text: "GLOBAL A.P.C.I é fundada em Junho, com foco em Biblioteconomia, Arquivologia e Gestão da Informação.",
  },
  {
    year: "2023",
    title: "Primeiros projectos corporativos",
    text: "Início de parcerias com empresas e instituições para digitalização e organização de arquivos.",
  },
  {
    year: "2024",
    title: "Expansão de serviços",
    text: "Ampliação da oferta formativa e consultoria especializada para o mercado angolano.",
  },
  {
    year: "2025",
    title: "Consolidação",
    text: "GAPCI reforça a sua posição como referência em Ciências da Informação em Angola.",
  },
]

const gallery = [
  {
    src: foto1,
    title: "Conhecimento que transforma",
    description:
      "Cada sessão de formação na GAPCI é pensada para ligar teoria e prática, preparando profissionais capazes de organizar e valorizar a informação nas suas instituições.",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    src: foto2,
    title: "Profissionais em evolução",
    description:
      "Acompanhamos de perto o percurso de cada formando, do primeiro módulo à certificação, num ambiente que estimula a evolução contínua.",
    className: "md:col-span-5",
  },
  {
    src: foto3,
    title: "Experiência e inovação",
    description:
      "Combinamos métodos consagrados da Arquivologia e Biblioteconomia com ferramentas digitais, mantendo a GAPCI alinhada com as práticas mais actuais do sector.",
    className: "md:col-span-5",
  },
  {
    src: foto4,
    title: "Uma visão para o futuro",
    description:
      "Olhamos para a gestão da informação como um pilar de desenvolvimento institucional em Angola, e formamos hoje quem vai liderar essa mudança amanhã.",
    className: "md:col-span-4",
  },
  {
    src: foto5,
    title: "GLOBAL A.P.C.I",
    description:
      "Mais do que uma academia, somos um ponto de encontro entre profissionais, empresas e instituições que acreditam no valor da informação bem organizada.",
    className: "md:col-span-8",
  },
]

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({ children, className = "", delay = 0 }) {
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
      style={{ transitionDelay: `${delay}ms` }}
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
   HOOK IN VIEW
========================================================= */

function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options ?? { threshold: 0.15 })

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return [ref, inView]
}

/* =========================================================
   MODAL DA GALERIA
========================================================= */

function GalleryModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    // Impede a página de fazer scroll enquanto o modal está aberto
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* BOTÃO FECHAR */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-orange-500"
        >
          <X size={20} />
        </button>

        <div className="grid max-h-[90vh] md:grid-cols-[1.15fr_0.85fr]">
          {/* =================================================
              IMAGEM
          ================================================== */}

          <div className="h-[300px] bg-neutral-950 sm:h-[400px] md:h-[600px]">
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* =================================================
              TEXTO
          ================================================== */}

          <div className="flex overflow-y-auto p-7 sm:p-10 md:p-12">
            <div className="my-auto">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                Dentro da GAPCI
              </span>

              <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                {item.title}
              </h2>

              <div className="my-6 h-px w-12 bg-orange-500" />

              <p className="text-sm leading-7 text-neutral-500 sm:text-base">
                {item.description}
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
   VÍDEO
========================================================= */

function VideoSection() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const isMobile = window.matchMedia("(pointer: coarse)").matches

    if (isMobile) {
      video.play().catch(() => {})
    }

    return () => {
      video.pause()
    }
  }, [])

  const playVideo = () => {
    const video = videoRef.current

    if (!video) return

    video.play().catch(() => {})
  }

  const pauseVideo = () => {
    const video = videoRef.current

    if (!video) return

    video.pause()
  }

  const toggleVideo = () => {
    const video = videoRef.current

    if (!video) return

    if (video.paused) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }

  return (
    <div
      className="group relative overflow-hidden rounded-[2rem] bg-neutral-950 shadow-[0_30px_100px_rgba(0,0,0,0.18)] md:rounded-[2.5rem]"
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
    >
      <video
        ref={videoRef}
        src={videoGapci}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-[430px] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04] md:h-[620px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl md:left-8 md:top-8 md:text-xs">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
        </span>

        GLOBAL A.P.C.I
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <div className="flex items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400 md:text-xs">
              Transformação através da informação
            </p>

            <h3 className="text-2xl font-black leading-[1.05] tracking-tight text-white sm:text-3xl md:text-5xl">
              Conhecimento que
              <br />
              <span className="text-orange-400">
                transforma.
              </span>
            </h3>
          </div>

          <button
            onClick={toggleVideo}
            className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition duration-300 hover:scale-110 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:flex"
            aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {playing ? (
              <Pause size={19} />
            ) : (
              <Play size={19} />
            )}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-white/10">
        <div className="h-full w-1/3 animate-[videoProgress_5s_linear_infinite] bg-orange-500" />
      </div>
    </div>
  )
}

/* =========================================================
   PILAR
========================================================= */

function PillarCard({ item, index }) {
  const Icon = item.icon

  return (
    <Reveal delay={index * 100}>
      <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_25px_70px_rgba(0,0,0,0.09)] md:p-8">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-50 transition duration-700 group-hover:scale-150" />

        <div className="relative">
          <div className="mb-10 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition duration-500 group-hover:rotate-6 group-hover:bg-orange-500 group-hover:text-white">
              <Icon size={22} />
            </div>

            <span className="text-xs font-black tracking-[0.2em] text-neutral-300">
              {item.number}
            </span>
          </div>

          <h3 className="mb-4 text-xl font-black text-neutral-950">
            {item.title}
          </h3>

          <p className="text-[15px] leading-7 text-neutral-500">
            {item.text}
          </p>

          <div className="mt-8 h-px w-10 bg-orange-500 transition-all duration-700 group-hover:w-full" />
        </div>
      </article>
    </Reveal>
  )
}

/* =========================================================
   HISTÓRIA
========================================================= */

function HistoriaTimeline() {
  const [wrapperRef, wrapperInView] = useInView({ threshold: 0.08 })

  return (
    <div ref={wrapperRef} className="relative">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-200 md:block" />

      <div className="absolute left-[10px] top-0 h-full w-px bg-neutral-200 md:hidden" />

      <div
        className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-orange-500 transition-[height] duration-[1800ms] ease-out md:block"
        style={{ height: wrapperInView ? "100%" : "0%" }}
      />

      <div
        className="absolute left-[10px] top-0 w-px bg-orange-500 transition-[height] duration-[1800ms] ease-out md:hidden"
        style={{ height: wrapperInView ? "100%" : "0%" }}
      />

      <div className="space-y-14 md:space-y-24">
        {historia.map((item, index) => {
          const isLast = index === historia.length - 1
          const registo = String(index + 1).padStart(2, "0")

          return (
            <Reveal key={item.year} delay={index * 100}>
              <article
                className={`relative grid md:grid-cols-2 ${
                  index % 2 !== 0 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`pl-9 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-20"
                      : "md:order-2 md:pl-20"
                  }`}
                >
                  <div
                    className={`mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 ${
                      index % 2 !== 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <span>Registo {registo}</span>

                    {isLast && (
                      <span className="rounded-full bg-orange-50 px-2 py-0.5 text-orange-500">
                        Presente
                      </span>
                    )}
                  </div>

                  <span className="text-5xl font-black tracking-[-0.05em] text-orange-500 md:text-7xl">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-neutral-950 md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500 md:text-base">
                    {item.text}
                  </p>
                </div>

                <div className="absolute left-0 top-2 flex h-[22px] w-[22px] items-center justify-center rounded-full border-4 border-[#fafafa] bg-orange-500 md:left-1/2 md:-translate-x-1/2">
                  {isLast && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                  )}

                  <div className="relative h-1.5 w-1.5 rounded-full bg-white" />
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

/* =========================================================
   PÁGINA
========================================================= */

export default function SobreNos() {
  /* =======================================================
     IMAGEM SELECIONADA DA GALERIA
  ======================================================== */

  const [selectedGallery, setSelectedGallery] = useState(null)

  return (
    <main className="overflow-hidden bg-[#fafafa] text-neutral-950">

      {/* ===================================================
          HERO
      ==================================================== */}

      <section className="relative min-h-[88vh] overflow-hidden bg-neutral-950">
        <div className="absolute inset-0">
          <img
            src={foto1}
            alt="GLOBAL A.P.C.I"
            className="h-full w-full scale-105 object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-14 pt-32 sm:px-8 md:px-10 md:pb-24">
          <div className="max-w-5xl">
            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:text-sm"
            >
              <ArrowLeft size={15} />
              Voltar à página inicial
            </Link>

            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />

                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-400 md:text-xs">
                  GLOBAL A.P.C.I · Desde 2022
                </p>
              </div>

              <h1 className="max-w-5xl text-[3.2rem] font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl">
                Informação.
                <br />

                <span className="text-orange-500">
                  Conhecimento.
                </span>

                <br />

                Transformação.
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-xl md:leading-8">
                Uma academia de transformação e inovação dedicada às
                Ciências da Informação, à formação profissional e ao
                desenvolvimento de soluções para organizações e indivíduos.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 md:flex">
          Descubra a GAPCI

          <span className="h-px w-12 bg-white/30" />
        </div>
      </section>

      {/* ===================================================
          INTRODUÇÃO
      ==================================================== */}

      <section className="px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-20">
          <Reveal>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Sparkles size={17} className="text-orange-500" />

                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                  Quem somos
                </span>
              </div>

              <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Não trabalhamos
                <br />
                apenas com
                <br />

                <span className="text-orange-500">
                  informação.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-6 text-base leading-8 text-neutral-500 md:text-lg">
              <p>
                Somos uma academia de transformação e inovação.
                Fundada em Junho de 2022, a{" "}
                <strong className="font-bold text-neutral-950">
                  GLOBAL A.P.C.I
                </strong>{" "}
                — Academia dos Profissionais de Ciências da Informação —
                surgiu com o objectivo de oferecer às empresas e
                particulares serviços especializados nas áreas das
                Ciências da Informação.
              </p>

              <p>
                Actuamos em áreas como{" "}
                <strong className="text-neutral-900">
                  Biblioteconomia, Arquivologia, Digitalização de
                  Documentos e Gestão da Informação.
                </strong>
              </p>

              <p>
                Promovemos também eventos culturais e comerciais
                relacionados com as nossas áreas de actuação, mantendo
                uma perspectiva global.
              </p>

              <div className="flex items-center gap-4 pt-3">
                <span className="h-10 w-10 shrink-0 rounded-full bg-orange-500" />

                <span className="text-sm font-bold text-neutral-900">
                  Qualidade, excelência e compromisso.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================================
          VÍDEO
      ==================================================== */}

      <section className="px-4 pb-24 sm:px-6 md:px-10 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <VideoSection />
          </Reveal>
        </div>
      </section>

      {/* ===================================================
          PILARES
      ==================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14 max-w-3xl md:mb-20">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                O que nos orienta
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Uma visão.
                <br />

                <span className="text-neutral-300">
                  Quatro pilares.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, index) => (
              <PillarCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          FRASE DE IMPACTO
      ==================================================== */}

      <section className="bg-neutral-950 px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-end">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                  A nossa essência
                </span>
              </div>

              <blockquote className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
                “Transformar informação em conhecimento e conhecimento em
                <span className="text-orange-500">
                  {" "}possibilidade.
                </span>
                ”
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================================
          HISTÓRIA
      ==================================================== */}

      <section className="px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-20 max-w-3xl">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                A nossa jornada
              </span>

              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Uma história que
                <br />

                <span className="text-neutral-300">
                  continua a ser escrita.
                </span>
              </h2>
            </div>
          </Reveal>

          <HistoriaTimeline />
        </div>
      </section>

      {/* ===================================================
          GALERIA
      ==================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                  Dentro da GAPCI
                </span>

                <h2 className="mt-4 text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  Pessoas.
                  <br />
                  Momentos.
                  <br />

                  <span className="text-orange-500">
                    Experiências.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-neutral-500">
                Um pouco do ambiente e dos momentos que fazem parte
                da nossa jornada.
              </p>
            </div>
          </Reveal>

          {/* GALERIA */}

          <div className="grid auto-rows-[240px] gap-4 md:grid-cols-12 md:auto-rows-[210px]">
            {gallery.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 100}
                className={item.className}
              >
                <button
                  type="button"
                  onClick={() => setSelectedGallery(item)}
                  className="group relative h-full w-full overflow-hidden rounded-[1.5rem] bg-neutral-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-5 md:p-7">
                    <h3 className="max-w-xs text-lg font-black text-white md:text-xl">
                      {item.title}
                    </h3>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          CTA
      ==================================================== */}

      <section className="relative overflow-hidden bg-orange-500 px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border-[70px] border-white/10" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border-[70px] border-black/5" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <img
                  src={logo}
                  alt="GLOBAL A.P.C.I"
                  className="mb-8 h-14 w-auto object-contain brightness-0 invert"
                />

                <h2 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
                  O próximo capítulo
                  <br />
                  começa agora.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 md:text-lg">
                  Conheça a GAPCI e descubra uma nova perspectiva sobre
                  informação, conhecimento e desenvolvimento profissional.
                </p>
              </div>

              <Link
                to="/#contacto"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-black text-neutral-950 transition-all duration-300 hover:gap-6 hover:bg-neutral-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
              >
                Fale connosco

                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================================
          MODAL DA GALERIA
      ==================================================== */}

      <GalleryModal
        item={selectedGallery}
        onClose={() => setSelectedGallery(null)}
      />

      {/* ===================================================
          ANIMAÇÕES
      ==================================================== */}

      <style>{`
        @keyframes videoProgress {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(400%);
          }
        }

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