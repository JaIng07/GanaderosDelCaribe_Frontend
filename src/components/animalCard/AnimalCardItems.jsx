import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function AnimalCardItems({ id, raza, birthDate, peso, imagenUrl, identificationNumber }) {
  const image = imagenUrl
    ? imagenUrl
    : "https://i.pinimg.com/474x/18/cc/58/18cc58f204186fe709ebcb229895b43e.jpg";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 font-montserrat font-normal max-h-[1000px] w-[300px]">
      <div className="grid justify-items-center w-full">
        <img
          src={image}
          alt="Foto del animal"
          className="w-full h-48 object-cover rounded-md mb-5 mx-auto shadow-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-600 text-sm">Número de Identificación:</p>
            <p className="text-lg font-medium pt-1">{identificationNumber}</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-600 text-sm">Raza:</p>
            <p className="text-lg font-medium pt-1">{raza}</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-600 text-sm">Fecha de nacimiento:</p>
            <p className="text-lg font-medium pt-1">{birthDate}</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-600 text-sm">Peso:</p>
            <p className="text-lg font-medium pt-1">{peso}</p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <Link to={`${id}`} className="bg-transparent text-black px-4 hover:text-primary hover:underline transition duration-300 ease-in-out flex items-center ">
        Ver más
        <ChevronRightIcon className="w-5 h-5 ml-1" />
      </Link>
    </div>
  );
}

export default AnimalCardItems;
