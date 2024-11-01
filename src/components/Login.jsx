import React, { useRef, useState } from 'react'
import { Login_bg } from '../utils/constant'
import Header from './Header'
import { checkValidata } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    //const confirmPassword = useRef(null);

    // Check validation
    const handleButtonClick = () => {
        const message = checkValidata(
            email.current.value,
            password.current.value
            //, confirmPassword.current.value
        );
        setErrorMessage(message);

        if(message) return;

        //Sign up Logic here

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Sign up
                const user = userCredential.user;
                console.log(user);
                navigate('/browse');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        } else {
            //Sign in Logic here
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate('/browse');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)

            });
            
        }
    };

    // Sign in || Sign Up button
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }



  return (
    <div className='bg-gradient-to-b from-black'>
        <Header />
        <img 
            className="absolute" 
            src={Login_bg} alt="login background" 
        />
        <form onSubmit={(e) => e.preventDefault()} className=' bg-black text-white absolute p-10 w-1/3 my-32 mx-auto right-0 left-0 bg-opacity-80 rounded-md'>
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
                 ref={email} 
                 placeholder='Email or mobile number ' 
                 className='p-4 my-2 rounded-md bg-slate-700 bg-opacity-60 w-full'
                 
            />
            <input 
                type="password" 
                ref={password}
                placeholder='Password' 
                className='p-4 my-2 rounded-md bg-slate-700 bg-opacity-60 w-full'
            />            
            <p className='text-red-600'>{errorMessage}</p>
            <button className='bg-red-700  p-2 my-3 rounded-md w-full font-bold' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
            
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

// {!isSignInForm && (
//     <input 
//         type="password" 
//         placeholder='Confirm Password' 
//         ref={confirmPassword}
//         className='p-4 my-2 rounded-md bg-slate-700 bg-opacity-60 w-full'
//     />
// )}