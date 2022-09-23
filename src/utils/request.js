import axios from 'axios'
// import qs from 'qs'
import {Message} from 'element-ui'
// import store from '../store'
// import cookies from '@/utils/auth'



// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000 // 请求超时时间
})

// request拦截器   请求之前
service.interceptors.request.use(config => {
  const headers = config.headers["Content-Type"]
  
//   if (headers == undefined || headers.indexOf("application/x-www-form-urlencoded") != -1) {
//     config.data = qs.stringify(config.data);
    
//   }
 

  

  return config
}, error => {
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data;

    if(res.code == 200){

      return response.data
    }else {
      
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
      
    }



  /*  if (res && res.code == 0) {
      console.log('超时')
      console.log(res)
      store.dispatch('FedLogOut').then(() => {
        Message({
          message: '登陆超时，请重新登陆！',
          type: 'error',
          duration: 5 * 1000
        })
        setTimeout(() => {
          //  location.reload()
        }, 2000)
      })
    } else if (res && res.code == 200) {
      return response.data
    } else {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      }
    }*/
  },
  error => {
    const originalRequest = error.config;
  
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
