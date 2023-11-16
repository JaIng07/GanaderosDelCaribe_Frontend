import { useState } from "react";
import { useParams } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";
import ActivityRegister from "./ActivityRegister";
import ModalNewActivity from "../../../components/modals/ModalNewActivity";

const ActivityRegisterAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  let { idUser } = useParams();

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
      <ActivityRegister idUser={idUser} reloadDataAdmin={reloadData}>
        <div
          className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
          onClick={openModal}
        >
          <PlusIcon className="h-5 w-5" />
        </div>
        <ModalNewActivity isOpen={isModalOpen} onClose={closeModal} idUser={idUser} setReloadData={setReloadData}/>
      </ActivityRegister>
  )
}

export default ActivityRegisterAdmin