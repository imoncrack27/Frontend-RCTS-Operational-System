import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import type { FormInstance } from "antd";

interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const onClick = () => {
    console.log("clicked");
  };

  return (
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button"
      disabled={!submittable}
      onClick={onClick}
      style={{ backgroundColor: "#04c45c" }}
    >
      {children}
    </Button>
  );
};
const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const [form] = Form.useForm();
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="Email"
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
        <SubmitButton form={form}>Log in</SubmitButton>

        <a href="/signup" className="registration">
          Register now!
        </a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
