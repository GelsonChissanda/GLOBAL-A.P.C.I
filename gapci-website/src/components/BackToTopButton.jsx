import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // aparece depois de passar da altura da janela (podes ajustar)
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-25 right-6 z-50 p-3 rounded-full shadow-lg
        bg-linear-to-br from-orange-500 to-yellow-500 text-white
        transition-all duration-300 hover:scale-110
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ArrowUp size={20} />
    </button>
  );
}