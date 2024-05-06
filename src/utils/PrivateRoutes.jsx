import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getTokenFromResponse } from '../spotify'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Home from '../pages/Home'
function PrivateRoutes(props) {


const token =  props.token 

console.log(token)
  return  token ? <Outlet props={token} /> : <Navigate to='login' />
 
}

export default PrivateRoutes




