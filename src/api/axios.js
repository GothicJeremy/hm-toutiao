// 封装axios
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/',
  headers: {
    Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm73-toutiao')).token
  }
})

export default instance
