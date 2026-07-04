import { useEffect, useState } from "react"

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    title: "A sua informação organizada, preservada e acessível.",
    description:
      "Consultoria especializada em gestão de arquivos, biblioteconomia, digitalização e formação profissional para empresas e particulares em Angola.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    title: "Documentos em ordem, decisões mais rápidas.",
    description:
      "Estratégias práticas para transformar o arquivo em um ativo estratégico e facilitar o dia a dia da sua organização.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    title: "Tecnologia e expertise para um arquivo seguro.",
    description:
      "Soluções modernas que combinam organização, segurança e acessibilidade para cada etapa do processo documental.",
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  const currentSlide = slides[activeSlide]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/30" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl reveal">
            <p className="mb-5 inline-flex items-center rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Soluções de arquivo e documentação
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              {currentSlide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">
              {currentSlide.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicos"
                className="rounded-full bg-orange-500 px-8 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-orange-600"
              >
                Ver Serviços
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-white/30 px-8 py-3 text-center font-semibold text-white transition-all duration-300 hover:border-orange-500 hover:text-orange-400"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                  Destaque
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Arquivos que inspiram confiança
                </p>
              </div>
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    aria-label={`Ver slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeSlide ? "w-8 bg-orange-500" : "w-2.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}