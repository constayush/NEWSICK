import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getTokenFromResponse } from '../spotify'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
function PrivateRoutes(props) {


const token =  props.token 
  return  token ? <Outlet props={token} /> : <Navigate to='login' />
 
}

export default PrivateRoutes




