import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-28 flex justify-center">
      <div className="bg-[#ffe0b2] border-4 border-black rounded-2xl 
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 w-[90%] max-w-xl text-center">

        <h1 className="text-4xl font-bold text-black">
          Panel de Administrador
        </h1>

        <p className="mt-4 text-lg text-gray-800">
          Aquí podrás gestionar tu pizzería.
        </p>

        {/* BOTONES */}
        <div className="mt-10 flex flex-col gap-4">

          {/* Inicio */}
          <Link
            to="/"
            className="bg-[#fff176] hover:bg-[#ffee58] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
            transition active:translate-y-1 active:shadow-none"
          >
            🏠 Inicio
          </Link>

          {/* Menú */}
          <Link
            to="/menu"
            className="bg-[#ffb74d] hover:bg-[#ffa726] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
            transition active:translate-y-1 active:shadow-none"
          >
            🍕 Gestionar Menú
          </Link>

          {/* Promociones */}
          <Link
            to="/promociones"
            className="bg-[#ffcc80] hover:bg-[#ffb74d] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
            transition active:translate-y-1 active:shadow-none"
          >
            🎉 Gestionar Promociones
          </Link>

          {/* Sobre Nosotros */}
          <Link
            to="/sobre-nosotros"
            className="bg-[#ffe0b2] hover:bg-[#ffcc80] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
            transition active:translate-y-1 active:shadow-none"
          >
            🧑‍🍳 Sobre Nosotros
          </Link>

          {/* Contacto */}
          <Link
            to="/contacto"
            className="bg-[#fff3e0] hover:bg-[#ffe0b2] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
            transition active:translate-y-1 active:shadow-none"
          >
            📞 Contacto
          </Link>

          {/* Iniciar Sesión */}
          <Link
            to="/iniciar-sesion"
            className="bg-[#ffe082] hover:bg-[#ffd54f] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
            transition active:translate-y-1 active:shadow-none"
          >
            🔐 Iniciar Sesión
          </Link>

          {/* Carrito */}
          <Link
            to="/carrito"
            className="bg-[#ffab91] hover:bg-[#ff8a65] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
            transition active:translate-y-1 active:shadow-none"
          >
            🛒 Carrito
          </Link>

          {/* Pedir Ahora */}
          <Link
            to="/pedir-ahora"
            className="bg-[#dcedc8] hover:bg-[#c5e1a5] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
            transition active:translate-y-1 active:shadow-none"
          >
            🚀 Pedir Ahora
          </Link>

        </div>

      </div>
    </main>
  );
}

export default AdminPage;
