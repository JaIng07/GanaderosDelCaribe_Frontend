import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  TrashIcon,
  PencilSquareIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import DashboardLayout from "../../../layout/DashboardLayout";
import ModalEditAnimal from "../../../components/modals/ModalEditAnimal";
import ModalDeleteAnimal from "../../../components/modals/ModalDeleteAnimal";
import { getAnimal } from "../../../services/animal.services";
import TimelineStatus from "../../../components/timelineStatus/TimelineStatus";
import { getStatusByID } from "../../../services/animalStatus.services";
import ModalNewStatus from "../../../components/modals/ModalNewStatus";

const AnimalRegistrationWithID = () => {
  let { idAnimal } = useParams();

  const [animal, setAnimal] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [reloadAnimal, setReloadAnimal] = useState(false);
  const [reloadStateAnimal, setReloadStateAnimal] = useState(false);
  const [statusAnimal, setStatusAnimal] = useState([]);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  useEffect(() => {
    const obtainAnimalByID = async () => {
      const response = await getAnimal(idAnimal);
      setAnimal(response.animal);
    };
    obtainAnimalByID();
  }, [idAnimal, reloadAnimal]);

  useEffect(() => {
    const obtainStatuAnimalByID = async () => {
      const { status } = await getStatusByID(idAnimal);
      const sortedStatus = status.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setStatusAnimal(sortedStatus);
    };
    obtainStatuAnimalByID();
  }, [idAnimal, reloadStateAnimal]);

  if (!animal) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-montserrat">
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
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10 font-montserrat">
        <div className="flex items-center">
          <p className="text-base font-normal md:text-xl">
            Panel registro de animal
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div
            className="border rounded p-1 hover:bg-red-500 hover:text-white cursor-pointer"
            onClick={openDeleteModal}
          >
            <TrashIcon className="h-5 w-5" />
          </div>
          <div
            className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
            onClick={openEditModal}
          >
            <PencilSquareIcon className="h-5 w-5" />
          </div>
          <div
            className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
            onClick={() => setIsOpenModalCreate(true)}
          >
            <HeartIcon className="h-5 w-5" />
          </div>
        </div>
        {animal.id && (
          <ModalEditAnimal
            isOpen={isEditModalOpen}
            onClose={closeEditModal}
            animalToEdit={animal}
            setReloadAnimal={setReloadAnimal}
          />
        )}
        {animal.id && (
          <ModalDeleteAnimal
            isOpen={isDeleteModalOpen}
            onClose={closeDeleteModal}
            animalToDelete={animal}
          />
        )}
        {(idAnimal) && (
          <ModalNewStatus
            animalId={idAnimal}
            isOpen={isOpenModalCreate}
            onClose={() => setIsOpenModalCreate(false)}
            setReloadDataStatuses={setReloadStateAnimal}
          />
        )}
      </div>
      <div className="pt-10 flex items-center justify-center font-montserrat">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
          <img
            src={animal.imagenUrl}
            className="w-full h-48 object-fill mb-6 rounded-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Número de Identificación:</p>
              <p className="text-base font-medium">
                {animal.identificationNumber}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Raza:</p>
              <p className="text-base font-medium">{animal.race}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Fecha de nacimiento:</p>
              <p className="text-base font-medium">{animal.birthdate}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Peso:</p>
              <p className="text-base font-medium">{animal.weight} kg</p>
            </div>
          </div>
          <TimelineStatus data={statusAnimal} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnimalRegistrationWithID;
