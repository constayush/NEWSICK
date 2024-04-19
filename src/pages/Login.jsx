import React from 'react'
import {accessUrl , getTokenFromResponse} from '../spotify'
function Login() {
  return (
    <div><a href={accessUrl}>Login</a></div>
  )
}

export default Login