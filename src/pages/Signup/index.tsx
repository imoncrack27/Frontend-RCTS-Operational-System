import "./Signup.css";
import SignupForm from "../../components/SignupForm";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup">
        <h1 className="appointment-scheduling-signup">
          Appointment Scheduling
        </h1>
        <h3 className="appointment-signup">Signup to your Account</h3>
        <div className="signup-img">
          <img src="Group 1.svg" className="img-signup" alt="image" />{" "}
        </div>

        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
