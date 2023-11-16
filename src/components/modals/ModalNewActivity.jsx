import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { createActivity } from "../../services/activity.services";

const ModalNewActivity = ({ isOpen, onClose, idUser, setReloadData }) => {
  const [isActive, setIsActive] = useState(false);
  const { formState, onInputChange, onResetForm } = useForm({
    title: "",
    description: "",
  });

  const { title, description } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: title.trim().toLowerCase(),
      description: description.trim().toLowerCase(),
      column: "todo",
      date: new Date().toISOString().slice(0, 10),
      idUser,
    };

    if (!title || !description) return;

    const res = await createActivity(payload);

    if (res.ok) {
      onResetForm();
      setIsActive(false);
      setReloadData(prevState => !prevState);
      onClose();
    }
  };

  // habilita el boton guardar cuando todos los campos estan llenos
  useEffect(() => {
    if (title.trim() && description.trim()) {
      setIsActive(true)
    }
  }, [title, description]);

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel registro de actividad"
    >
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="raza"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Titulo
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="title"
            onChange={onInputChange}
            placeholder="Titulo de la actividad"
            type="text"
            value={title}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="identificador"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Numero de identificación
          </label>
          <textarea
            className="w-full border rounded-md py-2 px-3"
            name="description"
            onChange={onInputChange}
            placeholder="Descripción de la actividad"
            type="text"
            cols={30}
            rows={3}
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

export default ModalNewActivity;
