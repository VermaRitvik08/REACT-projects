import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import { auth } from '../../firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Login() {

    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((auth)=> {
            if(auth){
                history('/')
            }
        })   
    }

    const register = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((auth)=>{
            if(auth){
                history('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className="login">
        <Link to="/" >
            <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
        </Link>
        <div className="login_container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                <button onClick={signIn} className="login_signIn">SIGN IN</button>
            </form>
            <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button onClick={register} className="login_register">Create your Amazon Account</button>
        </div>
    </div>
  ) 
}


export default Login
