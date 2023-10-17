import axios from 'axios'
import SnackbarUtils from '../common/snackAlertBar/SnackAlertBar'

export const AxiosInterceptor = () => {
  axios.interceptors.request.use((req) => {
    //console.log('request interceptor', req)
    return req
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