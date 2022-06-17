import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { auth } from '../firebase/init';

const ProtectedRoute = ({children}) => {
    let { user } = useUserAuth();

    const userLocal = JSON.parse(localStorage.getItem(user));

    
       
    

    

    if(userLocal) {
        localStorage.setItem(user, true)
        console.log(user)
        return children
        
    } else if (!userLocal) {
        localStorage.removeItem(user)
        return <Navigate to="/"/>
      
    }
    
    
}

export default ProtectedRoute;
