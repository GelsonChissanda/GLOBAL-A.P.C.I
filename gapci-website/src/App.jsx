import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import useReveal from "./hooks/useReveal"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Values from "./components/Values"
import WhyUs from "./components/WhyUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import Organograma from "./components/Organograma"
import BackToTopButton from "./components/BackToTopButton"
import SobreNos from "./pages/SobreNos"

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) {
      // pequeno delay para garantir que a secção já está montada
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Organograma />
      <Services />
      <Values />
      <WhyUs />
      <Contact />
    </>
  )
}

function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </>
  )
}

export default App