import React from 'react'
import '../styles/Login.style.css'

const Login = () => {
  return (
    <div className='login-container'>
        <h1 className='heading'>LOG IN</h1>
        <div className='inputs'>
            <label htmlFor="email">Email: </label>
            <input id='email' type="email" />
        </div>
        <div className='inputs'>
            <label htmlFor="Password">Password: </label>
            <input id='Password' type="Password" />
        </div>
        <button>
            Login
        </button>
    </div>
  )
}

export default Login