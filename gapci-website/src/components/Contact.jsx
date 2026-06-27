import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section id="contacto" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Fale Connosco
          </span>
          <h2 className="text-4xl font-black text-gray-900 mt-2">Contacto</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white p-3 rounded-xl">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Morada</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Camama I – Condomínio BPC, 1ª Fase,<br />
                  Travessa no Brasil nº5, Edifício YUMA<br />
                  Luanda, Angola
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white p-3 rounded-xl">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Telefone</p>
                <p className="text-gray-500 text-sm">+244 952 708 321</p>
                <p className="text-gray-500 text-sm">+244 944 820 712</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white p-3 rounded-xl">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Email</p>
                <a href="mailto:globalapci.ao@gmail.com" className="text-orange-500 text-sm hover:underline">
                  globalapci.ao@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col gap-4">
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Nome completo"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Endereço de email"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors"
              />
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="A sua mensagem..."
                rows={5}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors resize-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors">
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}