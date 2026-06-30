import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logoo.png";

const links = [
  { label: "Serviços", href: "#servicos" },
  {
    label: "Ensino",
    href: "#ensino",
    items: [
      { label: "Formação Complementar", href: "#formacao-complementar" },
      { label: "Formação Executiva", href: "#formacao-executiva" },
    ],
  },
  {
    label: "Publicações",
    href: "#publicacoes",
    items: [
      { label: "Social Media", href: "#social-media" },
      { label: "Artigos", href: "#artigos" },
      { label: "Nossos Livros", href: "#nossos-livros" },
    ],
  },
  {
    label: "Institucional",
    href: "#institucional",
    items: [
      { label: "Notícias", href: "#noticias" },
      { label: "Eventos", href: "#eventos" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
  {
    label: "Contacto",
    href: "#contacto",
    items: [
      { label: "Reclamações", href: "#reclamacoes" },
      { label: "Logios e Sugestões", href: "#logios-e-sugestoes" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

            <ul className="rounded-xl absolute left-0 mt-0 hidden w-48 bg-white shadow-lg group-hover:block transition duration-1000">
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
                <a href="#contacto">Iniciativas</a>
              </li>
            </ul>
          </li>

          {links.map((link) => (
            <li
              key={link.label}
              className={`cursor-pointer relative group text-sm font-medium hover:text-orange-500 transition-colors ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <a href={link.href} className="block">
                {link.label}
              </a>
              {link.items && (
                <ul className="rounded-xl absolute left-0 mt-0 hidden w-56 bg-white shadow-lg group-hover:block transition duration-1000">
                  {link.items.map((item) => (
                    <li key={item.label} className="px-4 py-2 hover:bg-orange-500 hover:text-white hover:rounded-xl">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              )}
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
          <select
            onChange={(e) => {
              window.location.href = e.target.value;
              setOpen(false);
            }}
            defaultValue=""
          >
            <option value="" className="text-gray-700 font-medium text-sm py-2 border-b border-gray-50 hover:text-orange-500 transition-colors" disabled>
              G.A.P.C.I
            </option>
            <option value="#sobre" className="text-gray-700 font-medium text-sm py-2 border-b border-gray-50 hover:text-orange-500 transition-colors">
              Sobre Nós
            </option>
            <option value="#missao" className="text-gray-700 font-medium text-sm py-2 border-b border-gray-50 hover:text-orange-500 transition-colors">
              Mensagem da Presidente
            </option>
            <option value="#contacto" className="text-gray-700 font-medium text-sm py-2 border-b border-gray-50 hover:text-orange-500 transition-colors">
              Organograma
            </option>
            <option value="#iniciativas" className="text-gray-700 font-medium text-sm py-2 border-b border-gray-50 hover:text-orange-500 transition-colors">
              Iniciativas
            </option>
          </select>

          {links.map((link) => (
            <div key={link.label} className="flex flex-col">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium text-sm py-2 border-b border-gray-50 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </a>
              {link.items && (
                <div className="ml-4 flex flex-col gap-1 py-1">
                  {link.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-gray-600 text-sm py-1 hover:text-orange-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
