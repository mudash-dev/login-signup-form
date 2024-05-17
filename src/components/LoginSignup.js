import React, { act, useState } from 'react';
import './LoginSignup.css';
import email_icon from '../assets/email.png';
import person_icon from '../assets/person.png';
import password_icon from '../assets/password.png';


function LoginSignup() {

    const [option, setOption] = useState("Login")

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{option}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {option==="Login"?<div></div>: 
                 <div className='input'>
                    <img src={person_icon} alt=''/>
                    <input type='text' placeholder='Your Fullname'/>
                </div>
                }
            
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Your Email address'/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='Enter password'/>
                </div>
            </div>
            {option==="Sign Up"?<div></div>:
                 <div className='forgot-password'><span>Forgot Password?</span></div>
            }
            <div className='submit-containers'>
                <div className={option==="Login"?"submit gray":"submit"} onClick={()=>{setOption("Sign Up")}}
                >Sign Up</div>
                <div className={option==="Sign Up"?"submit gray":"submit"} onClick={()=>{setOption("Login")}}
                >Login</div>
            </div>
        </div>
    )

}

export default LoginSignup;