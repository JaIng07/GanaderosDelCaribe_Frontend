import {
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { Card, Typography, Chip, Avatar } from "@material-tailwind/react";
import ModalEditEmployee from "../modals/ModalEditEmployee";
import { useState } from "react";
import ModalDeleteEmployee from "../modals/ModelDeleteEmployee";
import { Link } from "react-router-dom";
import { TableCellsIcon } from "@heroicons/react/24/outline";

const EmployeeTable = ({ arrUsers = [], setReloadDataUsers }) => {
  const TABLE_HEAD = ["Nombre", "Cedula", "Rol", "acciones"];
  const [employSelected, setEmploySelected] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null);

  if (arrUsers.length === 0)
    return (
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch">
        <p className="text-center text-black text-xl font-montserrat font-normal">
          No hay empleados registrados
        </p>
      </div>
    );

  return (
    <>
      <Card className="mt-4 h-full w-full border border-fondo">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-blue-gray-100 bg-fondo p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {arrUsers.map((employee) => {
              return (
                <tr key={employee.id} className="even:bg-fondo">
                  <td className="p-4 border-b border-fondo">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={
                          "https://static.thenounproject.com/png/1743561-200.png"
                        }
                        alt={employee.username}
                        size="sm"
                      />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {employee.username}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {employee.email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {employee.identificationCard}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={employee.rol === "admin" ? "Administrador" : "Empleado"}
                        color={`${ employee.rol === "admin" ? "blue" : "green" }`}
                      />
                    </div>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <div className="flex items-center space-x-2">
                      <button
                        className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
                        onClick={() => setEmploySelected(employee)}
                      >
                        <PencilSquareIcon className="h-5 w-5" />
                      </button>
                      <div
                        className="border rounded p-1 hover:bg-red-500 hover:text-white cursor-pointer"
                        onClick={() => setIdToDelete(employee.id)}
                      >
                        <TrashIcon className="h-5 w-5" />
                      </div>
                      <Link to={`/dashboard/activity-register/${employee.id}`}>
                        <div className="border rounded p-1 hover:bg-orange-400 hover:text-white cursor-pointer text-sm flex flex-row">
                          <TableCellsIcon className="h-5 w-7 pr-2" />
                          Asignar Actividad
                        </div>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      {employSelected?.id && (
        <ModalEditEmployee
          isOpen={employSelected}
          onClose={() => setEmploySelected(null)}
          employeeToEdit={employSelected}
          setReloadDataUsers={setReloadDataUsers}
        />
      )}
      {idToDelete && (
        <ModalDeleteEmployee
          isOpen={idToDelete}
          onClose={() => setIdToDelete(null)}
          idToDelete={idToDelete}
          setReloadDataUsers={setReloadDataUsers}
        />
      )}
    </>
  );
};

export default EmployeeTable;
