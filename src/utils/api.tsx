import axios from 'axios';
import configVars from '../config'

const authorize = (username:String, password: String) => {
  return axios.post(`${configVars.servicePath}/authorize`, { username, password})
    .then(response => response.data.token )
    .catch(console.log)
}

const api = { authorize }

export default api;