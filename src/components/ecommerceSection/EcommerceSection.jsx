import { Link } from "react-router-dom";

const EcommerceSection = () => {
  return (
    <header className="bg-white dark:bg-gray-900 font-montserrat">
      <div className="container flex flex-col px-6 mb-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg lg:mx-12 lg:order-2">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xllg:text-4xl">
              Compra lo mejores productos del campo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sumérgete en la autenticidad de la vida en el campo con nuestra
              selección de productos de calidad. Desde la frescura de la leche
              recién ordeñada hasta herramientas robustas para la gestión
              ganadera, nuestra tienda en línea es tu destino para todo lo
              relacionado con la vida rural. !Haz clic! y descubre la esencia
              del campo en cada producto.
            </p>
            <div className="mt-6">
              <Link
                to="/ecommerce"
                className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-primary rounded-lg hover:bg-primary/75 lg:mx-0 lg:w-auto focus:outline-none"
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
