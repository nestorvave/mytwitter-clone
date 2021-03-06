/**
 * Dependencies
 */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
/**
 * Components
 */
import LoginScreen from "../Pages/Auth/LoginScreen/LoginScreen";
import RegisterScreen from "../Pages/Auth/RegisterScreen/RegisterScreen";

const AuthRouter = () => {
  return (
    <main className="authScreen" >
        <Switch>
            <Route 
                path="/auth/login"
                component={ LoginScreen }
            />
            <Route 
                path="/auth/register"
                component={ RegisterScreen }
            />
            <Redirect to="/auth/login" />
        </Switch>
    </main>
  );
};

export default AuthRouter;
