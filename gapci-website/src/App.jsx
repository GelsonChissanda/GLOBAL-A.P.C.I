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


function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App