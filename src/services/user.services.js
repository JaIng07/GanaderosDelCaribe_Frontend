import axios from 'axios'
import { baseUrl } from './axios.interceptor'

const BASE_URL_WITH_USER = baseUrl + '/user/'

export const getUsers = async () => {
  return await axios.get(BASE_URL_WITH_USER)
}

export const createUser = async (User) => {
  return await axios.post(BASE_URL_WITH_USER, User)
}

export const putUser = async (id, data) => {
  return await axios.put(BASE_URL_WITH_USER + id, data)
}

export const deleteUser = async (id) => {
  return await axios.delete(BASE_URL_WITH_USER + id)
}