import { MapPin, Phone, Mail, Clock } from "lucide-react";
function ContactoPage() {
  return (
    <div className="px-6 pt-10 pb-20 max-w-5xl mx-auto">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        Contáctanos
      </h1>

      {/* GRID PRINCIPAL */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* FORMULARIO */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Envíanos un mensaje
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block font-semibold mb-1">
                Nombre
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Correo
              </label>
              <input
                type="email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="ejemplo@gmail.com"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Mensaje
              </label>
              <textarea
                rows="4"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-600 transition shadow-md"
            >
              Enviar Mensaje
            </button>

          </form>
        </div>

        {/* INFORMACIÓN DE CONTACTO + MAPA */}
        <div className="space-y-6">
{/* INFO */}
<div className="bg-white shadow-lg rounded-2xl p-6">
  <h2 className="text-2xl font-bold mb-4 text-center">
    Información
  </h2>

  <p className="mb-3 flex items-center gap-2">
    <MapPin className="w-5 h-5" />
    <strong>Dirección:</strong> Jr. Ayacucho #.. - Celenín, Perú
  </p>

  <p className="mb-3 flex items-center gap-2">
    <Phone className="w-5 h-5" />
    <strong>Teléfono:</strong> +51 900 000 000
  </p>

  <p className="mb-3 flex items-center gap-2">
    <Mail className="w-5 h-5" />
    <strong>Correo:</strong> ohanapizzas@gmail.com
  </p>

  <p className="mb-3 flex items-center gap-2">
    <Clock className="w-5 h-5" />
    <strong>Horario:</strong> 6:00 pm - 11:00 pm
  </p>
</div>

{/* MAPA */}
<div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
  <iframe
    title="Mapa"
    width="100%"
    height="100%"
    loading="lazy"
    allowFullScreen
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.7966327374634!2d-78.14798618840922!3d-6.868651031262374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b3cd0030f39669%3A0xdf36bf68323020a8!2sPizzer%C3%ADa%20Ohana!5e1!3m2!1ses-419!2spe!4v1764012075305!5m2!1ses-419!2spe"
  ></iframe>
</div>


        </div>

      </div>
    </div>
  );
}

export default ContactoPage;
