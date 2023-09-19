import { Link } from "react-router-dom";
import cow404 from "../../assets/cow404.jpeg";

function Page404() {
  return (
    <section className="bg-white text-black">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-primary ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            ¡Ups, nos hemos despistado! 🐮🏝️
          </h1>
          <p className="mt-4 text-gray-500">
            Parece que te has perdido en la pradera virtual. Nuestra querida
            vaca surfeadora está tan emocionada como tú por encontrarte aquí,
            ¡pero parece que hemos llegado a una página equivocada!
          </p>

          <Link to="/">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 mt-5 text-sm text-white transition-colors duration-200 bg-primary rounded-lg sm:w-auto hover:bg-green-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Regresa</span>
            </button>
          </Link>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className=" w-full lg:h-[32rem] h-100 w-100 md:h-96 rounded-lg object-cover "
            src={cow404}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Page404;
