import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./verifyCode.css";
import { useRef } from "react";

const VerifyCode: FunctionComponent = () => {
  const inputsRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const val = target.value;

    if (isNaN(Number(val))) {
      target.value = "";
      return;
    }

    if (val !== "") {
      const next = target.nextElementSibling as HTMLInputElement;
      if (next) {
        next.focus();
      }
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const key = e.key.toLowerCase();

    if (key === "backspace" || key === "delete") {
      target.value = "";
      const prev = target.previousElementSibling as HTMLInputElement;
      if (prev) {
        prev.focus();
      }
      return;
    }
  };

  return (
    <div className="forgot-pass-container">
      <div className="forgot-pass-parent">
        <img
          className="img-human-forgot"
          loading="lazy"
          alt=""
          src="/Group 2.svg"
        />
      </div>
      <Link
        to="login"
        className="link-back-login"
        onClick={() => history.back()}
      >
        &lt; Back to Login
      </Link>
      <h1>Verify Code</h1>
      <p className="p-forgot-pass">
        An authentication code has been sent to your phone number.
      </p>
      <div id="inputs" className="inputs" ref={inputsRef}>
        <input
          title="otp"
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleInput}
        />
        <input
          title="otp"
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
        />
        <input
          title="otp"
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
        />
        <input
          title="otp"
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
        />
        <input
          title="otp"
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
        />
        <input
          title="otp"
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
        />
      </div>
      <Link to="/setpassword" style={{ textDecoration: "none" }}>
        <button type="button" className="button-forgot-password">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default VerifyCode;
