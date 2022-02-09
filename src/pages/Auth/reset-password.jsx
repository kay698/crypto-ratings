import React, { useState } from "react";
import { FlexibleDiv } from "../../components/Box/styles";
import { AuthStylesWrap } from "../../components/AuthStyles/styles";
import { Typography, Input, Form, notification } from "antd";
import { Link } from "react-router-dom";
// import { ResetPasswordUser } from "../../network/auth";
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons";
import Logo from "../../assets/pngs/logo.png";
import Button from "../../components/Button";
import { validatePwd } from "../../utils/functionLibraries";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState();

  const { Text, Title } = Typography;
  const [form] = Form.useForm();

  const handleConfirmPassword = (rule, value) => {
    return new Promise(async (resolve, reject) => {
      if (!value) {
        reject("Password must be confirmed");
      } else if (value !== password) {
        reject("Password does not match");
      } else {
        resolve();
      }
    });
  };
  async function handleFormSubmit(values) {
    // setIsLoading(true);
    // const payload = {
    //   email: values.email.toLowerCase(),
    //   password: values.password,
    // };
    // try {
    //   const data = await ResetPasswordUser(payload);
    //   sessionStorage.setItem("user_token", data.token);
    //   window.location.replace("");
    //   setIsLoading(false);
    // } catch (error) {
    //   if (error.response) {
    //     notification.open({
    //       message: "Error",
    //       description: "Email or password is incorrect",
    //       icon: <SmileOutlined style={{ color: "red" }} />,
    //     });
    //     setIsLoading(false);
    //   } else {
    //     notification.open({
    //       message: "Error",
    //       description:
    //         "There was an issue with your network. Pls try again later",
    //       icon: <SmileOutlined style={{ color: "red" }} />,
    //     });
    //     setIsLoading(false);
    //   }
    // }
  }

  return (
    <AuthStylesWrap ResetPassword>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <FlexibleDiv className="authForm">
            <Title level={5}> Reset Password</Title>
            <Form form={form} onFinish={handleFormSubmit}>
              <Form.Item name="password" rules={[{ validator: validatePwd }]}>
                <Input.Password
                  autocomplete="off"
                  className="passwordInput"
                  placeholder="Create password"
                  iconRender={(visible) => (visible ? "" : "")}
                  onChange={handleConfirmPassword}
                />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                rules={[{ validator: handleConfirmPassword }]}
              >
                <Input.Password
                  autocomplete="off"
                  className="passwordInput"
                  placeholder="Confirm password"
                  iconRender={(visible) => (visible ? "" : "")}
                />
              </Form.Item>

              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Reset Password
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </AuthStylesWrap>
  );
};

export default ResetPassword;
