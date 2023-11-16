import axios from "axios"
import { baseUrl } from "./axios.interceptor"

const BASE_URL_WITH_AUTH = baseUrl + '/auth'

export const authenticate = async(credentials) => {
  return await axios.post(BASE_URL_WITH_AUTH, credentials)
}