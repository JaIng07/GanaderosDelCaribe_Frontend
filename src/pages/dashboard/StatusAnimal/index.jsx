import { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { PlusIcon } from "@heroicons/react/24/outline";
import { getStatuses } from "../../../services/animalStatus.services";
import StatusTable from "../../../components/statusTable/StatusTable";
import ModalNewStatus from "../../../components/modals/ModalNewStatus";

function StatusAnimal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reloadDataStatuses, setReloadDataStatuses] = useState(false);
  const [arrStatuses, setArrStatuses] = useState([]);

  useEffect(() => {
    const getAllStatuses = async () => {
      const { status } = await getStatuses();
      //statuses = statuses.sort((a, b) => a.username.localeCompare(b.username));
      //setArrUsers(users);
      setArrStatuses(status)
      console.log(status);
    };
    getAllStatuses();
  }, [reloadDataStatuses]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DashboardLayout>
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
        <p className="text-base font-montserrat font-normal md:text-xl">
          Panel registro de estados
        </p>
        <div
          className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
          onClick={openModal}
        >
          <PlusIcon className="h-5 w-5" />
        </div>
      </div>
      <StatusTable arrStatuses={arrStatuses} setReloadDataStatuses={setReloadDataStatuses} />
      <ModalNewStatus
        isOpen={isModalOpen}
        onClose={closeModal}
        setReloadDataStatuses={setReloadDataStatuses}
      />
    </DashboardLayout>
  );
}

export default StatusAnimal;
