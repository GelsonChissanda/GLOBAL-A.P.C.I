import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logoo.png";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Missão & Valores", href: "#valores" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <div>
          <span
            className={`text-sm md:text-base font-bold ${scrolled ? "text-orange-600" : "text-white"}`}
          >
            GLOBAL A.P.C.I
          </span>

          <span
            className={`hidden lg:flex text-xs font-medium ${scrolled ? "text-gray-600" : "text-gray-300"}`}
          >
            Academia dos Profissionais de Ciências da Informação
          </span>
          </div>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">

          <li
  className={`cursor-pointer relative group text-sm font-medium hover:text-orange-500 transition-colors ${
    scrolled ? "text-gray-700" : "text-white"
  }`}
>
  G.A.P.C.I

  <ul className=" rounded-xl absolute left-0 mt-0 hidden w-48 bg-white shadow-lg group-hover:block">
    <li className="px-4 py-2 hover:bg-orange-500 hover:text-white hover:rounded-xl">
      <a href="#sobre">Sobre Nós</a>
    </li>
    <li className="px-4 py-2 hover:bg-orange-500 hover:text-white hover:rounded-xl">
      <a href="#missao">Mensagem da Presidente</a>
    </li>
    <li className="px-4 py-2 hover:bg-orange-500 hover:text-white hover:rounded-xl">
      <a href="#contacto">Organograma</a>
    </li>
    <li className="px-4 py-2 hover:bg-orange-500 hover:text-white hover:rounded-xl">
      <a href="#contacto"> Iniciativas</a>
    </li>
  </ul>
</li>


          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium hover:text-orange-500 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Falar Connosco
        </a>

        {/* Botão mobile */}
        <button
          className={`md:hidden p-1 ${scrolled ? "text-gray-900" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          <select className="appearance-none cursor-pointer text-gray-700 font-medium text-sm py-2 border-none rounded-xk hover:text-orange-500 transition-colors">
            <option className="bg-orange-500 text-white" selected>G.A.P.C.I</option>
            <option className="bg-orange-500 text-white" >Sobre Nós</option>
            <option className="bg-orange-500 text-white">Mensagem da Presidente</option>
            <option className="bg-orange-500 text-white">Organograma</option>
            <option className="bg-orange-500 text-white">Iniciativas</option>
          </select>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium text-sm py-2 border-b border-gray-50 hover:text-orange-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 bg-orange-500 text-white text-center font-semibold px-5 py-3 rounded-full"
          >
            Falar Connosco
          </a>
        </div>
      )}
    </nav>
  );
}
