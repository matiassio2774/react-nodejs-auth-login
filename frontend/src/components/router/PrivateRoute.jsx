import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {useAuthContext} from '../../context/authContext'
import {LOGIN} from '../../config/routes/paths'

function PrivateRoute() {
  const {isAuthenticated} = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />
  }

  return (
      <Outlet />
  )
}

export default PrivateRoute