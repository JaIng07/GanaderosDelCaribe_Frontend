// eslint-disable-next-line react/prop-types
function AnimalCardItems({ id, raza, edad, peso, imagenURL }) {
  const image = imagenURL
    ? imagenURL
    : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 font-montserrat font-normal">
      <h2 className="text-xl mb-4">Información del Animal</h2>
      <div className="grid justify-items-center">
        <img
          src={image}
          alt="Foto del animal"
          className="rounded-md mb-12 center"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 text-sm">Número de Identificación:</p>
            <p className="text-lg font-medium pt-1">{id}</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 text-sm">Raza:</p>
            <p className="text-lg font-medium pt-1">{raza}</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 text-sm">Edad:</p>
            <p className="text-lg font-medium pt-1">{edad}</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 text-sm">Peso:</p>
            <p className="text-lg font-medium pt-1">{peso}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalCardItems;