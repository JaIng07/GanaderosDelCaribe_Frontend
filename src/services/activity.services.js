import axios from 'axios'
import { baseUrl } from './axios.interceptor'

const BASE_URL_WITH_ACTIVITY = baseUrl + '/activity'


export const getActivities = async (idUser) => {
  return await axios.get(`${BASE_URL_WITH_ACTIVITY}/${idUser}`)
}

export const createActivity = async (data) => {
  return await axios.post(BASE_URL_WITH_ACTIVITY, data)
}

export const changeColumnActivity = async (idActivity, column ) => {
  return await axios.post(BASE_URL_WITH_ACTIVITY + "/update", { idActivity, column })
}


