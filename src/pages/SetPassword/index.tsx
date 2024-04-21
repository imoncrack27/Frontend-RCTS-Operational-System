import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./setPassword.css";

const SetPassword: FunctionComponent = () => {
  return (
    <div className="forgot-pass-container">
      <div className="forgot-pass-parent">
        <img
          className="img-human-forgot"
          loading="lazy"
          alt=""
          src="/Group 4.svg"
        />
      </div>

      <h1>Set a Password</h1>
      <p className="p-forgot-pass">
        Your previous password has been reset. Please set a new password for
        your account.
      </p>
      <input
        type="password"
        className="phone-number-input"
        placeholder="Password"
        required
      />
      <input
        type="password"
        className="confirm-password-input"
        placeholder="Confirm Password"
        required
      />
      <Link to="/login" style={{ textDecoration: "none" }}>
        <button type="button" className="button-forgot-password">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default SetPassword;
