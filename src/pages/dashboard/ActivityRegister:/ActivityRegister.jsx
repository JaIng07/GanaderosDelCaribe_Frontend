import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../../../components/DragAndDrop/Column";
import DashboardLayout from "../../../layout/DashboardLayout";
import { status } from "../../../data/mock";


const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;


  console.log(result)
  console.log(columns)
  const { source, destination } = result;

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
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
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
        items: copiedItems
      }
    });
  }
};

const ActivityRegister = () => {
  const [columns, setColumns] = useState(status);
  return (
    <DashboardLayout >
      <div className="flex justify-center h-full">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        status={status}
        >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
            className="flex flex-col items-center"
            key={columnId}
            >
              <h2 className="font-montserrat font-bold " >{column.name}</h2>
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