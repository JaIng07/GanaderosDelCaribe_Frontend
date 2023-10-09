import Landingpage from "../pages/Landingpage";
import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages/auth";
import Page404 from "../components/page404/Page404";
import IndexAnimalRegistration from "../pages/dashboard/AnimalRegistration/index";
import IndexEmployeeRegistration from '../pages/dashboard/EmployeeRegistration/index'
import AnimalRegistrationWithID from "../pages/dashboard/AnimalRegistration/AnimalRegistrationWithID";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
    errorElement: <Page404 />
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/dashboard/animal-registration",
    element: <IndexAnimalRegistration />,
  },
  {
    path: "/dashboard/animal-registration/:idAnimal",
    element: <AnimalRegistrationWithID />,
  },
  {
    path: "/dashboard/employee-registration",
    element: <IndexEmployeeRegistration />,
  }
]);

export default Approuter;
