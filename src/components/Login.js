import React, {useState} from 'react'
import './Login.css'

function Login() {
    //Creating Variables
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const signIn = e =>{
        e.preventDefault()
        //Firebase login stuff

    }

    const register = e =>{
        e.preventDefault()
        //Firebase Register stuff

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