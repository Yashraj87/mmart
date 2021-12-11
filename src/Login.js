import React, { useState } from 'react'
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import { auth } from './firebaseFolder';


function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const signIn =e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,pass)
            .then(auth=>{
                history.push("/")
            
            })
            .catch(error=>alert(error.message))
    }

    const register=e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,pass)
            .then((auth) =>{
                if(auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message));
    }

    return (
        <div >
            <h1 className='head'>LOGIN PAGE</h1>
            <h2 className='wel'>Enter once and never leave!!</h2>

            <div className='login'>
                <h4>Enter E-mail</h4>
                <input type='text' className='email' value={email} onChange=
                {e =>setEmail(e.target.value)}
                ></input>
                <h4>Enter password</h4>
                <input type='password' className='pass' value={pass} onChange=
                {e=>setPass(e.target.value)}></input>
                <button type='submit' onClick={signIn} className='but'>Sign IN</button>
                <button type ='submit' onClick={register} className='but'>Create account</button>
                <p><small>T&C applied</small></p>

            </div>
        </div>
        
    )
}

export default Login
