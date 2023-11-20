import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "../../../layout/DashboardLayout";
import { getProducts } from "../../../services/ecommerce.services";
import EcommerceTable from "../../../components/tables/EcommerceTable";
import ModalNewProduct from "../../../components/modals/ModalNewProduct";

const EcommerceAdmin = () => {

  const [data, setData] = React.useState([])

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [reloadData, setReloadData] = React.useState(false);

  React.useEffect(() => {

    const loadData = async () => {
      const { products } = await getProducts()
      console.log(products)
      setData(products)
    }

    loadData()

  }, [reloadData])


  return (
    <DashboardLayout>
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
        <p className="text-base font-montserrat font-normal md:text-xl">
          Panel administración de la tienda
        </p>
        <div
          className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
          onClick={openModal}
        >
          <PlusIcon className="h-5 w-5" />
        </div>
      </div>
      <EcommerceTable arrProducts={data}/>
      <ModalNewProduct isOpen={isModalOpen} onClose={closeModal} setReloadDataUsers={setReloadData}/>
    </DashboardLayout>
  );
};

export default EcommerceAdmin;
