import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Card, Typography, Chip } from "@material-tailwind/react";
import ModalEditItem from "../modals/ModalNewItem"; // reemplazar Employee por item
import ModalDeleteItem from "../modals/ModelDeleteItem";
import { useState } from "react";

const EmployeeTable = ({ arrItems = [], setReloadData }) => {

  const TABLE_HEAD = ["Nombre", "Cantidad", "Tipo", "Descripción", "Acciones"];
  const [itemSelected, setItemSelected] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null);

  const colors = {
    suministros: "green",
    medicamentos: "blue",
    equipos: "red",
    otros: "gray"
  };

  if (arrItems.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-4">
            No se han encontrado items
          </h2>
        </div>
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
            {arrItems.map((item) => {
              return (
                <tr key={item.id} className="even:bg-fondo">
                  <td className="p-4 border-b border-fondo">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.name}
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
                      {item.amount}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={item.type}
                        color={colors[item.type]}
                      />
                    </div>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.description}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-fondo">
                    <div className="flex items-center space-x-2">
                      <button
                        className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
                        onClick={() => setItemSelected(item.id)}
                      >
                        <PencilSquareIcon className="h-5 w-5" />
                      </button>
                      <div
                        className="border rounded p-1 hover:bg-red-500 hover:text-white cursor-pointer"
                        onClick={() => setIdToDelete(item.id)}
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
      {itemSelected?.id && (
        <ModalEditItem
          isOpen={itemSelected}
          onClose={() => setItemSelected(null)}
          itemToEdit={itemSelected}
          setReloadData={setReloadData}
        />
      )}
      {idToDelete && (
        <ModalDeleteItem
          isOpen={idToDelete}
          onClose={() => setIdToDelete(null)}
          idToDelete={idToDelete}
          setReloadData={setReloadData}
        />
      )}
    </>
  );
};

export default EmployeeTable;
