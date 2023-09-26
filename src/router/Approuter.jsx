import Landingpage from "../pages/Landingpage";
import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages/auth";
import Page404 from "../components/page404/Page404";
import AnimalRegistration from "../pages/dashboard/AnimalRegistration";

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
    element: <AnimalRegistration />,
  },
]);

export default Approuter;
