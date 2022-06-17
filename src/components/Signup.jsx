import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[error, setError] = useState('')
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        
        try{
    
            await signUp(email, password);
            navigate("/")
            
            
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


        <div>
            <div className='signup__page'>
        
            
        <div className="signup-box">
            <div className="signup__main-text">

                <h1>Sign Up</h1>
                <div className="alert-wrapper black">
                    {error && <div>{error.substring(9)}</div>}
                </div>
                
                
               
            </div>
            
            
            <div className="inputs">
                <input className="input"
                 placeholder='Email' 
                 type="email"
                 onChange={ (e) => setEmail(e.target.value)} 
                 onKeyDown = {handleEnter}/>
                <input className="input" 
                placeholder='Password'
                type="password" 
                onChange={ (e) => setPassword(e.target.value)}
                onKeyDown = {handleEnter}/>
            </div>
          
            <div className="buttons">
                
                    <button className='btn'  onClick={handleSubmit}>Sign up</button>
              
            
                
            </div>
            <p id = 'register'>Already have an account? <Link to = '/'>Log In</Link></p>
            

        </div>


</div>
        </div>
    );
}

export default Signup;
