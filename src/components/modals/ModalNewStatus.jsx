import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { createStatus } from "../../services/animalStatus.services";

// eslint-disable-next-line react/prop-types
const ModalNewStatus = ({ isOpen, onClose, setReloadDataStatuses }) => {
  const [isActive, setIsActive] = useState(false);
  const { formState, onInputChange, onResetForm } = useForm({
    status: "",
    description: "",
  });

  const { status, description } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      status: status.trim(),
      description:description.trim(),
    };

    //if (!identificationNumber || !race || !weight || !birthdate) return;

    const res = await createStatus(payload);

    if (res.ok) {
      setReloadDataStatuses(prev=>!prev)
      // cerramos y reseteamos el formulario
      onResetForm();
      setIsActive(false);
      onClose();
    }
  };

 // habilita el boton guardar cuando todos los campos estan llenos
  useEffect(() => {
    if (
      status.trim() &&
      description.trim()
    )
      setIsActive(true);
  }, [status, description]);


  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel registro de estado"
    >
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Estado
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="status"
            onChange={onInputChange}
            placeholder="healthy, sick, critical"
            type="text"
            value={status}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descripción
          </label>
          <textarea 
            className="w-full border rounded-md py-2 px-3" 
            name="description" 
            cols="50" 
            rows="10" 
            onChange={onInputChange}
            placeholder="El animal es sano" 
            value={description}
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

export default ModalNewStatus;
