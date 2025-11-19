import React, { useState } from "react";

function RegistroPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones básicas
    if (!formData.nombre || !formData.email || !formData.password || !formData.confirmarPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    if (formData.password !== formData.confirmarPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Aquí podrías enviar los datos a tu backend
    console.log("Registrando usuario:", formData);
    alert("¡Registro exitoso!");
    setFormData({ nombre: "", email: "", password: "", confirmarPassword: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 py-16 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">Registro</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-left mb-2 font-semibold text-gray-700">Nombre Completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-left mb-2 font-semibold text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-left mb-2 font-semibold text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Contraseña"
            />
          </div>

          <div>
            <label className="block text-left mb-2 font-semibold text-gray-700">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmarPassword"
              value={formData.confirmarPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Repite tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Registrarse
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <a href="/iniciar-sesion" className="text-red-600 font-semibold hover:underline">
            Iniciar Sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegistroPage;
