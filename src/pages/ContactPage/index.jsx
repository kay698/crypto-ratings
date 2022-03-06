import React, { useState } from "react";
import LandingLayout from "../../components/Layout";
import { ContactUsWrapper } from "./styles";
import { FlexibleDiv } from "../../components/Box/styles";
import { validateEmail, validatePhone } from "../../utils/functionLibraries";
import { Collapse, Typography, Form, notification } from "antd";
import Button from "../../components/Button";
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons";
import Input from "../../components/TextField";
import { Twitter, Instagram, Facebook } from "../../assets/svgs/exports";
import emailjs from "emailjs-com";

const ContactUsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const { Panel } = Collapse;

  const onReset = () => {
    document.getElementById("myform").reset();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    console.log(e.target);
    await emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        notification.open({
          message: "Hi There",
          description:
            "Thanks for reaching out, I will get back to you shorlty.",
          icon: <SmileOutlined style={{ color: "green" }} />,
        });
        setIsLoading(false);
      },
      (error) => {
        notification.open({
          message: "Error",
          description: error.text,
          icon: <SmileOutlined style={{ color: "red" }} />,
        });
        setIsLoading(false);
      }
    );
    onReset();
  };

  return (
    <LandingLayout>
      <ContactUsWrapper>
        <FlexibleDiv justifyContent="space-between" alignItems="flex-start">
          <FlexibleDiv className="leftSection" flexDir="column">
            <Typography.Title>
              Get in touch with
              <br /> us from anywhere
            </Typography.Title>
            {/* <Button width="max-content">Speak to a customer care agent</Button> */}

            <a href="tel: +2347041488189">+234 (0)704 148 8189</a>
            <a href="mailto: iratersworld@gmail.com">iratersworld@gmail.com</a>
            <FlexibleDiv
              justifyContent="space-between"
              width="120px"
              margin="10px 0"
            >
              <a href="/contact-us">
                <Facebook color="#006EEF" />
              </a>
              <a href="/contact-us">
                <Instagram color="#006EEF" />
              </a>

              <a href="/contact-us">
                <Twitter color="#006EEF" />
              </a>
            </FlexibleDiv>
          </FlexibleDiv>
          <FlexibleDiv className="rightSection">
            <FlexibleDiv className="authForm">
              <form id="myForm" onSubmit={handleFormSubmit}>
                <Input name={"firstname"} placeholder="First Name" required />
                <Input
                  name={"lastname"}
                  placeholder="Last Name"
                  required
                />{" "}
                <Input name={"email"} placeholder="Email" required />
                <Input.TextArea
                  name={"message"}
                  placeholder="Message*"
                  required
                ></Input.TextArea>
                <Button type="primary" htmlType="submit" width="100%">
                  {isLoading && <LoadingOutlined />}
                  Send Message
                </Button>
              </form>
              {/* <Form
                form={form}
                onFinish={handleFormSubmit}
                autocomplete="off"
                id="myform"
              >
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your first name",
                    },
                  ]}
                >
                  <Input autocomplete="off" placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your last name",
                    },
                  ]}
                >
                  <Input autocomplete="off" placeholder="Last Name" />
                </Form.Item>
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
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your message",
                    },
                  ]}
                >
                  <Input.TextArea autocomplete="off" placeholder="Messsage" />
                </Form.Item>
                <Button type="primary" htmlType="submit" width="100%">
                  {isLoading && <LoadingOutlined />}
                  Send Message
                </Button>
              </Form> */}
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ContactUsWrapper>
    </LandingLayout>
  );
};
export default ContactUsPage;
