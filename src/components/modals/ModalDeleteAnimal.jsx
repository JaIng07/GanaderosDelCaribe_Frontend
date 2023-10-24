import React from "react";
import ModalLayout from "../../layout/ModalLayout";
import { useForm } from "../../hooks/useForm";
import { deleteAnimal } from "../../services/animal.services";
import { useNavigate } from "react-router-dom";


const ModalDeleteAnimal = ({ isOpen, onClose, animalToDelete = {}}) => {
  const { formState } = useForm(animalToDelete);
  const { id } = formState;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      return;
    }

    const res = await deleteAnimal(id);
    if (res.ok) {
      navigate("/dashboard/animal-registration"), 
      onClose();
    }
  };


  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} title="Confirmación de eliminación">
      <form className="text-black" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-light mb-10">
            ¿Estás seguro que deseas eliminar este animal?
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

export default ModalDeleteAnimal;
