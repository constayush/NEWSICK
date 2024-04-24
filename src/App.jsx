import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import PrivateRoutes from './utils/PrivateRoutes';
import Login from './pages/Login';
import { getTokenFromResponse } from './spotify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  let token = getTokenFromResponse().access_token

  return (
    <Router>
      <Routes>


        <Route element={<PrivateRoutes token={token} />} >

          <Route path="/" element={<Home token={token}/>} />

        </Route>




        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App