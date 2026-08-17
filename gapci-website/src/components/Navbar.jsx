import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logoo.png";

const gapci = {
  label: "G.A.P.C.I",
  items: [
    { label: "Sobre Nós", href: "/sobre-nos" },
    { label: "Mensagem da Presidente", href: "#missao" },
    { label: "Organograma", href: "#organograma" },
    { label: "Iniciativas", href: "#contacto" },
  ],
};

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

const mobileMenu = [gapci, ...links];

// Renderiza como rota (/sobre-nos) ou como âncora de secção da home (#servicos -> /#servicos)
function SmartLink({ href, className, onClick, children }) {
  const to = href.startsWith("/") ? href : `/${href}`;
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleMenu = () => {
    setOpen((prev) => {
      if (prev) setOpenCategory(null);
      return !prev;
    });
  };

  const closeAll = () => {
    setOpen(false);
    setOpenCategory(null);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
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
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li
            className={`cursor-pointer relative group text-sm font-medium hover:text-orange-500 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <span className="flex items-center gap-1">
              G.A.P.C.I
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <ul className="rounded-xl absolute left-0 mt-0 hidden w-48 bg-white shadow-lg group-hover:block transition duration-1000">
              {gapci.items.map((item) => (
                <li key={item.label} className="px-4 py-2 hover:bg-orange-500 hover:text-white hover:rounded-xl">
                  <SmartLink href={item.href}>{item.label}</SmartLink>
                </li>
              ))}
            </ul>
          </li>

          {links.map((link) => (
            <li
              key={link.label}
              className={`cursor-pointer relative group text-sm font-medium hover:text-orange-500 transition-colors ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <SmartLink href={link.href} className="flex items-center gap-1">
                {link.label}
                {link.items && (
                  <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                )}
              </SmartLink>
              {link.items && (
                <ul className="rounded-xl absolute left-0 mt-0 hidden w-56 bg-white shadow-lg group-hover:block transition duration-1000">
                  {link.items.map((item) => (
                    <li key={item.label} className="px-4 py-2 hover:bg-orange-500 hover:text-white hover:rounded-xl">
                      <SmartLink href={item.href}>{item.label}</SmartLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <SmartLink
          href="#contacto"
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Falar Connosco
        </SmartLink>

        {/* Botão mobile */}
        <button
          className={`md:hidden p-1 ${scrolled ? "text-gray-900" : "text-white"}`}
          onClick={toggleMenu}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile — accordion por categorias */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col max-h-[80vh] overflow-y-auto shadow-lg">
          {mobileMenu.map((link) => (
            <div key={link.label} className="border-b border-gray-100 last:border-b-0">
              {link.items ? (
                <>
                  <button
                    onClick={() =>
                      setOpenCategory(openCategory === link.label ? null : link.label)
                    }
                    className="w-full flex items-center justify-between py-3 text-gray-800 font-semibold text-sm"
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        openCategory === link.label ? "rotate-180 text-orange-500" : "text-gray-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openCategory === link.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-1 pb-3 pl-3 ml-1 border-l-2 border-orange-100">
                      {link.items.map((item) => (
                        <SmartLink
                          key={item.label}
                          href={item.href}
                          onClick={closeAll}
                          className="text-gray-600 text-sm py-2 pl-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors block"
                        >
                          {item.label}
                        </SmartLink>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <SmartLink
                  href={link.href}
                  onClick={closeAll}
                  className="block py-3 text-gray-800 font-semibold text-sm hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </SmartLink>
              )}
            </div>
          ))}

          <SmartLink
            href="#contacto"
            onClick={closeAll}
            className="mt-3 bg-orange-500 text-white text-center font-semibold px-5 py-3 rounded-full shadow-sm hover:bg-orange-600 transition-colors block"
          >
            Falar Connosco
          </SmartLink>
        </div>
      )}
    </nav>
  );
}