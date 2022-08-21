import React from 'react'
import { LOGOUT } from '../config/routes/paths'
import {Link} from 'react-router-dom'
import './styles/private.css'

function Private() {
  return (
    <div className='private-container'>
      <h1>Private Session</h1>
      <Link to={LOGOUT}>Log Out</Link>
    </div>
  )
}

export default Private