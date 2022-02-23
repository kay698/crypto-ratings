import React, { useState } from "react"
import { FlexibleDiv } from "../../components/Box/styles"
import { AuthStylesWrap } from "../../components/AuthStyles/styles"
import { Typography, Input, Form, notification } from "antd"
import { Link } from "react-router-dom"
// import { ForgotPasswordUser } from "../../network/auth";
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons"
import Logo from "../../assets/pngs/logo.png"
import Button from "../../components/Button"
import { validatePwd } from "../../utils/functionLibraries"
import { forgotPassword } from "../../network/users"

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { Text, Title } = Typography
  const [form] = Form.useForm()

  async function handleFormSubmit(values) {
    setIsLoading(true)
    const payload = {
      email: values.email.toLowerCase(),
      password: values.password,
    }
    try {
      const data = await forgotPassword(payload)
      sessionStorage.setItem("user_token", data.token)
      window.location.replace("")
      setIsLoading(false)
    } catch (error) {
      if (error.response) {
        notification.open({
          message: "Error",
          description: "Email or password is incorrect",
          icon: <SmileOutlined style={{ color: "red" }} />,
        })
        setIsLoading(false)
      } else {
        notification.open({
          message: "Error",
          description:
            "There was an issue with your network. Pls try again later",
          icon: <SmileOutlined style={{ color: "red" }} />,
        })
        setIsLoading(false)
      }
    }
  }

  return (
    <AuthStylesWrap ForgotPassword>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <FlexibleDiv className="authForm">
            <Title level={5}> Forgot Password</Title>

            <span className="instructionsText">
              Please input your registered email and check for instructions.
            </span>
            <Form form={form} onFinish={handleFormSubmit}>
              <Form.Item name="email">
                <Input placeholder="Email" />
              </Form.Item>

              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Send Link
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </AuthStylesWrap>
  )
}

export default ForgotPassword
