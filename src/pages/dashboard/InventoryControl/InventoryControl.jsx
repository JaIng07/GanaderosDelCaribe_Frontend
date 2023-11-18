import { useEffect, useState } from "react";
import InventoryTable from "../../../components/inventoryTable/InventoryTable";
import DashboardLayout from "../../../layout/DashboardLayout";
import { PlusIcon } from "@heroicons/react/24/outline";

import ModalNewItem from "../../../components/modals/ModalNewItem"; // reemplazar Employee por item
import { getInventory } from "../../../services/inventory.services";

function InventoryControl() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const [arrItems, setItems] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      let { inventory } = await getInventory();
      console.log(inventory)
      setItems(inventory);
    };
    getAllUsers();
  }, [reloadData]);

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
      <InventoryTable
        arrItems={arrItems}
        setReloadData={setReloadData}
      />
      <ModalNewItem
        isOpen={isModalOpen}
        onClose={closeModal}
        setReloadData={setReloadData}
      />
    </DashboardLayout>
  );
}

export default InventoryControl;
