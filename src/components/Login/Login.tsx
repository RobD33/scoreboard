import React, { useCallback } from 'react';
import api from '../../utils/api';
import './Login.css'

const Login = ({} :Props) => {
  const [state, setState] = React.useState({ username: '', password: '', authorized: false});

  const handleUsernameChange = useCallback((e) => {
    const username = e.target.value
    setState(state => {
      return {...state, username}
    })
  }, [])

  const handlePasswordChange = useCallback((e) => {
    const password = e.target.value
    setState(state => {
      return {...state, password}
    })
  }, [])

  const submit = () => {
    api.authorize(state.username, state.password)
      .then(console.log)
  }

  return(
    <div className='Login'>
      <div className='username'>
        <input
          className='usernameInput'
          type="text"
          placeholder="Email"
          value={state.username}
          onChange={(e) => handleUsernameChange(e)}
        />
      </div>
      <div className="password">
        <input
          className='passwordInput'
          placeholder='Password'
          type="password"
          value={state.password}
          onChange={(e) => handlePasswordChange(e)}
        />
      </div>
      <div className='buttons'>
        <button
          className='loginButton'
          onClick={submit}
        >
          Log In
        </button>
      </div>
    </div>
  )
}

interface Props {}

export default Login