import AnimalCardItems from "./AnimalCardItems";

const animalCards = ({ arrAnimals = [] }) => {

  if (arrAnimals.length === 0)
    return (
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch">
        <p className="text-center text-black text-xl font-montserrat font-normal">
          No hay animales registrados
        </p>
      </div>
    );

  return (
    <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch">
      {arrAnimals.map((animal) => (
        <AnimalCardItems
          key={animal.id}
          id={animal.identificationNumber}
          raza={animal.race}
          edad={animal.birthdate}
          peso={animal.weight}
          imagenUrl={animal.imagenUrl}
        />
      ))}
    </div>
  );
};

export default animalCards;
