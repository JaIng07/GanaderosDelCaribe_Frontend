import AnimalCardItems from './AnimalCardItems'

const animalCards = ({arrAnimals=[]}) => {
  return (
    <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch">
    {
     arrAnimals.map(animal=>(
       <AnimalCardItems
         key={animal.id}
         id={animal.identificationNumber}
         raza={animal.race}
         edad={animal.age}
         peso={animal.weight}
         imagenURL={animal.imagenURL}
       />
     ))
    }
   </div>
  )
}

export default animalCards