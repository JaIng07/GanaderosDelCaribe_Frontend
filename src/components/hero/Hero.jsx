import { Link } from "react-router-dom";
import cow from "../../assets/cow.png";

function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-primary relative font-montserrat px-10 h-[90vh]">
        <div className="lg:w-1/2 relative text-white z-20">
          <h1 className="text-2xl pt-10 md:text-4xl lg:text-6xl lg:pt-20 font-bold">
            ¡Bienvenido a tu Cooperativa!
          </h1>
          <p className="text-base mt-4">
            Somos una cooperativa comprometida con el desarrollo y el bienestar
            de los ganaderos en la región del Caribe. Nuestro objetivo es
            promover la colaboración y el crecimiento sostenible de la industria
            ganadera, brindando apoyo integral a nuestros miembros.
          </p>
          <Link to="auth/login">
            <button
              to="auth/login"
              className="bg-transparent border text-white font-medium py-2 px-12 my-5 hover:bg-slate-50 hover:text-primary transition duration-500 rounded-full"
            >
              Iniciar Sesión
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 lg:end-0 overflow-hidden relative z-10">
          <img
            src={cow}
            alt="Imagen del Héroe"
            className="w-3/4 lg:w-full lg:h-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,192L48,192C96,192,192,192,288,176C384,160,480,128,576,138.7C672,149,768,203,864,213.3C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Hero;
