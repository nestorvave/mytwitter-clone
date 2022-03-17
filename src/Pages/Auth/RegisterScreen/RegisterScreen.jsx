import React from 'react'
import {Link} from 'react-router-dom'

const RegisterScreen = () => {

  return (
    <section className='loginScreen flex-center' >
      <img src="/Images/logo.svg" alt="logo" className='loginScreen__logo' />
      <h2 className='loginScreen__title' >
        Create your account
      </h2>

      <form className='form flex-center' >
        <input
          placeholder='email'
          type="mail"
          className='form__input'
        />
        <input 
          placeholder='password'
          type="password"
          className='form__input'
        />
        <button className='form__button button--primary' >
          Login
        </button>
      </form>
     
      <p>Register with social networks</p>

      <div className="google-btn " >
        <div className="google-icon-wrapper">
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
        </div>
        <p className="btn-text">
          <span>Sign in with google</span>
        </p>
      </div>

      <Link to="/auth/login">
        Create new account
      </Link>
    </section>
  )
}

export default RegisterScreen