import Index from "../pages";
import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages/auth";
import Page404 from "../components/page404/Page404";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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
]);

export default Approuter;
