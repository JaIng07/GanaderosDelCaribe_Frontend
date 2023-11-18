import axios from 'axios'
import { baseUrl } from './axios.interceptor'

const BASE_URL_WITH_USER = baseUrl + '/inventory/'

export const getInventory = async () => {
  return await axios.get(BASE_URL_WITH_USER)
}

export const getItem = async (idItem) => {
  return await axios.get(BASE_URL_WITH_USER + idItem)
}

export const createItemIventory = async (dataItem) => {
  return await axios.post(BASE_URL_WITH_USER, dataItem)
}

export const putItemInventory = async (idItem, dataItem) => {
  return await axios.put(BASE_URL_WITH_USER + idItem, dataItem)
}

export const deleteItemInventory = async (idItem) => {
  return await axios.delete(BASE_URL_WITH_USER + idItem)
}