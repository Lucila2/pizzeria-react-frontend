
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-white mt-4">

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IZQUIERDA */}
        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-black mb-6">
            Las Mejores Pizzas Artesanales de la Ciudad
          </h2>

          <p className="text-lg text-gray-800 max-w-xl leading-relaxed mb-10">
            Preparadas con ingredientes frescos, amor familiar y tradición italiana en cada bocado.
          </p>

          <div className="flex gap-6">
            <button
              onClick={() => navigate('/menu')}
              className="px-6 py-3 bg-black text-white rounded-lg font-semibold  
                hover:bg-yellow-500 hover:text-black
                hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
            >
              Ver Menú
            </button>

            <button
              onClick={() => navigate('/promociones')}
              className="px-6 py-3 bg-white border border-black text-black rounded-lg font-semibold 
                hover:bg-yellow-500 hover:text-black
                hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
            >
              Ver Ofertas
            </button>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center md:justify-end -mt-18">
          <img
            src="public/imgs/logo.png"
            alt="Pizza"
            className="w-90 h-90 rounded-full shadow-lg border-4 border-black object-cover"
          />
        </div>

      </div>
    </main>
  );
}

export default HomePage;
