import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { createItem } from "../../services/item.services";

// eslint-disable-next-line react/prop-types
const ModalNewItem = ({ isOpen, onClose, setReloadDataItems }) => {
  const [isActive, setIsActive] = useState(false);
  const { formState, onInputChange, onResetForm } = useForm({
    nombre: "",
    cantidad: "",
    tipo: "",
    descripcion: "",
  });
  const { nombre, cantidad, tipo, descripcion } = formState;
  const { username, password, email, rol, identificationCard } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nombre:nombre.trim(),
      cantidad:cantidad.trim(),
      tipo:tipo.trim(),
      descripcion:descripcion.trim(),
    };

    //if (!identificationNumber || !race || !weight || !birthdate) return;

    const res = await createItem(payload);

    if (res.ok) {
      setReloadDataItems(prev=>!prev)
      // cerramos y reseteamos el formulario
      onResetForm();
      setIsActive(false);
      onClose();
    }
  };

 // habilita el boton guardar cuando todos los campos estan llenos
  useEffect(() => {
    if (
      nombre.trim() &&
      cantidad.trim() &&
      tipo.trim() &&
      descripcion.trim()
    )
      setIsActive(true);
  }, [nombre, cantidad, tipo, descripcion]);


  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel registro nuevo objeto"
    >
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
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
            value={nombre}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cantidad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cantidad
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="cantidad"
            onChange={onInputChange}
            placeholder="20"
            type="number"
            value={cantidad}
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
            name="tipo"
            onChange={onInputChange}
            placeholder="suministro"
            type="text"
            value={tipo}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descripcion
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="descripcion"
            onChange={onInputChange}
            placeholder="martillo roto"
            type="text"
            value={descripcion}
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
