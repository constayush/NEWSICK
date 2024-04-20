import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getTokenFromResponse } from '../spotify'
function PrivateRoutes() {

    
  const token = getTokenFromResponse().access_token
  return (

token ? <Outlet/> : <Navigate to='login' />

  )
}

export default PrivateRoutes