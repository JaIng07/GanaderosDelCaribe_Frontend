import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { putStatus } from "../../services/animalStatus.services";

const ModalEditStatus = ({
  isOpen,
  onClose,
  statusToEdit = {},
  setReloadDataStatuses,
}) => {
  const { formState, onInputChange, onResetForm } = useForm(statusToEdit);

  const { status, description } = formState;

  const handleSave = async () => {
    const data = {
      status: status.trim(),
      description: description.trim(),
    };

    console.log(statusToEdit);

    const res = await putStatus(statusToEdit.id, data);

    if (res.ok) {
      // cerramos y reseteamos el formulario
      onResetForm();
      onClose();
      setReloadDataStatuses((prev) => !prev);
    }
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Panel de edición de estado"
    >
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
        type="button"
        className={
          "py-2 px-4 rounded bg-primary text-white hover:bg-primary/60"
        }
        onClick={handleSave}
      >
        Editar
      </button>
    </ModalLayout>
  );
};

export default ModalEditStatus;
