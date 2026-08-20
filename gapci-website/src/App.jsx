import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop";

import useReveal from "./hooks/useReveal"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import OrganizationPreview from "./components/OrganizationPreview"
import Services from "./components/Services"
import Values from "./components/Values"
import WhyUs from "./components/WhyUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import BackToTopButton from "./components/BackToTopButton"

import SobreNos from "./pages/SobreNos"
import Organograma from "./pages/Organograma"


function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const el = document.querySelector(hash)

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
        })
      }, 50)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <OrganizationPreview />
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

        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/sobre-nos"
          element={<SobreNos />}
        />

        <Route
          path="/organograma"
          element={<Organograma />}
        />
      </Routes>

      <Footer />

      <WhatsAppButton />

      <BackToTopButton />
    </>
  )
}

export default App