import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Home from './Paginas/Home';
import Login from './Paginas/Login';
import { Box } from '@mui/material';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
