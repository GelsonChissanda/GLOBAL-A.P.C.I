import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Missão & Valores", href: "#valores" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className={`text-2xl font-black tracking-tight ${scrolled ? "text-orange-500" : "text-white"}`}>
          GAP<span className={scrolled ? "text-gray-900" : "text-orange-300"}>CI</span>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className={`text-sm font-medium hover:text-orange-500 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
          Falar Connosco
        </a>

        <button className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="bg-orange-500 text-white text-center font-semibold px-5 py-2 rounded-full">
            Falar Connosco
          </a>
        </div>
      )}
    </nav>
  )
}