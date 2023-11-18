import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { createItemIventory } from "../../services/inventory.services";

// eslint-disable-next-line react/prop-types
const ModalNewItem = ({ isOpen, onClose, setReloadData }) => {
  const [isActive, setIsActive] = useState(false);
  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    amount: "",
    type: "",
    description: "",
  });
  const { name, amount, type, description } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: name.trim(),
      amount: amount.trim(),
      type: type.trim(),
      description: description.trim(),
    };

    const res = await createItemIventory(payload);

    if (res.ok) {
      setReloadData(prev=>!prev)
      onResetForm();
      setIsActive(false);
      onClose();
    }
  };

 // habilita el boton guardar cuando todos los campos estan llenos
  useEffect(() => {
    if (
      name.trim() &&
      amount.trim() &&
      type.trim() &&
      description.trim()
    )
      setIsActive(true);
  }, [name, amount, type, description]);


  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel registro nuevo objeto"
    >
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="name"
            onChange={onInputChange}
            placeholder="nombre del objeto"
            type="text"
            value={name}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cantidad
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="amount"
            onChange={onInputChange}
            placeholder="20"
            type="number"
            value={amount}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="type"
            onChange={onInputChange}
            placeholder="suministros | medicamentos | equipos | otros"
            type="text"
            value={type}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            description
          </label>
          <textarea
            className="w-full border rounded-md py-2 px-3"
            name="description"
            onChange={onInputChange}
            cols={50}
            placeholder="descripcion del objeto"
            type="text"
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

export default ModalNewItem;
