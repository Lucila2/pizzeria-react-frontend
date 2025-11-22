import { ShoppingCart, UserCog,} from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";

// IMPORTA TUS PÁGINAS CORRECTAMENTE (PASCAL CASE)
import HomePage from "./components/pages/HomePage";
import MenuPage from "./components/pages/MenuPage";
import PromocionesPage from "./components/pages/PromocionesPage";
import SobreNosotrosPage from "./components/pages/SobreNosotrosPage";
import ContactoPage from "./components/pages/ContactoPage";
import IniciarSesionPage from "./components/pages/IniciarSesionPage";
import RegistroPage from "./components/pages/RegistroPage";
import CarritoPage from "./components/pages/CarritoPage";
import PedirAhoraPage from "./components/pages/PedirAhoraPage";
import AdminPage from "./components/pages/AdminPage";


function App() {
  return (
    <div className="w-full">

      {/* HEADER */}
      <header className="w-full">

        {/* NAVBAR FIJA */}
        <nav className="
          fixed top-0 left-0 w-full z-50 bg-gray-100 flex items-center justify-between py-4 px-6
          shadow-md">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className=" w-[60px] h-[60px] bg-white  rounded-full  flex items-center justify-center 
                border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <img
                src="/imgs/logo.png"
                alt="logo"
                className="w-12 h-12 object-contain"
              />
            </div>

            <span className="text-xl font-bold tracking-wider text-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              OHANA PIZZAS
            </span>
          </Link>


          {/* MENÚ PRINCIPAL */}
          <ul className="flex items-center gap-8 text-sm font-bold text-black">
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/menu">Menú</Link>
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/promociones">Promociones</Link>
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            </li>
            <li className="hover:text-yellow-600 cursor-pointer">
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>

          {/* LOGIN + ICONOS */}
          <ul className="flex items-center gap-6 text-sm font-medium text-black pr-2">
            <li className="cursor-pointer hover:text-yellow-600">
              <Link to="/iniciar-sesion">Iniciar Sesión</Link>
            </li>

            <li className="cursor-pointer hover:text-yellow-600">
              <Link to="/registro">Registro</Link>
            </li>


            <li className="w-7 h-7 cursor-pointer hover:text-yellow-600 drop-shadow">
              <Link to="/admin">
                <UserCog />
              </Link>
            </li>


            <li className="w-7 h-7 cursor-pointer hover:text-yellow-600 drop-shadow">
              <Link to="/carrito">
                <ShoppingCart />
              </Link>
            </li>


            <li className=" bg-black text-white  px-6 py-2  rounded-lg  border-2 border-black  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-200 hover:bg-yellow-500 hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
                            active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
              <Link to="/pedir-ahora">Pedir Ahora</Link>
            </li>

          </ul>

          {/* LINEA INFERIOR */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black"></div>
        </nav>
      </header>

      {/* CONTENIDO ROUTES*/}
      <div className="pt-29 mt-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/promociones" element={<PromocionesPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/iniciar-sesion" element={<IniciarSesionPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/pedir-ahora" element={<PedirAhoraPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
