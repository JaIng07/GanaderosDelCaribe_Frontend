import { useEffect, useState } from "react";
import AnimalCards from "../../../components/animalCard/AnimalCards";
import DashboardLayout from "../../../layout/DashboardLayout";
import { PlusIcon } from "@heroicons/react/24/outline";
import ModalNewAnimal from "../../../components/modals/ModalNewAnimal";
import { getAnimals } from "../../../services/animal.services";

function EmployeeRegistration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reloadDataAnimals, setReloadDataAnimals] = useState(false);
  const [arrAnimals, setArrAnimals] = useState([]);

  useEffect(() => {
    const getAllAnimals = async () => {
      const animals = await getAnimals()
      setArrAnimals(animals.animals)
    }
    getAllAnimals()
  },[reloadDataAnimals])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <DashboardLayout>
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
        <p className="text-base font-montserrat font-normal md:text-xl">
          Panel registro de empleados
        </p>
        <div  
          className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
          onClick={openModal}
        >
          <PlusIcon className="h-5 w-5" />
        </div>
      </div>
      <ModalNewAnimal isOpen={isModalOpen} onClose={closeModal} setReloadDataAnimals={setReloadDataAnimals} />
      {/* <AnimalCards arrAnimals={arrAnimals} /> */}
    </DashboardLayout>
  );
}

export default EmployeeRegistration;
