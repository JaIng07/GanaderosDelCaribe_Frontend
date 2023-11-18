import { useEffect, useState } from "react";
import InventoryTable from "../../../components/inventoryTable/InventoryTable";
import DashboardLayout from "../../../layout/DashboardLayout";
import { PlusIcon } from "@heroicons/react/24/outline";
import ModalNewItem from "../../../components/modals/ModalNewEmployee";
                                                 // reemplazar Employee por item
import { getUsers } from "../../../services/user.services";
                                                //reemplazar user.services por item.services

function EmployeeRegistration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reloadDataUsers, setReloadDataUsers] = useState(false);
  const [arrUsers, setArrUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      let { users } = await getUsers();
      users = users.sort((a, b) => a.username.localeCompare(b.username));
      setArrUsers(users);
    };  
    getAllUsers();
  }, [reloadDataUsers]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DashboardLayout>
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
        <p className="text-base font-montserrat font-normal md:text-xl">
          Panel de control de inventario
        </p>
        <div
          className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
          onClick={openModal}
        >
          <PlusIcon className="h-5 w-5" />
        </div>
      </div>
      <InventoryTable arrUsers={arrUsers} setReloadDataUsers={setReloadDataUsers} />
      <ModalNewItem
        isOpen={isModalOpen}
        onClose={closeModal}
        setReloadDataUsers={setReloadDataUsers}
      />
    </DashboardLayout>
  );
}

export default EmployeeRegistration;
