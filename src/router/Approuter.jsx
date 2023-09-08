import Index from "../pages";
import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages/auth";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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
