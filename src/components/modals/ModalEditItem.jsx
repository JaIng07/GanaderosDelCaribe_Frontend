import { useForm } from "../../hooks/useForm";
import ModalLayout from "../../layout/ModalLayout";
import { putItem } from "../../services/item.services";

const ModalEditItem = ({
  isOpen,
  onClose,
  itemToEdit = {},
  setReloadDataItems,
}) => {

  const { formState, onInputChange, onResetForm } = useForm(itemToEdit);

  const { nombre, cantidad, tipo, descripcion } = formState;

  const handleSave = async () => {
    const data = {
      nombre: nombre,
      cantidad: cantidad,
      tipo: tipo,
      descripcion: descripcion,
    };

    await putItem(itemToEdit.id, data);

    // cerramos y reseteamos el formulario
    onResetForm();
    onClose();
    setReloadDataItems((prev) => !prev);
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel de edición de objeto"
    >
      <form className="text-black">
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
            defaultValue={nombre}
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
            defaultValue={cantidad}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tipo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            name="tipo"
            onChange={onInputChange}
            placeholder="suministro"
            type="text"
            defaultValue={tipo}
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
            placeholder="martillo rojo dañao"
            type="text"
            defaultValue={descripcion}
          />
        </div>
        <button
          type="button"
          className={
            "py-2 px-4 rounded bg-primary text-white hover:bg-primary/60"
          }
          onClick={handleSave}
        >
          Editar
        </button>
      </form>
    </ModalLayout>
  );
};

export default ModalEditItem;
