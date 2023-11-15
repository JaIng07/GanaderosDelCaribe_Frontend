import { Navigate } from "react-router-dom"

const PublicRoutes = ({ children }) => {

  const token = localStorage.getItem("ganadero-token")
  console.log(token)

  return (token)  ? <Navigate to="/dashboard/animal-registration" /> : children

}

export default PublicRoutes