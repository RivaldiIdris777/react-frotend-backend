import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Backend
import Layout from './backend/pages/Layout';
import Navbar from './backend/component/Navbar/Navbar';
import Dashboard from './backend/pages/Dashboard';

// Frontend
import LayoutFrontend from './frontend/pages/LayoutFrontend';
import LandingPage from './frontend/pages/LandingPage';
import Table from './backend/pages/Table';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard/management' element={<Layout/>}> 
            <Route index element={(<Dashboard/>)} />          
            <Route path='/dashboard/management/table' element={<Table/>} />
        </Route>
        <Route path='/' element={<LayoutFrontend/>}>
            <Route index element={(<LandingPage/>)}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
