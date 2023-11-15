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
          className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto mb-5"
        >
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://cdn.icon-icons.com/icons2/1830/PNG/512/checklist-115859_115810.png"
              alt="Icono tarea"
            />
            <div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
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
