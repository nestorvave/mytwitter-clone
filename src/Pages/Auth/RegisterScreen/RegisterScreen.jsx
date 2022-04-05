/**
 * Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";
/**
 * Hooks
 */
import registerEmailPassword from "../../../Helpers/registerEmailPassword";
/**
 * SVG
 */
import useForm from "../../../Hooks/useForm";
import Logo from "../../../Images/logo.svg";

const RegisterScreen = () => {
  const [value, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = value;

  function registerUser(e) {
    e.preventDefault();
    registerEmailPassword(email, password);
  }

  return (
    <section className="mainAuthScreen flex-center">
      <img src={Logo} alt="logo" className="mainAuthScreen__logo" />
      <h2 className="mainAuthScreen__title">Join Twitter today</h2>

      <form className="form flex-center">
        <input
          className="form__input"
          name="email"
          onChange={handleInputChange}
          placeholder="Email"
          type="email"
          value={email}
        />

        <input
          className="form__input"
          name="password"
          onChange={handleInputChange}
          placeholder="Password"
          type="password"
          value={password}
        />
        <button className="form__button button--primary" onClick={registerUser}>
          Register
        </button>
      </form>

      <Link to="/auth/login" className="mainAuthScreen__link">
        Have an account already?{" "}
        <span className="mainAuthScreen__link--color">Log in</span>
      </Link>
    </section>
  );
};

export default RegisterScreen;
