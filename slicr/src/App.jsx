import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Linkly from './Linkly';

export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path='/' element = {<Auth />} /> */}
    //     <Route path='/' element = {<LandingPage/>} />
    //     <Route path='/dashboard' element = {<Dashboard />} />
    //   </Routes>
    // </BrowserRouter>
    <Linkly />
  )
}
