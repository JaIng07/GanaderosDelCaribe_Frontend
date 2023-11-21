import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Card, Typography, Chip, Avatar } from "@material-tailwind/react";
import { useState } from "react";
import ModalEditStatus from "../modals/ModalEditStatus";
import ModalDeleteStatus from "../modals/ModelDeleteStatus";

const StatusTable = ({ arrStatuses = [], setReloadDataStatuses }) => {
  const TABLE_HEAD = [
    "Identificación",
    "Raza",
    "Estado",
    "Descripción",
    "Fecha",
    "Acciones",
  ];

  const getColor = {
    healthy: "green",
    sick: "orange",
    critical: "red",
  };

  const [statusSelected, setStatusSelected] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null);

  if (arrStatuses.length === 0)
    return (
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch">
        <p className="text-center text-black text-xl font-montserrat font-normal">
          No hay algún estado registrado
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
            {arrStatuses.map((status) => {
              return (
                <tr key={status.id} className="even:bg-fondo">
                  <td className="p-4 border-b border-fondo">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={status.animal.imagenUrl}
                        alt={status.animal.race}
                        size="sm"
                      />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {status.animal.identificationNumber}
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
                      {status.animal.race}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={status.status}
                        color={getColor[status.status]}
                      />
                    </div>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {status.description}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {status.date}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <div className="flex items-center space-x-2">
                      <button
                        className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
                        onClick={() => setStatusSelected(status)}
                      >
                        <PencilSquareIcon className="h-5 w-5" />
                      </button>
                      <div
                        className="border rounded p-1 hover:bg-red-500 hover:text-white cursor-pointer"
                        onClick={() => setIdToDelete(status.id)}
                      >
                        <TrashIcon className="h-5 w-5" />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      {statusSelected?.id && (
        <ModalEditStatus
          isOpen={statusSelected}
          onClose={() => setStatusSelected(null)}
          statusToEdit={statusSelected}
          setReloadDataStatuses={setReloadDataStatuses}
        />
      )}
      {idToDelete && (
        <ModalDeleteStatus
          isOpen={idToDelete}
          onClose={() => setIdToDelete(null)}
          idToDelete={idToDelete}
          setReloadDataStatuses={setReloadDataStatuses}
        />
      )}
    </>
  );
};

export default StatusTable;
