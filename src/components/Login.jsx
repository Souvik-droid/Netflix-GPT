import React, { useState } from 'react'
import { Login_bg } from '../utils/constant'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div className=''>
        <Header />
        <img 
            className="absolute" 
            src={Login_bg} alt="login background" 
        />
        <form className=' bg-black text-white absolute p-12 w-1/3 my-32 mx-auto right-0 left-0 bg-opacity-80 rounded-md'>
            <h1 className=' font-bold text-3xl py-2 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            
            {!isSignInForm && (
                <input
                    type="text" 
                    placeholder='Name' 
                    className='p-4 my-2 rounded-md bg-slate-700 bg-opacity-60 w-full'
                />
            )}
            <input
                 type="text" 
                 placeholder='Email or mobile number ' 
                 className='p-4 my-2 rounded-md bg-slate-700 bg-opacity-60 w-full'
            />
            <input 
                type="password" 
                placeholder='Password' 
                className='p-4 my-2 rounded-md bg-slate-700 bg-opacity-60 w-full'
            />
            {!isSignInForm && (
                <input 
                    type="password" 
                    placeholder='Confirm Password' 
                    
                    className='p-4 my-2 rounded-md bg-slate-700 bg-opacity-60 w-full'
                />
            )}
            <button className='bg-red-700  p-2 my-3 rounded-md w-full font-bold'>{isSignInForm?"Sign In":"Sign Up"}</button>
            
            <h3 className='mx-36 text-lg text-neutral-500 my-1'>OR</h3>
            
            <div className='Sign in/up'>
                <span className='text-neutral-500'>{isSignInForm? "New to Netflix?":"Already have an account?"}</span>
                <span className='py-2 cursor-pointer font-semibold' onClick={toggleSignInForm}>{isSignInForm ? " Sign Up"  : " Sign In"}</span>
            </div>
            
        </form>

    </div>
  )
}

export default Login
