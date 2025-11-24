function RegistrateAqui() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-gray-100 pt-20">
      
      <div className="bg-white p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-4 border-black w-[90%] max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Regístrate Aquí
        </h1>

        <form className="flex flex-col gap-4">

          {/* NOMBRE */}
          <div className="flex flex-col text-left">
            <label className="font-semibold">Nombre Completo</label>
            <input
              type="text"
              className="p-3 border-2 border-black rounded-xl focus:outline-none"
              placeholder="Tu nombre"
              required
            />
          </div>

          {/* CORREO */}
          <div className="flex flex-col text-left">
            <label className="font-semibold">Correo Electrónico</label>
            <input
              type="email"
              className="p-3 border-2 border-black rounded-xl focus:outline-none"
              placeholder="ejemplo@gmail.com"
              required
            />
          </div>

          {/* CONTRASEÑA */}
          <div className="flex flex-col text-left">
            <label className="font-semibold">Contraseña</label>
            <input
              type="password"
              className="p-3 border-2 border-black rounded-xl focus:outline-none"
              placeholder="********"
              required
            />
          </div>

          {/* CONFIRMAR CONTRASEÑA */}
          <div className="flex flex-col text-left">
            <label className="font-semibold">Confirmar Contraseña</label>
            <input
              type="password"
              className="p-3 border-2 border-black rounded-xl focus:outline-none"
              placeholder="********"
              required
            />
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            className="w-full mt-4 bg-black text-white p-3 rounded-xl font-bold hover:bg-gray-800 transition"
          >
            Crear Cuenta
          </button>
        </form>

      </div>
    </main>
  );
}

export default RegistrateAqui;
