import axios from "axios";
import { baseUrl } from "./axios.interceptor";

const BASE_URL_WITH_STATUS = baseUrl + "/statusAnimal/";

export const getStatuses = async () => {
  return await axios.get(BASE_URL_WITH_STATUS);
};

export const getStatusByID = async (id) => {
  return await axios.get(BASE_URL_WITH_STATUS + id);
}

export const createStatus = async (Status) => {
  return await axios.post(BASE_URL_WITH_STATUS, Status);
};

export const putStatus = async (id, data) => {
  return await axios.put(BASE_URL_WITH_STATUS + id, data);
};

export const deletetatus = async (id) => {
  return await axios.delete(BASE_URL_WITH_STATUS + id);
};
