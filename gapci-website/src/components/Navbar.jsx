import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
import logo from "../assets/logoo.png"

const gapci = {
  label: "G.A.P.C.I",
  items: [
    {
      label: "Sobre Nós",
      href: "/sobre-nos",
    },
    {
      label: "Mensagem da Presidente",
      href: "/#missao",
    },
    {
      label: "Organograma",
      href: "/organograma",
    },
    {
      label: "Iniciativas",
      href: "/#contacto",
    },
  ],
}

const links = [
  {
    label: "Serviços",
    href: "/#servicos",
  },
  {
    label: "Ensino",
    href: "/#ensino",
    items: [
      {
        label: "Formação Complementar",
        href: "/#formacao-complementar",
      },
      {
        label: "Formação Executiva",
        href: "/#formacao-executiva",
      },
    ],
  },
  {
    label: "Publicações",
    href: "/#publicacoes",
    items: [
      {
        label: "Social Media",
        href: "/#social-media",
      },
      {
        label: "Artigos",
        href: "/#artigos",
      },
      {
        label: "Nossos Livros",
        href: "/#nossos-livros",
      },
    ],
  },
  {
    label: "Institucional",
    href: "/#institucional",
    items: [
      {
        label: "Notícias",
        href: "/#noticias",
      },
      {
        label: "Eventos",
        href: "/#eventos",
      },
      {
        label: "Newsletter",
        href: "/#newsletter",
      },
    ],
  },
  {
    label: "Contacto",
    href: "/#contacto",
    items: [
      {
        label: "Reclamações",
        href: "/#reclamacoes",
      },
      {
        label: "Logios e Sugestões",
        href: "/#logios-e-sugestoes",
      },
    ],
  },
]

const mobileMenu = [gapci, ...links]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openCategory, setOpenCategory] = useState(null)

  /* =========================================================
     PÁGINAS INTERNAS
  ========================================================= */

  const isInternalPage =
    window.location.pathname === "/sobre-nos" ||
    window.location.pathname === "/organograma"

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  /* =========================================================
     ESTADO VISUAL DO NAVBAR
  ========================================================= */

  const navbarScrolled = scrolled || isInternalPage

  const textColor = navbarScrolled
    ? "text-gray-700"
    : "text-white"

  const logoTitleColor = navbarScrolled
    ? "text-orange-600"
    : "text-white"

  const logoSubtitleColor = navbarScrolled
    ? "text-gray-600"
    : "text-gray-300"

  /* =========================================================
     MENU MOBILE
  ========================================================= */

  const toggleMenu = () => {
    setOpen((previous) => {
      if (previous) {
        setOpenCategory(null)
      }

      return !previous
    })
  }

  const closeAll = () => {
    setOpen(false)
    setOpenCategory(null)
  }

  const toggleCategory = (label) => {
    setOpenCategory((previous) =>
      previous === label ? null : label
    )
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        navbarScrolled
          ? "bg-white/95 shadow-md backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">

        {/* ===================================================
            LOGO
        ==================================================== */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="GLOBAL A.P.C.I"
            className="h-12 w-12 object-contain"
          />

          <div>
            <span
              className={`text-sm font-bold transition-colors duration-300 md:text-base ${logoTitleColor}`}
            >
              GLOBAL A.P.C.I
            </span>

            <span
              className={`hidden text-xs font-medium transition-colors duration-300 lg:flex ${logoSubtitleColor}`}
            >
              Academia dos Profissionais de Ciências da Informação
            </span>
          </div>
        </Link>

        {/* ===================================================
            MENU DESKTOP
        ==================================================== */}

        <ul className="hidden items-center gap-8 md:flex">

          {/* =================================================
              G.A.P.C.I
          ================================================== */}

          <li
            className={`group relative cursor-pointer text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${textColor}`}
          >
            <span className="flex items-center gap-1">
              G.A.P.C.I

              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </span>

            {/* DROPDOWN */}

            <ul className="absolute left-0 top-full hidden w-56 overflow-hidden rounded-xl bg-white pt-2 shadow-xl group-hover:block">
              {gapci.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-orange-500 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* =================================================
              OUTROS LINKS
          ================================================== */}

          {links.map((link) => (
            <li
              key={link.label}
              className={`group relative cursor-pointer text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${textColor}`}
            >
              <Link
                to={link.href}
                className="flex items-center gap-1"
              >
                {link.label}

                {link.items && (
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>

              {/* DROPDOWN */}

              {link.items && (
                <ul className="absolute left-0 top-full hidden w-56 overflow-hidden rounded-xl bg-white pt-2 shadow-xl group-hover:block">
                  {link.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-orange-500 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* ===================================================
            BOTÃO CONTACTO DESKTOP
        ==================================================== */}

        <Link
          to="/#contacto"
          className="hidden rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 md:inline-block"
        >
          Falar Connosco
        </Link>

        {/* ===================================================
            BOTÃO MOBILE
        ==================================================== */}

        <button
          type="button"
          aria-label={
            open
              ? "Fechar menu"
              : "Abrir menu"
          }
          onClick={toggleMenu}
          className={`rounded-lg p-2 transition-colors duration-300 md:hidden ${
            navbarScrolled
              ? "text-gray-900 hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          }`}
        >
          {open ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </div>

      {/* =====================================================
          MENU MOBILE
      ====================================================== */}

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white px-4 py-3 shadow-xl md:hidden">

          {mobileMenu.map((link) => (
            <div
              key={link.label}
              className="border-b border-gray-100 last:border-b-0"
            >

              {/* =================================================
                  CATEGORIA COM SUBMENU
              ================================================== */}

              {link.items ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      toggleCategory(link.label)
                    }
                    className="flex w-full items-center justify-between py-3 text-sm font-semibold text-gray-800 transition-colors hover:text-orange-500"
                  >
                    {link.label}

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        openCategory === link.label
                          ? "rotate-180 text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openCategory === link.label
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-1 flex flex-col gap-1 border-l-2 border-orange-100 pb-3 pl-3">

                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={closeAll}
                          className="block rounded-lg py-2 pl-3 text-sm text-gray-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600"
                        >
                          {item.label}
                        </Link>
                      ))}

                    </div>
                  </div>
                </>
              ) : (

                /* =================================================
                   LINK NORMAL
                ================================================== */

                <Link
                  to={link.href}
                  onClick={closeAll}
                  className="block py-3 text-sm font-semibold text-gray-800 transition-colors hover:text-orange-500"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          {/* =================================================
              CTA MOBILE
          ================================================== */}

          <Link
            to="/#contacto"
            onClick={closeAll}
            className="mt-4 block rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
          >
            Falar Connosco
          </Link>
        </div>
      )}
    </nav>
  )
}