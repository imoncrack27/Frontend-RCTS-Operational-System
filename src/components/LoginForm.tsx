import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import "../pages/Login/Login.css";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    // Simulating login logic here (replace with actual login logic)
    const { email, password } = values;

    // Check if email and password match some stored credentials
    if (email === "example@example.com" && password === "password") {
      // Successful login
      message.success("Login successful!");
      console.log("Logged in successfully");

      // Redirect to the dashboard or any other page
      navigate("/");
    } else {
      // Failed login
      message.error("Invalid email or password");
      console.log("Invalid email or password");
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="login-checkbox">Remember me</Checkbox>
          <a className="login-form-forgot" href="/forgotpassword">
            Forgot password
          </a>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ backgroundColor: "#04c45c" }}
        >
          Log in
        </Button>

        <a href="/signup" className="registration">
          Register now!
        </a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
