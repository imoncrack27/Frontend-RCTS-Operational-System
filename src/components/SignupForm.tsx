import { Form, Input, Checkbox, Button } from "antd";
import "../pages/Signup/Signup.css";

const SignupForm = ({
  form,
  onFinish,
  onFinishFailed,
}: {
  form: any;
  onFinish: any;
  onFinishFailed: any;
}) => {
  return (
    <Form
      form={form}
      name="signupForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        termsConditions: false,
        privacyPolicy: false,
      }}
      className="signup-form"
    >
      <div className="first-form-signup">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Username is required" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Email is invalid" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        {/* Phone Number */}
        <Form.Item
          name="phoneNumber"
          rules={[{ required: true, message: "Phone Number is required" }]}
        >
          <Input placeholder="Contact Number" maxLength={13} />
        </Form.Item>
      </div>
      {/* Username */}

      <div className="second-form-signup">
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password placeholder="Password" className="password-signup" />
        </Form.Item>

        {/* Confirm Password */}
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Confirm Password is required" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Passwords do not match");
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            className="password-signup"
          />
        </Form.Item>

        {/* ID Number */}
        <Form.Item
          name="idNumber"
          rules={[{ required: true, message: "ID Number is required" }]}
        >
          <Input placeholder="ID number" />
        </Form.Item>
      </div>
      {/* Password */}
      <div className="checkbox-signup">
        <Form.Item
          name="termsConditions"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      "You must accept the terms and conditions agreement"
                    ),
            },
          ]}
        >
          <Checkbox>I accept the general terms and condition of use</Checkbox>
        </Form.Item>
        <Form.Item
          name="privacyPolicy"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      "You must accept privacy and policy agreement"
                    ),
            },
          ]}
        >
          <Checkbox>I accept the Privacy and Policy</Checkbox>
        </Form.Item>
      </div>
      {/* Terms and Privacy Policy checkboxes */}

      {/* Submit button */}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="signup-button"
          style={{ backgroundColor: "#04c45c" }}
        >
          Signup
        </Button>
        <span className="span-signup">Already have an Account? </span>
        <a href="/login" className="already-have-an-account">
          Login
        </a>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
