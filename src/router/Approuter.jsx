import Landingpage from "../pages/Landingpage";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Page404 from "../components/page404/Page404";
import IndexAnimalRegistration from "../pages/dashboard/AnimalRegistration/index";
import IndexEmployeeRegistration from '../pages/dashboard/EmployeeRegistration/index'
import AnimalRegistrationWithID from "../pages/dashboard/AnimalRegistration/AnimalRegistrationWithID";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import ActivityRegister from "../pages/dashboard/ActivityRegister/ActivityRegister";
import ActivityRegisterAdmin from "../pages/dashboard/ActivityRegister/ActivityRegisterAdmin";
import InventoryControl from "../pages/dashboard/InventoryControl/InventoryControl";
import IndexStatusAnimal from "../pages/dashboard/StatusAnimal/index"
import EcommerceAdmin from "../pages/dashboard/EcommerceAdmin/EcommerceAdmin";
import EcommerceClient from "../pages/ecommerce/EcommerceClient";

const roles = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
  ANY: ["admin", "employee"]
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
    errorElement: <Page404 />
  },
  {
    path: "/auth/login",
    element: <PublicRoutes><Login /></PublicRoutes>,
  },
  {
    path: "/dashboard/animal-registration",
    element: <PrivateRoutes rol={roles.ANY}><IndexAnimalRegistration /></PrivateRoutes>,
  },
  {
    path: "/dashboard/status-animal",
    element: <PrivateRoutes rol={roles.ANY}><IndexStatusAnimal /></PrivateRoutes>,
  },
  {
    path: "/dashboard/animal-registration/:idAnimal",
    element: <PrivateRoutes rol={roles.ANY}><AnimalRegistrationWithID /></PrivateRoutes>
  },
  {
    path: "/dashboard/employee-registration",
    element: <PrivateRoutes rol={roles.ADMIN}><IndexEmployeeRegistration /></PrivateRoutes>
  },
  {
    path: "/dashboard/activity-register",
    element:  <PrivateRoutes rol={roles.ANY}><ActivityRegister /></PrivateRoutes>
  },
  {
    path: "/dashboard/activity-register/:idUser",
    element:  <PrivateRoutes rol={roles.ADMIN}><ActivityRegisterAdmin /></PrivateRoutes>
  },
  {
    path: "/dashboard/inventory-control",
    element:  <PrivateRoutes rol={roles.ANY}><InventoryControl /></PrivateRoutes>
  },
  {
    path: "/dashboard/ecommerce-control",
    element:  <PrivateRoutes rol={roles.ADMIN}><EcommerceAdmin /></PrivateRoutes>
  },
  {
    path: "/ecommerce",
    element: <EcommerceClient />
  }
]);

export default Approuter;
