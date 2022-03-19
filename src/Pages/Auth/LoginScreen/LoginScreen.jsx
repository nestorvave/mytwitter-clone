import React from 'react'
import {Link} from 'react-router-dom'
import  Logo  from '../../../Images/logo.svg'
import useForm from '../../../Hooks/useForm'
import loginEmailPassword from '../../../Helpers/loginEmailPassword'
import loginWithGoogleServices from '../../../Helpers/loginWithGoogleServices'

const LoginScreen = () => {

 
  const [value,handleInputChange]=useForm({
    email:"",
    password:""

  })
  const { email, password } = value
  function loginWithEmail(e) {
    e.preventDefault();
    console.log("click")
    loginEmailPassword( email, password )
    
  }
  function loginWithGoogle(e){
    loginWithGoogleServices()

  }


  return (
    <section className='mainAuthScreen flex-center' >
      <img src={ Logo } alt="logo" className='mainAuthScreen__logo' />
      <h2 className='mainAuthScreen__title' >
        See what´s happening in the world right now.
      </h2>

      <form className='form flex-center' >
        <input
          className='form__input'
          name="email"
          onChange={ handleInputChange }
          placeholder='email'
          type="mail"
          value={ email }  
        />
        <input 
          className='form__input'
          name="password"
          onChange={ handleInputChange }
          placeholder='password'
          type="password"
          value={ password }  
        />
        <button 
          className='form__button button--primary' 
          onClick={ loginWithEmail }
        >
          Login
        </button>
      </form>
     
      <p>Login with social networks</p>
      <div className="google-btn ">

        <div className="google-icon-wrapper"> 
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
        </div>
        <p 
        className="btn-text"
        onClick={ loginWithGoogle }
        >
            <span>Login with google</span>
        </p>
      </div>
      <Link to="/auth/register" className='mainAuthScreen__link' >
        Already registered?
      </Link>
      
    </section>
  )
}

export default LoginScreen