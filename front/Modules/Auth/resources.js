import bootstrap from 'src/bootstrap'
import axios from 'axios'
import auth from 'src/authConfig'

var url = axios.create({
  baseURL: process.env.CONFIG.SERVEUR,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
var api = axios.create({
  baseURL: process.env.CONFIG.SERVEUR + '/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
api.interceptors.request.use(function (config) {
  if (auth.isLogged()) {
    if (bootstrap.authorizationType === 'url') {
      config.url = config.url + '?token=' + auth.getToken()
    } else {
      config.headers.common['Authorization'] = 'Bearer ' + auth.getToken()
    }
  }
  return config
}, function (error) {
  console.log(error)
  // Do something with request error
  return Promise.reject(error)
})
export {api, url}
