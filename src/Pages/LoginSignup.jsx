import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          <p>Already have an account? <span>Log In</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup