import FeatureSectionsItems from "./FeatureSectionsItems";
import { featuresItems } from "../../data/featuresItems";

function FeatureSections() {
  return (
    <div className="overflow-hidden bg-white font-montserrat pt-0 sm:pt-0 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nuestras Características
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Descubre cómo nuestra aplicación simplifica la gestión ganadera
                y te ayuda a mantener registros precisos, garantizar la salud de
                tus animales y hacer crecer tu negocio ganadero en el Caribe de
                manera sostenible.
              </p>
              <FeatureSectionsItems features={featuresItems} />
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/458991/pexels-photo-458991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 contrast-[.8]"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureSections;
