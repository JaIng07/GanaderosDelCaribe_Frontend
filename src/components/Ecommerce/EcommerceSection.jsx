import { Link } from "react-router-dom";

const EcommerceSection = () => {
  return (
    <header className="font-montserrat text-white mb-20">
      <div className="p-10 container flex flex-col mb-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center bg-primary rounded-xl">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg lg:mx-12 lg:order-2">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-4xllg:text-4xl">
              Compra lo mejores productos del campo
            </h1>
            <p className="mt-6 text-lg leading-8  text-white/80">
              Sumérgete en la autenticidad de la vida en el campo con nuestra
              selección de productos de calidad. Desde la frescura de la leche
              recién ordeñada hasta herramientas robustas para la gestión
              ganadera, nuestra tienda en línea es tu destino para todo lo
              relacionado con la vida rural. !Haz clic! y descubre la esencia
              del campo en cada producto.
            </p>
            <div className="mt-10">
              <Link
                to="/ecommerce"
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-md my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                Ir a la tienda
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://images.pexels.com/photos/6294105/pexels-photo-6294105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="apple watch photo"
          />
        </div>
      </div>
    </header>
  );
};

export default EcommerceSection;
