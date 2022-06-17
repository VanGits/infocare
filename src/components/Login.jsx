import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/init'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signUp, useAuth } from "../firebase/init"
import { useUserAuth } from '../context/UserAuthContext';
import GoogleButton from 'react-google-button';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[error, setError] = useState('')
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        
        try{
    
            await logIn(email, password);
            navigate("/home")
            
            
        } catch(err) {
            setError(err.message)
            
        }   
    }

    const handleGoogleSignIn = async(e) => {
        e.preventDefault();

        try {
            await googleSignIn();
            navigate("/home")
        } catch(err) {
            setError(err.message)
        }
    }
    const handleEnter = (e) => {
        if (e.key === "Enter"){
            
            handleSubmit(e)
        }
    }


    

    
    return (
        <div className='login__page'>
        
            
                    <div className="login-box">
                        <div className="main__text">
                            <h1>Log In</h1>
                            <div className="alert-wrapper black">
                                {error && <div>{error.substring(9)}</div>}
                            </div>
                           
                        </div>
                        
                        <div className="inputs">
                            <input 
                            className="input" 
                            placeholder='Email' 
                            type="email"
                            onKeyDown={handleEnter}
                            onChange={ (e) => setEmail(e.target.value)} />
                            <input 
                            className="input"
                             placeholder='Password'
                             type="password"
                             onKeyDown={handleEnter}
                             onChange={(e) => setPassword(e.target.value)} />
                        </div>
                      
                        <div className="buttons">
                        
                                <button className  = "btn" onClick={handleSubmit}>Log In</button>
                           
                           
                            <hr />
                            
                          
                                <GoogleButton 
                                className='btn-2' 
                                type='dark' 
                                onClick= {handleGoogleSignIn}
                                />
                           
                            
                        </div>
                        <p id = 'register'>Dont have an account? <Link to = '/signup'>Sign up</Link></p>
                        <a className = "noclick"href="">Forgot password?</a>

                    </div>


        </div>
    );
}

export default Login;
