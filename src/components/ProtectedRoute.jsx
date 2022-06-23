import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import app, { auth } from '../firebase/init';
import { getAuth } from "firebase/auth";



const ProtectedRoute = ({children}) => {
    let { user } = useUserAuth();

    const [currentUser,  setCurrentUser] = useState(null)
    const [pending, setPending] = useState(true)
    const userLocal = JSON.parse(localStorage.getItem(user));
    
    // useEffect(() => {
    //     console.log(userLocal, "wasgood")
         
    //          setCurrentUser(user)
    //          setPending(false)
         
    // },[])  
    
    //     if (pending){
    //         return <>Loading...</>
    //     }

        
        // if(currentUser){
            
        //     console.log(currentUser)
        //     return children
            
            
    
        // }
        // else if (!currentUser) {
        //     alert("no user")
        //     return <Navigate to = "/"/>
            
        // }
        if(userLocal) {
            localStorage.setItem(userLocal, true)
            console.log(userLocal, "in")
            
            return children
           
            
        } else if (!userLocal) {
            localStorage.removeItem(userLocal)
            console.log(userLocal, "out")
            return <Navigate to="/"/>
           
            
            
            
          
        }
   
    
    
    
}

export default ProtectedRoute;
