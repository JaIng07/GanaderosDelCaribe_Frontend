import { Navigate } from "react-router-dom";
import { getToken } from "../helpers/JWT";

const PublicRoutes = ({ children }) =>
  getToken() ? <Navigate to="/dashboard/animal-registration" /> : children;

export default PublicRoutes;
