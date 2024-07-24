import React, { useState } from 'react'
import './Modal.css'
export const Modal = ({isOpen, setOpen}) => {
    const[SignIn, setSignIn] = useState(true)
    return (
        <div className={`overlay ${isOpen?'open':''}`} id="overlay">
            <div className="popup">
                {SignIn?<><h2>Sign In</h2>
                <div className='inputs'>
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" id="username" name="username" required /><br />
                </div>
                <div className='inputs'>
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign In</button>
                <p>Dont have an account?<b onClick={()=>setSignIn(false)}>Sign up</b></p></>:<><h2>Sign In</h2>
                    <div className='inputs'>
                        <label htmlFor="email">Email:</label><br />
                        <input type="text" id="email" name="email" required /><br />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="username">Username:</label><br />
                        <input type="text" id="username" name="username" required /><br />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Sign up</button>
                    <p>Already have an have account?<b onClick={()=>setSignIn(true)}>Sign in</b></p></>
                }
            </div>
            <button className="close-btn" onClick={()=>setOpen(false)}>Close</button>
        </div>
    )
}
