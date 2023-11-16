import { memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

// eslint-disable-next-line react-refresh/only-export-components
const Column = ({ droppableId, column }) => {
  return (
    <Droppable droppableId={droppableId} key={droppableId}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`p-4 w-[300px] min-h-[500px] rounded ${snapshot.isDraggingOver ? 'bg-gray-200' : `bg-gray-100`}`}
          >
            {column?.items?.map((item, index) => {
              return <TaskCard key={item.id} item={item} index={index} />;
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Column);
