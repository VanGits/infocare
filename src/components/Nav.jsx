import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import  logo  from '../assets/logo.png'
import { useUserAuth } from '../context/UserAuthContext';
import { auth } from '../firebase/init';
import { GrLogout } from "react-icons/gr";



const Nav = () => {
    const {user, logOut} = useUserAuth()
   
   
    
    const handleLogOut = async() => {
        try {
            await logOut()
            console.log(logOut,"yes", user)
            
        } catch (err) {
            console.log(err.message)
        }
    }

    const userFix = () => {
        if (user && user.photoURL) {
            return <img className = "profile-circle white click" src = {user.photoURL}/>
        }
        else if (user) {
        
         return user.email.charAt(0).toUpperCase()
         
            
        }
       
    
    }
    return (
        <nav className="nav__page box-shadow">
            <div className="nav__content">
            <div className="logo__area">
                    <img className = "nav-img click"src={logo} alt="" />
                   <h1 className='white click'>24-SevenCare</h1>
                </div>

            <div className="search__area">

            <input className="search__input " placeholder="Search" type="text" />
            </div>
            <div className="profile__area">
                
                    
                    <h1 className='profile-circle white click'  >
                        {/* {user ? (<img className = "profile-circle white click" src = {user.photoURL}/> ||  user.email.charAt(0).toUpperCase()) : ""  } */}
                         {userFix()} 
                    </h1>
                    <div className="dropdown__menu">
                        <div className="dropdown__profile">
                        <img src={user && user.photoURL} alt="" className='dropdown__img'/>
                            {/* {user.photoURL ? <img src={user.photoURL} alt="" className='dropdown__img'/> : <div className='profile-circle white'> <h1>{user.email.charAt(0).toUpperCase()}</h1> </div>} */}
                            <h1>{user && user.displayName}</h1>
                        </div>
                        <hr />
                        <div className="dropdown__logout" onClick = {handleLogOut}>
                            <div className="logout__btn-wrapper">
                                <GrLogout className='logout-btn'/>
                                
                            </div>
                            <h1 className='logOut-text'>Log Out</h1>
                        </div>
                    </div>

                    {/* <button  onClick = {handleLogOut} 
                    className= 'btn-2 log-out white'>
                        Log Out
                    </button> */}
                    
                    
                    
                   
                </div>
                
               
                
                
            </div>
 
        </nav>
    );
}

export default Nav;
