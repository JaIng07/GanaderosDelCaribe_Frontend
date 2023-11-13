import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "../../../layout/DashboardLayout";
import { getUsers } from "../../../services/user.services";
//import ModalEditAnimal from "../../../components/modals/ModalEditAnimal";
//import ModalDeleteAnimal from "../../../components/modals/ModalDeleteAnimal";
//import {getAnimal} from "../../../services/animal.services";

const EmployeeRegistrationWithID = () => {
  let { idEmployee } = useParams();

  const [employee, setEmployee] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [reloadEmployee, setReloadEmployee] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    const obtainEmployeeByID = async () => {
      const response = await getUsers(idEmployee);
      setEmployee(response.employee);
    };
    obtainEmployeeByID();
  }, [idEmployee, reloadEmployee]);

  if (!employee) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">
              No se encontró al empleado
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
            Panel registro de empleado
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
            className="border rounded p-1 hover:bg-primary hover:text-black cursor-pointer"
            onClick={openEditModal}
          >
            <PencilSquareIcon className="h-5 w-5" />
          </div>
        </div>
        {employee.id && <ModalEditEmployee isOpen={isEditModalOpen} onClose={closeEditModal} employeeToEdit={employee} setReloadEmployee={setReloadEmployee}/>}
        {employee.id && <ModalDeleteEmployee isOpen={isDeleteModalOpen} onClose={closeDeleteModal} employeeToDelete={employee}/> }
      </div>
    </DashboardLayout>
  );
};

export default EmployeeRegistrationWithID