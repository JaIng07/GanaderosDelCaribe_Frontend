import ModalLayout from "../../layout/ModalLayout";
import { deletetatus } from "../../services/animalStatus.services";


const ModalDeleteStatus = ({ isOpen, onClose, idToDelete, setReloadDataStatuses}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idToDelete) return;

    const res = await deletetatus(idToDelete);
    if (res.ok) {
      onClose()
      setReloadDataStatuses(prev=>!prev)
    }
  };


  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} title="Confirmación de eliminación">
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-light mb-10">
            ¿Estás seguro que deseas eliminar este estado?
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

export default ModalDeleteStatus;
