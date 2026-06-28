export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gray-900 flex items-center justify-center px-6 relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
        <span className="inline-block bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-orange-500/30">
          Academia dos Profissionais de Ciências da Informação
        </span>

        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          A sua informação{" "}
          <span className="text-orange-500">organizada,</span>{" "}
          preservada e acessível.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Oferecemos consultoria especializada em gestão de arquivos, biblioteconomia,
          digitalização de documentos e formação profissional para empresas e particulares em Angola.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#servicos" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Ver Serviços
          </a>
          <a href="#contacto" className="border border-white/30 hover:border-orange-500 text-white font-semibold px-8 py-3 rounded-full transition-colors hover:text-orange-400">
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}