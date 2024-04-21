import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./forgotpw.css";

const ForgotPass: FunctionComponent = () => {
  return (
    <div className="forgot-pass-container">
      <div className="forgot-pass-parent">
        <img
          className="img-human-forgot"
          loading="lazy"
          alt=""
          src="/Group 3.svg"
        />
      </div>
      <Link
        to="login"
        className="link-back-login"
        onClick={() => history.back()}
      >
        &lt; Back to Login
      </Link>
      <h1>Forgot Your Password?</h1>
      <p className="p-forgot-pass">
        Don't worry, happens to all of us. Enter your Phone Number below to
        recover your password
      </p>
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        maxLength={11}
        className="phone-number-input"
        placeholder="Phone Number"
        required
      />
      <Link to="/verifycode" style={{ textDecoration: "none" }}>
        <button type="button" className="button-forgot-password">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default ForgotPass;
