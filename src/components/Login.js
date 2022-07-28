import React, {useState} from 'react'
import './Login.css'
import {auth} from '../firebaseUtility/firebase.js'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
      
function Login() {
    //Creating Variables
    const navigate = useNavigate();
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const signIn = e =>{
        e.preventDefault()
        //Firebase login stuff

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User has signed in ", user)
    // ...

    if(user){
      navigate('/')
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });

    }

    const register = e =>{
        e.preventDefault()
        //Firebase Register stuff
     
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User is here ", user)
    if(user){
      navigate('/')
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });

    }
  return (
    <div className='login'>Login  
        <div className = 'login_container'>
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email}  onChange = {e =>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange = {e =>setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login_button'>Submit</button>
            </form>
            <p>By siginin in you agree to our terms and condition</p>
            <button type='submit' onClick={register} className='login_register_button'>Create Account</button>
        </div>
    </div>
  )
}

export default Login