import ModalLayout from "../../layout/ModalLayout";
import { deleteUser } from "../../services/user.services";


const ModalDeleteEmployee = ({ isOpen, onClose, idToDelete, setReloadDataUsers}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idToDelete) return;

    const res = await deleteUser(idToDelete);
    if (res.ok) {
      onClose()
      setReloadDataUsers(prev=>!prev)
    }
  };


  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} title="Confirmación de eliminación">
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-light mb-10">
            ¿Estás seguro que deseas eliminar este empleado?
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

export default ModalDeleteEmployee;
