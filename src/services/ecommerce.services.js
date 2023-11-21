import axios from "axios"
import { baseUrl } from "./axios.interceptor"

const BASE_URL_WITH_AUTH = baseUrl + '/ecommerce'

export const getProducts = async() => {
  return await axios.get(BASE_URL_WITH_AUTH)
}

export const getProductById = async(idProduct) => {
  return await axios.get(`${BASE_URL_WITH_AUTH}/${idProduct}`)
}

export const createProduct = async(product) => {
  return await axios.post(BASE_URL_WITH_AUTH, product)
}

export const updateProduct = async(idProduct, product) => {
  return await axios.put(`${BASE_URL_WITH_AUTH}/${idProduct}`, product)
}

export const deleteProduct = async(idProduct) => {
  return await axios.delete(`${BASE_URL_WITH_AUTH}/${idProduct}`)
}