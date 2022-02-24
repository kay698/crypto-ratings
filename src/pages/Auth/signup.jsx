import React, { useState } from "react"
import { AuthStylesWrap } from "../../components/AuthStyles/styles"
import { FlexibleDiv } from "../../components/Box/styles"
import Logo from "../../assets/pngs/logo.png"
import { Typography, Form, notification } from "antd"
import { createUser } from "../../network/users"
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons"
import {
  validatePwd,
  validateEmail,
  validatePhone,
} from "../../utils/functionLibraries"
import { useNavigate, Link } from "react-router-dom"
import Input from "../../components/TextField"
import Button from "../../components/Button"

const Signup = () => {
  const router = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [checkAgreement, setCheckAgreement] = useState(false)
  const [password, setPassword] = useState("")

  const [form] = Form.useForm()
  const { Title, Text } = Typography

  const handlePassword = (e) => {
    const { value } = e.target
    setPassword(value)
  }

  const handleConfirmPassword = (rule, value) => {
    return new Promise(async (resolve, reject) => {
      if (!value) {
        reject("Password must be confirmed")
      } else if (value !== password) {
        reject("Password does not match")
      } else {
        resolve()
      }
    })
  }

  async function handleFormSubmit(values) {
    // if (agreement === false) {
    //   setCheckAgreement(true)
    //   return
    // }
    setIsLoading(true)
    const payload = {
      email: values.email.toLowerCase(),
      phoneNumber: values.phoneNumber,
      password: values.confirmPassword,
    }
    try {
      const data = await createUser(payload)
      notification.open({
        message: "Congrats",
        description: "You have signed up successfully",
        icon: <SmileOutlined style={{ color: "green" }} />,
      })
      sessionStorage.setItem("user_token", data.token)
      setIsLoading(false)
      router.push({
        pathname: "/subscription",
        state: { userdata: data },
      })
    } catch (error) {
      if (error.response) {
        notification.open({
          message: "Error",
          description: error.response.data.error,
          icon: <SmileOutlined style={{ color: "red" }} />,
        })
        setIsLoading(false)
      } else {
        notification.open({
          message: "Error",
          description: "Network error",
          icon: <SmileOutlined style={{ color: "red" }} />,
        })
        setIsLoading(false)
      }
    }
  }

  return (
    <AuthStylesWrap>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>

          <FlexibleDiv className="authForm">
            <Title level={5}>Register</Title>

            <Form form={form} onFinish={handleFormSubmit} autocomplete="off">
              <Form.Item name="email" rules={[{ validator: validateEmail }]}>
                <Input autocomplete="off" placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                rules={[{ validator: validatePhone }]}
              >
                <Input
                  autocomplete="off"
                  placeholder="Phone Number"
                  type="number"
                />
              </Form.Item>

              <Form.Item name="password" rules={[{ validator: validatePwd }]}>
                <Input.Password
                  autocomplete="off"
                  className="passwordInput"
                  placeholder="Create password"
                  iconRender={(visible) => (visible ? "" : "")}
                  onChange={handlePassword}
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
                Register
              </Button>
            </Form>
          </FlexibleDiv>
          <FlexibleDiv className="account-status">
            <Text>
              Already have an account?<Link to="/login"> Login</Link>
            </Text>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </AuthStylesWrap>
  )
}

export default Signup
