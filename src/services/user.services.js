import axios from 'axios'

const BASE_URL_WITH_USER = import.meta.env.VITE_BASE_URL_API + '/user/'

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