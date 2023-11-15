import Landingpage from "../pages/Landingpage";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Page404 from "../components/page404/Page404";
import IndexAnimalRegistration from "../pages/dashboard/AnimalRegistration/index";
import IndexEmployeeRegistration from '../pages/dashboard/EmployeeRegistration/index'
import AnimalRegistrationWithID from "../pages/dashboard/AnimalRegistration/AnimalRegistrationWithID";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

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
    path: "/dashboard/animal-registration/:idAnimal",
    element: <PrivateRoutes rol={roles.ANY}><AnimalRegistrationWithID /></PrivateRoutes>
  },
  {
    path: "/dashboard/employee-registration",
    element: <PrivateRoutes rol={roles.ADMIN}><IndexEmployeeRegistration /></PrivateRoutes>
  }
]);

export default Approuter;
