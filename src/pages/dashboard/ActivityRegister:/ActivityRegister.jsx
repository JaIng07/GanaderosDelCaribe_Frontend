import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../../../components/DragAndDrop/Column";
import DashboardLayout from "../../../layout/DashboardLayout";
import { getActivities } from "../../../services/activity.services";
import { decodedToken, getToken } from "../../../helpers/JWT";
import { onDragEnd } from "../../../helpers/dragAndDrop";


const ActivityRegister = ({ idUser, children, reloadDataAdmin }) => {
  const [columns, setColumns] = useState([]);
  const [hasActivity, setHasActivity] = useState(0);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      let activityUserId = idUser
      if(!activityUserId){
        const token = getToken();
        const { id } = decodedToken(token);
        activityUserId = id
      }
      const activities = await getActivities(activityUserId);
      const cant = activities.cantActivity;
      setHasActivity(cant);
      if (activities.ok) setColumns(activities.activity);
    };
    getDatas();
  }, [reloadData, reloadDataAdmin, idUser]);

  if (!hasActivity) {
    return (
      <DashboardLayout>
        <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
          <p className="text-base font-montserrat font-normal md:text-xl">
            Panel de actividades
          </p>
          {children}
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
        {children}
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
