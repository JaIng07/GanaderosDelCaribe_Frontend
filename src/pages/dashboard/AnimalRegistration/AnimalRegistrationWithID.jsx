import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "../../../layout/DashboardLayout";
import ModalEditAnimal from "../../../components/modals/ModalEditAnimal";
import {getAnimal} from "../../../services/animal.services";

const AnimalRegistrationWithID = () => {
  let { idAnimal } = useParams();

  const [animal, setAnimal] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [reloadAnimal, setReloadAnimal] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true); // Abre el modal de edición
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    const obtainAnimalByID = async () => {
      const response = await getAnimal(idAnimal);
      setAnimal(response.animal);
    }
    obtainAnimalByID();
  }, [idAnimal, reloadAnimal]);

  if (!animal) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">
              No se encontró el animal
            </h2>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
        <div className="flex items-center">
          <p className="text-base font-montserrat font-normal md:text-xl">
            Panel registro de animal
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="border rounded p-1 hover:bg-red-500 hover:text-white cursor-pointer">
            <TrashIcon className="h-5 w-5" />
          </div>
          <div className="border rounded p-1 hover:bg-primary hover:text-black cursor-pointer"
            onClick={openEditModal}
          >
            <PencilSquareIcon className="h-5 w-5" />
          </div>
        </div>
        {animal.id && <ModalEditAnimal isOpen={isEditModalOpen} onClose={closeEditModal} animalToEdit={animal} setReloadAnimal={setReloadAnimal} /> }
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
          <img
            src={animal.imagenUrl}
            className="w-full h-48 object-cover mb-6 rounded-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Número de Identificación:</p>
              <p className="text-lg font-medium">{animal.identificationNumber}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Raza:</p>
              <p className="text-lg font-medium">{animal.race}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Fecha de nacimiento:</p>
              <p className="text-lg font-medium">{animal.birthdate}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Peso:</p>
              <p className="text-lg font-medium">{animal.weight} kg</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnimalRegistrationWithID;
