import { memo } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

// eslint-disable-next-line react-refresh/only-export-components
function TaskCard({ item, index }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-white rounded-lg shadow-md p-4 pb-2 max-w-sm mx-auto mb-5"
        >
          <div className="flex items-center">
            <img
              className="w-10 h-10 mr-4"
              src="https://static.vecteezy.com/system/resources/previews/015/130/441/original/task-user-icon-png.png"
              alt="Icono tarea"
            />
              <h3 className="font-bold text-sm">{item.title}</h3>
          </div>
          <div className="grid grid-cols-1 divide-y pt-2">
            <p className="text-gray-800 text-sm pb-3">{item.description}</p>
            <p className="text-gray-600 italic text-sm pt-1">{item.date}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
}

TaskCard.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(TaskCard);
