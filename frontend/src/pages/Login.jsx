import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { REGISTER } from '../config/routes/paths';
import { useAuthContext } from '../context/authContext'
import axios from 'axios'
import './styles/login.css'

const URL = 'http://localhost:4000/api/users'

function Login() {
  const {login} = useAuthContext()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleInputUserChange(e) {
    setUserName(e.target.value)
  }

  function handleInputPassChange(e) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { data } = await axios.post(`${URL}/user`, {
      'usuario': userName,
      'contraseña': password
    })
    if(!data.length){
      console.log(data)
      setMessage("User doesn't exists")
    }else{
      console.log(data)
      setMessage("Correct")
      login()
    }
  }

  return (
    <div className='login-container'>
      <h1>Sign In</h1>
      <p className='error'>{message}</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={userName} 
          onChange={handleInputUserChange}
          placeholder="Username"
        />
        <input 
          type="password"
          value={password}
          onChange={handleInputPassChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <b>or</b>
      <Link to={REGISTER}>Register</Link>
    </div>
  )
}

export default Login