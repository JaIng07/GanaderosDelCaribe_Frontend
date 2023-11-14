import { useEffect, useState } from "react";
import MembersTable from "../../../components/userList/UserList";
import DashboardLayout from "../../../layout/DashboardLayout";
import { PlusIcon } from "@heroicons/react/24/outline";
import ModalNewEmployee from "../../../components/modals/ModalNewEmployee";
import { getUsers } from "../../../services/user.services";

function EmployeeRegistration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reloadDataUsers, setReloadDataUsers] = useState(false);
  const [arrUsers, setArrUsers] = useState([]);

  useEffect(() => {
    console.log("se ha llamado a la funcion de useEffect")
    const getAllUsers = async () => {
      let { users } = await getUsers()
      users = users.sort((a,b)=>a.username.localeCompare(b.username))
      setArrUsers(users)
      console.log("se ha guardado los datos en el estado")
      console.log("los datos son: ", users)
    }
    getAllUsers()
    console.log("se ha terminado el llamado a la funcion de useEffect")
  },[reloadDataUsers])

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
       <ModalNewEmployee isOpen={isModalOpen} onClose={closeModal} setReloadDataUsers={setReloadDataUsers} />
       <MembersTable arrUsers={arrUsers} setReloadDataUsers={setReloadDataUsers}/>
    </DashboardLayout>
  );
}

export default EmployeeRegistration;
