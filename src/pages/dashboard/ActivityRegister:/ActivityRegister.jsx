import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../../../components/DragAndDrop/Column";
import DashboardLayout from "../../../layout/DashboardLayout";
import { changeColumnActivity, getActivities } from "../../../services/activity.services";
import { decodedToken, getToken } from "../../../helpers/JWT";

const onDragEnd = async(result, columns, setColumns, setReloadData ) => {

  if (!result.destination) return;

  const { source, destination, draggableId} = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }

  if(destination.droppableId !== source.droppableId){
    await changeColumnActivity(draggableId, destination.droppableId)
    setReloadData(prev=>!prev)
  }


};

const ActivityRegister = () => {
  const [columns, setColumns] = useState([]);
  const [hasActivity, setHasActivity] = useState(0);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      const token = getToken();
      const { id } = decodedToken(token);
      const activities = await getActivities(id);
      const cant = activities.cantActivity;
      setHasActivity(cant);
      if (activities.ok) setColumns(activities.activity);
    };
    getDatas();
  }, [reloadData]);

  if (!hasActivity) {
    return (
      <DashboardLayout>
        <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
          <p className="text-base font-montserrat font-normal md:text-xl">
            Panel de actividades
          </p>
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">
              No se ha encontrado ninguna actividad
            </h2>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10 mb-10">
        <p className="text-base font-montserrat font-normal md:text-xl">
          Panel de actividades
        </p>
      </div>
      <div className="flex justify-center h-full">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns, setReloadData)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="flex flex-col items-center" key={columnId}>
                <h2 className="font-montserrat font-bold ">{column.name}</h2>
                <div className="m-4">
                  <Column
                    droppableId={columnId}
                    key={columnId}
                    index={index}
                    column={column}
                  />
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </DashboardLayout>
  );
};

export default ActivityRegister;
