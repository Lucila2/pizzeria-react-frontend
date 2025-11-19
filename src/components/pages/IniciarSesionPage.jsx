import React from "react";
import { Mail, Lock } from "lucide-react";

function IniciarSesionPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-[380px] px-10 py-10 rounded-xl shadow-lg text-center">

        {/* ICONO */}
        <div className="w-24 h-24 rounded-full bg-[#0bbcd6] mx-auto flex items-center justify-center mb-4">
          <span className="text-white text-5xl font-bold">👤</span>
        </div>

        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Login</h2>

        {/* FORMULARIO */}
        <div className="text-left">

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-gray-600 text-sm">Email</label>
            <div className="flex items-center bg-gray-100 border rounded-md px-3 mt-1">
              <Mail size={18} className="text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent p-2 outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-gray-600 text-sm">Password</label>
            <div className="flex items-center bg-gray-100 border rounded-md px-3 mt-1">
              <Lock size={18} className="text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent p-2 outline-none"
              />
            </div>
          </div>
        </div>

        {/* BOTÓN */}
        <button className="w-full bg-[#0bbcd6] text-white py-2 rounded-md text-lg font-medium hover:bg-[#0ac3dd] transition">
          Login
        </button>

        {/* ENLACE */}
        <p className="mt-4 text-sm text-gray-500 cursor-pointer hover:text-gray-700">
          Forgot password ?
        </p>
      </div>
    </div>
  );
}

export default IniciarSesionPage;
