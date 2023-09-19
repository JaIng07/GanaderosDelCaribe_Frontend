import { Link } from "react-router-dom";
import cow from "../../assets/cow.png";

function Hero() {
  return (
    <>
      <div className="bg-primary pt-5 text-white relative overflow-hidden font-montserrat">
        <div className="container px-3 pb-40 mx-auto flex flex-wrap flex-col md:flex-row items-center ml-10">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left z-10">
            <h1 className="text-5xl font-bold leading-tight">
              ¡Bienvenido a <br/>tu Cooperativa!
            </h1>
            <p className="leading-normal text-base py-4">
              Somos una cooperativa comprometida con el desarrollo y el
              bienestar de los ganaderos en la región del Caribe. Nuestro
              objetivo es promover la colaboración y el crecimiento sostenible
              de la industria ganadera, brindando apoyo integral a nuestros
              miembros.
            </p>
            <Link
              to="auth/login"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Iniciar Sesión
            </Link>
          </div>
          <div className="w-full md:w-3/5 text-center">
            <img className="w-full md:w-4/5 z-50" src={cow} alt="Cow" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
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
