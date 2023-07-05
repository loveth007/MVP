import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}