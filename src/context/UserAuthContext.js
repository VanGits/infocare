import { createContext, useEffect, useState, useContext } from "react";
import { createUserWithEmailAndPassword, 
     signOut, onAuthStateChanged, signInWithEmailAndPassword, 
     GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, setPersistence, browserSessionPersistence, browserLocalPersistence
    } from "firebase/auth";

import { auth } from "../firebase/init"

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState('')
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth)
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    

    useEffect(() => {
        
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsub();
        }
    }, [ ])
    return <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn}}>
        {children}
        </userAuthContext.Provider>
    
}

export function useUserAuth(){
    return useContext(userAuthContext)
}