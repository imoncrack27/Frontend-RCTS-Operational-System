import { useState } from "react";
import { Form, message } from "antd";
import "./Signup.css";
import SignupForm from "../../components/SignupForm";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (formData: any) => {
    message.success("Signup successful!");
    console.log("Form submitted:", formData);

    navigate("/login");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Form submission failed:", errorInfo);
  };

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

        <SignupForm
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
      </div>
    </div>
  );
};

export default Signup;
