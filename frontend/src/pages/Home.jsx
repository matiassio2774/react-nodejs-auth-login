import React from 'react'
import { LOGIN } from '../config/routes/paths'
import {Link} from 'react-router-dom'
import './styles/home.css'

function Home() {
  return (
    <div className='home-container'>
      <h1>Welcome</h1>
      <Link to={LOGIN}>Sign In</Link>
    </div>
  )
}

export default Home