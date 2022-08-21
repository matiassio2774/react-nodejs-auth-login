import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { LOGIN } from '../config/routes/paths'
import './styles/register.css'

const URL = 'http://localhost:4000/api/users'

function Register() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  function handleInputUserChange(e) {
    setUserName(e.target.value)
  }

  function handleInputPassChange(e) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // Validacion en api/register
    const { data } = await axios.post(`${URL}`, {
      'usuario': userName,
      'contraseña': password
    })
    console.log(data)
    if(data !== 1){
      setMessage("The user has been successfully registered!")
      setTimeout(() => {
        navigate(LOGIN)
      }, 1500);
    }else{
      setMessage("User already exists")
    }
  }

  return (
    <div className='register-container'>
      <h1>Register</h1>
      <p>{message}</p>
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
        <button type="submit">Register</button>
      </form>
      <b>or</b>
      <Link to={LOGIN}>I have an account</Link>
    </div>
  )
}

export default Register