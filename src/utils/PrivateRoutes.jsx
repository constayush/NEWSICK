import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getTokenFromResponse } from '../spotify'
import { useEffect, useState } from 'react'

function PrivateRoutes() {

  let token = null;

  token = getTokenFromResponse().access_token

  return  token ? <Outlet /> : <Navigate to='login' />
 
}

export default PrivateRoutes




