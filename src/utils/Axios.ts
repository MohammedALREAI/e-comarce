import { useToken } from './useToken'
import axios from 'axios'
import { API_URL } from '../Const/env'

const token = useToken()
const axiosIntance = axios.create({

     baseURL: API_URL,
     headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
     },
})


axiosIntance.interceptors.request.use((req) => {
     if (token) {
          req.headers.Authorization = `Bearer ${token}`
     }
     return req
})

// axiosIntance.interceptors.response.use((res) => {
//      return res
// }, (error) => {
//      console.log(error.response)
//      const status = error.response ? error.response.status : 500
//      if (status && status === 500) {
//           localStorage.clear()
//           store.dispatch({ type: authConstants.LOGOUT_SUCCESS })
//      }
//      return Promise.reject(error)
// })

export default axiosIntance
