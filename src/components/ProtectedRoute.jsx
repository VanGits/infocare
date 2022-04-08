import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { auth } from '../firebase/init';

const ProtectedRoute = ({children}) => {
    let { user } = useUserAuth();


    if((!user)) {
        return <Navigate to="/"/>
    }
    return children
}

export default ProtectedRoute;
