import React, { useState } from 'react'
import './Modal.css'
import { createPortal } from 'react-dom'
export const Modal = ({isOpen, setOpen}) => {
    const[SignIn, setSignIn] = useState(true)
    return (
        <div className={`overlay ${isOpen?'open':''}`} id="overlay">
            <div className="popup">
                {SignIn?<><h2>Sign In</h2>
                <div className='inputs'>
                    <p htmlFor="username">Username:</p>
                    <input type="text" id="username" name="username" required autoComplete='off'/><br />
                </div>
                <div className='inputs'>
                    <p htmlFor="password">Password:</p>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign In</button>
                <p>Dont have an account?<b onClick={()=>setSignIn(false)}>Sign up</b></p></>:<><h2>Sign In</h2>
                    <div className='inputs'>
                        <p htmlFor="email">Email:</p>
                        <input type="text" id="email" name="email" required autoComplete='off'/>
                    </div>
                    <div className='inputs'>
                        <p htmlFor="username">Username:</p>
                        <input type="text" id="username" name="username" required autoComplete='off'/>
                    </div>
                    <div className='inputs'>
                        <p htmlFor="password">Password:</p>
                        <input type="password" id="password" name="password" required autoComplete='off'/>
                    </div>
                    <button type="submit">Sign up</button>
                    <p>Already have an have account?<b onClick={()=>setSignIn(true)}>Sign in</b></p></>
                }
            </div>
            <button className="close-btn" onClick={()=>setOpen(false)}>Close</button>
        </div>
    )
}
