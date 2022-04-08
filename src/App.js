import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import Signup from './components/Signup';
import ProtectedRoute from "./components/ProtectedRoute"
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {

  const AppLayout = () => {
    return (
      <>
        <Nav />
        <Outlet />
      </>
    );
  };



  return (
    <div className='App'>

      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }>
              
              
              <Route path="/home" element={<Home />} />


            </Route>












          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
