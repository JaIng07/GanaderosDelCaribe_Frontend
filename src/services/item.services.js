import axios from 'axios'
import { baseUrl } from './axios.interceptor'

const BASE_URL_WITH_USER = baseUrl + '/item/'

export const getItems = async () => {
  return await axios.get(BASE_URL_WITH_USER)
}

export const createItem = async (Item) => {
  return await axios.post(BASE_URL_WITH_USER, Item)
}

export const putItem = async (id, data) => {
  return await axios.put(BASE_URL_WITH_USER + id, data)
}

export const deleteItem = async (id) => {
  return await axios.delete(BASE_URL_WITH_USER + id)
}