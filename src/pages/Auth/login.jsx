import { LoadingOutlined, SmileOutlined } from "@ant-design/icons";
import { Form, Input, notification, Typography } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/pngs/logo.png";
import { AuthStylesWrap } from "../../components/AuthStyles/styles";
import { FlexibleDiv } from "../../components/Box/styles";
import Button from "../../components/Button";
import { logInUser } from "../../network/auth";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { Text, Title } = Typography;
  const [form] = Form.useForm();

  async function handleFormSubmit(values) {
    setIsLoading(true);
    const payload = {
      email: values.email.toLowerCase(),
      password: values.password,
    };
    try {
      const data = await logInUser(payload);
      localStorage.setItem("user_token", data.token);
      setIsLoading(false);
      navigate("/trade-card");
    } catch (error) {
      if (error.response) {
        notification.open({
          message: "Error",
          description: "Email or password is incorrect",
          icon: <SmileOutlined style={{ color: "red" }} />,
        });
        setIsLoading(false);
      } else {
        notification.open({
          message: "Error",
          description:
            "There was an issue with your network. Pls try again later",
          icon: <SmileOutlined style={{ color: "red" }} />,
        });
        setIsLoading(false);
      }
    }
  }

  return (
    <AuthStylesWrap login>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <FlexibleDiv className="authForm">
            <Title level={5}> Login</Title>
            <Form form={form} onFinish={handleFormSubmit}>
              <Form.Item name="email">
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  className="passwordInput"
                  placeholder="password"
                  iconRender={(visible) => (visible ? "" : "")}
                />
              </Form.Item>
              <FlexibleDiv className="forgotPassword">
                <Text>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </Text>
              </FlexibleDiv>

              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Login
              </Button>
            </Form>
          </FlexibleDiv>
          <FlexibleDiv className="account-status">
            <Text>
              Don't have an account?<Link to="/signup"> Register</Link>
            </Text>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </AuthStylesWrap>
  );
};

export default Login;
