import { useNavigate } from "react-router-dom";
import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import UserOne from "../../assets/user-01.png";
import useDrawer from "../../hooks/useDrawer";
import DropdownUserOptions from "./DropdownUserOptions";
import { userOptions } from "../../data/userOptions";
import { removeToken } from "../../helpers/JWT";

const DropdownUser = () => {
  const navigate = useNavigate();

  const { drawerOpen, setDrawerOpen, trigger, drawer } = useDrawer();

  const signOut = () => {
    navigate("/auth/login");
    removeToken()
  };

  return (
    <div className="relative">
      <div
        ref={trigger}
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="flex items-center gap-4"
      >
        <span className="text-right lg:block font-montserrat font-normal">
          <span className="block text-sm text-black">Hassan Barranco</span>
          <span className="block text-xs">Finca dontimaton</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <ChevronDownIcon
          className={`hidden fill-current sm:block ${
            drawerOpen && "rotate-180"
          }`}
          width={20}
          height={20}
        />
      </div>

      <div
        ref={drawer}
        onFocus={() => setDrawerOpen(true)}
        onBlur={() => setDrawerOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default ${
          drawerOpen === true ? "block" : "hidden"
        }`}
      >
        <DropdownUserOptions userOptions={userOptions} />
        <button
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          onClick={signOut}
        >
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <p className="font-montserrat font-normal">Cerrar Sesión</p>
        </button>
      </div>
    </div>
  );
};

export default DropdownUser;
