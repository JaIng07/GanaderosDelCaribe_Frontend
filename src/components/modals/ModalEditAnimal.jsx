import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { putAnimal } from "../../services/animal.services";

// eslint-disable-next-line react/prop-types
const ModalEditAnimal = ({ isOpen, onClose, animalToEdit = {}, setReloadAnimal}) => {

  const { formState, onInputChange, onResetForm } = useForm(animalToEdit);

  const {id, identificationNumber, race, weight, birthdate, imagenUrl } = formState;


  const handleSave = async() => {
    const data = { "identificationNumber": identificationNumber, "race": race, "weight":weight, "birthdate":birthdate, "imagenUrl":imagenUrl}    

    await putAnimal(id, data)

    // cerramos y reseteamos el formulario
    onResetForm();
    onClose();
    setReloadAnimal(prev=>!prev);
  };


  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} title="Editar animal">
      <form className="text-black">
        <div className="mb-4">
          <label
            htmlFor="raza"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Raza
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="race"
            onChange={onInputChange}
            placeholder="Beefmaster"
            type="text"
            defaultValue={race}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="identificador"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Numero de identificación
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="identificationNumber"
            onChange={onInputChange}
            placeholder="131861"
            type="number"
            defaultValue={identificationNumber}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="peso"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Peso
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="weight"
            onChange={onInputChange}
            placeholder="17"
            type="number"
            defaultValue={weight}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imagenUrl"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            URL de la Imagen (opcional)
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="imagenUrl"
            onChange={onInputChange}
            placeholder="https//wwww.example.com/imagen.jpg"
            type="text"
            defaultValue={imagenUrl}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="año de nacimiento"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Año de nacimiento
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="birthdate"
            onChange={onInputChange}
            placeholder="AAAA-MM-DD"
            type="text"
            defaultValue={birthdate}
          />
        </div>
        <button
          type="button"
          className={"py-2 px-4 rounded bg-primary text-white hover:bg-primary/6"}
          onClick={handleSave}
        >
          Editar
        </button>
      </form>
    </ModalLayout>
  );
};

export default ModalEditAnimal;
