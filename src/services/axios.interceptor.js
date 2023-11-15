import axios from 'axios'
import SnackbarUtils from '../common/snackAlertBar/SnackAlertBar'

export const baseUrl = "https://ganaderosbackend.onrender.com/api"

export const AxiosInterceptor = () => {

  const updateHeader = (req) => {
    const token = localStorage.getItem('ganadero-token')
    const newHeaders = {
      'ganadero-token': token,
      'Content-Type': 'application/json'
    }
    req.headers = newHeaders
    return req
  }


  axios.interceptors.request.use((req) => {
    return updateHeader(req)
  })

  axios.interceptors.response.use(
    (res) => {
      //console.log('response interceptor', res)
      SnackbarUtils.success(res.data.message)
      const response = res.data
      response.ok = true;
      return response
    },
    (err) => {
      //console.log('(ERROR) response interceptor', err)
      SnackbarUtils.error(err?.response.data.message)
      const response = err?.response?.data
      response.ok = false;
      return response
    }
  )
}