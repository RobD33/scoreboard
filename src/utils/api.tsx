import axios from 'axios';
import configVars from '../config'

const authorize = (username:String, password: String) => {
  axios.post(`${configVars.servicePath}/authorize`, { username, password})
  .then(response => response.data.token )
  .catch(console.log)
}

export default { authorize }