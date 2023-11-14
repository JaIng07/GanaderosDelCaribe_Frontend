import { useForm } from "../../hooks/useForm";
import ModalLayout from "../../layout/ModalLayout"
import { putUser } from "../../services/user.services";

// eslint-disable-next-line react/prop-types
const ModalEditEmployee = ({ isOpen, onClose, employeeToEdit=[], setReloadDataUsers }) => {

    const { formState, onInputChange, onResetForm } = useForm(employeeToEdit);

    const { username, password, email, rol, identificationCard } = formState;

    const handleSave = async() => {
        const data = { "username": username, "password": password, "email":email, "rol":rol, "identificationCard":identificationCard}    
    
        await putUser(employeeToEdit[0], data)
    
        // cerramos y reseteamos el formulario
        onResetForm();
        onClose();
        setReloadDataUsers(prev=>!prev);
    };

    return (
        <ModalLayout  isOpen={isOpen} onClose={onClose} title="Panel de edición de empleado">
          <form className="text-black">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nombre
              </label>
              <input
                className="w-full border rounded-md py-2 px-3"
                name="username"
                onChange={onInputChange}
                placeholder="ElPepe"
                type="text"
                defaultValue={"Pedro"}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                className="w-full border rounded-md py-2 px-3"
                name="password"
                onChange={onInputChange}
                placeholder="UnaContraseña123"
                type="password"
                defaultValue={password}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                className="w-full border rounded-md py-2 px-3"
                name="email"
                onChange={onInputChange}
                placeholder="micorreo@algo.com"
                type="email"
                defaultValue={email}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="rol"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Rol
              </label>
              <input
                className="w-full border rounded-md py-2 px-3"
                name="rol"
                onChange={onInputChange}
                placeholder="admin o employee"
                type="text"
                defaultValue={rol}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="identificationCard"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Tarjeta de Identificación
              </label>
              <input
                className="w-full border rounded-md py-2 px-3"
                name="identificationCard"
                onChange={onInputChange}
                placeholder="202045590"
                type="number"
                defaultValue={identificationCard}
              />
            </div>
            <button
              type="button"
              className={"py-2 px-4 rounded bg-primary text-white hover:bg-primary/60"}
              onClick={handleSave}
            >
              Editar
            </button>
          </form>
        </ModalLayout>
      );
}

export default ModalEditEmployee