import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Login from './pages/Login';
import { getTokenFromResponse } from './spotify';
function App() {
  return (<>


   {getTokenFromResponse?<Login/> : <Home/> }
  </>)
}

export default App