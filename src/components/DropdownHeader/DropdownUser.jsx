import { Link, useNavigate } from "react-router-dom"
import {
  UserIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";

import UserOne from "../../assets/user-01.png"
import useDrawer from "../../hooks/useDrawer";

const DropdownUser = () => {

  const navigate = useNavigate();

  const { drawerOpen, setDrawerOpen, trigger, drawer } = useDrawer();

  const signOut = () => {
    console.log("signOut")
    navigate("/auth/login")
  }

  return (
    <div className="relative">
      <div
        ref={trigger}
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="flex items-center gap-4"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black">
            Hassan Barranco
          </span>
          <span className="block text-xs">Finca dontimaton</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <svg
          className={`hidden fill-current sm:block ${
            drawerOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </div>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={drawer}
        onFocus={() => setDrawerOpen(true)}
        onBlur={() => setDrawerOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default ${
          drawerOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 ">
          <li>
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-3.5 text-sm pt-3 font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <UserIcon className="h-6 w-6"/>
              Mi Perfil
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/contacts"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <UserGroupIcon className="h-6 w-6"/>
              Mis Contactos
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base pb-5"
            >
              <Cog6ToothIcon className="h-6 w-6"/>
              Configuración
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base" onClick={signOut}>
          <ArrowLeftOnRectangleIcon className="h-6 w-6"/>
          Cerrar Sesión
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
