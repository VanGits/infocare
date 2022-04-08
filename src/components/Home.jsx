
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSearch, FaFileImport } from 'react-icons/fa'
import { IoAdd } from "react-icons/io5";
import { useUserAuth } from '../context/UserAuthContext';
import { auth } from '../firebase/init';
import { onAuthStateChanged } from 'firebase/auth';

const Home = () => {
    

    return (
        <div className="home__page">
            <div className="row">
                <div className="container">
                    <div className="content">
                        <div className="search__box">
                            <div className="search__area">
                                <FaSearch className = "fa fa-search "  />
                                <input className="search__input box-shadow" placeholder="Search" type="text" />
                            </div>
                            <div className="file__import-area click box-shadow">
                                <IoAdd className='file__import-btn click'/>
                            </div>

                           
                        </div>

                        <hr className='line black'/>

                        <div className="table">
                            <table>
                                <tr>
                                    <th className='white'>Name</th>
                                    <th className='white'>Start Date</th>
                                    <th className='white'>End Date</th>
                                    <th className='white'>Location</th>
                                    <th className='white'>Phone Number</th>
                                    <th className='white'>Email</th>
                                    <th className='white'>Goal</th>

                                </tr>
                            
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>

                                </tr>
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>

                                </tr>
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>

                                </tr>
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>

                                </tr>
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>

                                </tr>
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>

                                </tr>
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>

                                </tr>
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>

                                </tr>
                                <tr>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                                    <td>hi</td>
                    
                                </tr>
                            </table>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Home;
