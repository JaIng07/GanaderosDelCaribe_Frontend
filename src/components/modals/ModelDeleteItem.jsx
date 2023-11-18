import ModalLayout from "../../layout/ModalLayout";
import { deleteItem } from "../../services/item.services";


const ModalDeleteItem = ({ isOpen, onClose, idToDelete, setReloadDataItems}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idToDelete) return;

    const res = await deleteItem(idToDelete);
    if (res.ok) {
      onClose()
      setReloadDataItems(prev=>!prev)
    }
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} title="Confirmación de eliminación">
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-light mb-10">
            ¿Estás seguro que deseas eliminar este objeto?
          </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="submit"
            className={"py-2 px-4 rounded bg-red-500 text-white hover:bg-red-600"}
          >
            Eliminar
          </button>
          <button
            type="button"
            className={"py-2 px-4 rounded bg-primary text-white hover:bg-primary/60"}
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default ModalDeleteItem;
