import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "../../../layout/DashboardLayout";
import { getProducts } from "../../../services/ecommerce.services";
import EcommerceGrid from "../../../components/Ecommerce/EcommerceGrid";
import ModalNewProduct from "../../../components/modals/ModalNewProduct";
import ModalDeleteProduct from "../../../components/modals/ModalDeleteProduct";
import ModalEditProduct from "../../../components/modals/ModalEditProduct";

const EcommerceAdmin = () => {
  const [data, setData] = React.useState([]);

  const [idToDelete, setIdToDelete] = React.useState(null);
  const [productSelected, setProductSelected] = React.useState([]);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const [reloadData, setReloadData] = React.useState(false);
  React.useEffect(() => {
    const loadData = async () => {
      const { products } = await getProducts();
      console.log(products);
      setData(products);
    };

    loadData();

    console.log("se volvio a cargar");
  }, [reloadData]);

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
      <EcommerceGrid
        arrProducts={data}
        setIdToDelete={setIdToDelete}
        setProductSelected={setProductSelected}
      />
      <ModalNewProduct
        isOpen={isModalOpen}
        onClose={closeModal}
        setReloadDataUsers={setReloadData}
        setIdToDelete={setIdToDelete}
      />
      {idToDelete && (
        <ModalDeleteProduct
          isOpen={idToDelete}
          onClose={() => setIdToDelete(null)}
          idToDelete={idToDelete}
          setReloadData={setReloadData}
        />
      )}
      {productSelected?.id && (
        <ModalEditProduct
          isOpen={productSelected}
          onClose={() => setProductSelected(null)}
          productToEdit={productSelected}
          setReloadData={setReloadData}
        />
      )}
    </DashboardLayout>
  );
};

export default EcommerceAdmin;
