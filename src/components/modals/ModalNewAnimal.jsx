import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { createAnimal } from "../../services/animal.services";

// eslint-disable-next-line react/prop-types
const ModalNewAnimal = ({ isOpen, onClose, setReloadDataAnimals }) => {
  const [isActive, setIsActive] = useState(false);
  const { formState, onInputChange, onResetForm } = useForm({
    identificationNumber: "",
    race: "",
    weight: "",
    birthdate: "",
    imagenUrl: "",
  });

  const { identificationNumber, race, weight, birthdate, imagenUrl } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: new Date().getMilliseconds(),
      identificationNumber: identificationNumber.trim(),
      race: race.trim(),
      weight: weight.trim(),
      birthdate: birthdate.trim(),
      imagenUrl: imagenUrl.trim(),
      animalType: "ganado",
    };

    if (!identificationNumber || !race || !weight || !birthdate) return;

    const res = await createAnimal(payload);

    if (res.ok) {
      setReloadDataAnimals(prev=>!prev)
      // cerramos y reseteamos el formulario
      onResetForm();
      setIsActive(false);
      onClose();
    }
  };

  // habilita el boton guardar cuando todos los campos estan llenos
  useEffect(() => {
    if (
      identificationNumber.trim() &&
      race.trim() &&
      weight.trim() &&
      birthdate.trim()
    )
      setIsActive(true);
  }, [identificationNumber, race, weight, birthdate]);

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel registro nuevo animal"
    >
      <form className="text-black" onSubmit={handleSubmit}>
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
            value={race}
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
            value={identificationNumber}
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
            value={weight}
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
            value={imagenUrl}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="edad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Edad
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="birthdate"
            onChange={onInputChange}
            placeholder="AAAA-MM-DD"
            type="text"
            value={birthdate}
          />
        </div>
        <button
          className={`py-2 px-4 rounded ${
            isActive
              ? "bg-primary text-white hover:bg-primary/60"
              : "bg-gray-400 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isActive}
          type="submit"
        >
          Guardar
        </button>
      </form>
    </ModalLayout>
  );
};

export default ModalNewAnimal;
