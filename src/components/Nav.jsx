import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import  logo  from '../assets/logo.png'
import { useUserAuth } from '../context/UserAuthContext';
import { auth } from '../firebase/init';

const Nav = () => {
    const {user, logOut} = useUserAuth()
   
   
    
    const handleLogOut = async() => {
        try {
            await logOut()
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <nav className="nav__page box-shadow">
            <div className="nav__content">
            <div className="logo__area">
                    <img className = "nav-img click"src={logo} alt="" />
                   <h1 className='white click'>InfoCare</h1>
                </div>
            <div className="profile__area">
                    
                    <h1 className='profile-circle white click'>
                        {user && user.email.charAt(0).toUpperCase()}
                    </h1>

                    <button  onClick = {handleLogOut} 
                    className= 'btn-2 log-out white'>
                        Log Out
                    </button>
                    
                    
                    
                   
                </div>
                
               
                
                
            </div>
 
        </nav>
    );
}

export default Nav;
