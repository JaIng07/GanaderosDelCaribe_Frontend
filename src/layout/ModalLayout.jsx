import {
XMarkIcon
} from "@heroicons/react/24/outline";


// eslint-disable-next-line react/prop-types
const ModalLayout = ({ isOpen, onClose, children, title = 'Hola!' }) => {
  if (!isOpen) return null;

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-2 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t-lg border-blueGray-200">
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <XMarkIcon className="h-6 w-6 bg-transparent text-black text-2xl block outline-none focus:outline-none" />
            </button>
          </div>
          <div className="relative p-6 flex-auto">{children}</div>
        </div>
      </div>
    </div>
    <div className="fixed inset-0 bg-black opacity-50"></div>
    </>
  );
};

export default ModalLayout;
