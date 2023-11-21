import ModalLayout from "../../layout/ModalLayout";
import { deleteProduct } from "../../services/ecommerce.services";

const ModalDeleteProduct = ({ isOpen, onClose, idToDelete, setReloadData}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idToDelete) return;

    const res = await deleteProduct(idToDelete);
    if (res.ok) {
      onClose()
      setReloadData(prev=>!prev)
    }
  };


  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} title="Confirmación de eliminación">
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-light mb-10">
            ¿Estás seguro que deseas eliminar este producto?
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

export default ModalDeleteProduct;
