import { decodedToken, getToken } from "../helpers/JWT"
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children , rol }) => {

  const token = getToken()

  if(!token) return <Navigate to="/auth" />

  const { role } = decodedToken(token)

  if(typeof rol == "object"){
    const isRole = rol.includes(role)
    return isRole ? children : <Navigate to="/auth/login" />
  }

  return (role === rol) ? children :  <Navigate to="/auth/login" />

}

export default PrivateRoutes