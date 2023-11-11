import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { createAnimal } from "../../services/animal.services";

// eslint-disable-next-line react/prop-types
const ModalNewEmployee = ({ isOpen, onClose, setReloadDataAnimals }) => {
  const [isActive, setIsActive] = useState(false);
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    password: "",
    email: "",
    rol: "",
    identificationCard: "",
  });

  const { identificationNumber, race, weight, birthdate, imagenUrl } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username:username.trim(),
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
      title="Panel registro nuevo empleado"
    >
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre de usuario
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="username"
            onChange={onInputChange}
            placeholder="DondeNoLlegaLaLuz123"
            type="text"
            value={username}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="password"
            onChange={onInputChange}
            placeholder="Contraseña"
            type="passwword"
            value={password}
          />
        </div>

        
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="email"
            onChange={onInputChange}
            placeholder="user@user.com"
            type="number"
            value={email}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rol"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rol
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="rol"
            onChange={onInputChange}
            placeholder="admin"
            type="text"
            value={rol}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="edad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Número de identificación
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="identificationCard"
            onChange={onInputChange}
            placeholder="21313"
            type="text"
            value={identificationCard}
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

export default ModalNewEmployee;
