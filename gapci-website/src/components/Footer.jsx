import logo from "../assets/logoo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="reveal text-center md:text-left">
          <img src={logo} alt="Logo GAPCI" className="h-14 w-14 object-contain" />
                      <span
                      className="text-sm  font-bold text-orange-600"
                    >
                      GLOBAL A.P.C.I
                    </span>
                    
          <p className="text-sm mt-1">Academia dos Profissionais de Ciências da Informação</p>
        </div>

        <div className="reveal flex gap-8 text-sm">
          <a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-orange-500 transition-colors">Serviços</a>
          <a href="#valores" className="hover:text-orange-500 transition-colors">Valores</a>
          <a href="#contacto" className="hover:text-orange-500 transition-colors">Contacto</a>
        </div>

        <p className="reveal text-sm">© 2024 GLOBAL A.P.C.I. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}