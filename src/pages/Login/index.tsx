import React from "react";
import LoginForm from "../../components/LoginForm"; // Update the import path to correctly reference the location of the LoginForm component
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <h1 className="appointment-scheduling">Appointment Scheduling</h1>
        <h3 className="appointment-login">Login to your Account</h3>
        <div className="login-img">
          <img src="login.png" className="img-login" alt="image" />
          <img src="login-human.png" className="img-login2" alt="image" />
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
