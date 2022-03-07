import React, { useEffect, useState } from "react";
import { FooterWrap } from "./styles";
import { FlexibleDiv } from "../../Box/styles";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import Lines from "../../../assets/svgs/coming-soon-lines.svg";
import Apple from "../../../assets/svgs/apple.svg";
import Google from "../../../assets/svgs/google-play.svg";
import ComingSoon from "../../../assets/svgs/coming-soon.svg";
import Logo from "../../../assets/svgs/logo-white.svg";
import Hetical from "../../../assets/pngs/hetical.png";
import Button from "../../Button";
import Input from "../../TextField";
import { Twitter, Instagram, Facebook } from "../../../assets/svgs/exports";
import { comingSoonIn } from "../../../animations/comin_soon";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";

const LandingFooter = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onReset = () => {
    document.getElementById("myform").reset();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const templateID = process.env.REACT_APP_EMAILJS_WAITLIST_TEMPLATE_ID;
    await emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        notification.open({
          message: "Hi There",
          description: "Thanks For Joining Our Waitlist",
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
  useEffect(() => {
    comingSoonIn();
  }, []);

  const { Title, Text, Paragraph } = Typography;
  return (
    <FooterWrap id="coming_soon">
      <FlexibleDiv flexDir="column">
        {/* coming soon section */}
        <FlexibleDiv
          className="comingSoon"
          justifyContent="space-between"
          flexWrap="nowrap"
        >
          {/* coming soon left section */}
          <FlexibleDiv
            width="40%"
            flexDir="column"
            alignItems="flex-start"
            className="leftSection"
          >
            <Title level={4}>iRaters Mobile App</Title>
            <Title level={1}>Coming Soon!</Title>
            <p>
              Be the first to know when we launch our mobile app. Join our
              waitlist and get notified right in your inbox
            </p>
            <FlexibleDiv
              justifyContent="space-between"
              width="350px"
              className="downloadLinks-wrap"
            >
              <FlexibleDiv className="downloadLinks">
                <img src={Apple} alt="" />
                <small>
                  Coming soon on <br /> <b>App Store</b>
                </small>
              </FlexibleDiv>
              <FlexibleDiv className="downloadLinks">
                <img src={Google} alt="" />
                <small>
                  Coming soon on <br /> <b>Google Playstore</b>
                </small>
              </FlexibleDiv>
            </FlexibleDiv>

            <FlexibleDiv flexWrap="nowrap" height="150px">
              <form
                id="myform"
                onSubmit={handleFormSubmit}
                className="formWrap"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Input
                  width="65%"
                  placeholder="Email Address"
                  name={"email"}
                  required
                />
                <Button width="200px" loading={isLoading} htmlType="submit">
                  Join our App waitlist
                </Button>
              </form>
            </FlexibleDiv>
          </FlexibleDiv>

          {/* coming soon right section */}
          <FlexibleDiv width="50%" className="rightSection">
            <img src={ComingSoon} alt="" />
          </FlexibleDiv>
          <img src={Lines} alt="" className="lines" />
        </FlexibleDiv>

        {/* footer main */}
        <FlexibleDiv className="footerMain">
          <FlexibleDiv
            className="landingPageFooter"
            flexDir="column"
            alignItems="flex-start"
          >
            <div className="landingPageFooter__logoWrap">
              <img alt="" src={Logo} />
            </div>
            <FlexibleDiv
              justifyContent="space-between"
              className="landingPageFooter__sub"
              flexWrap="no-wrap"
              alignItems="flex-start"
            >
              <FlexibleDiv flexDir="column" alignItems="flex-start">
                <p>
                  ©2022 iRaters Nigeria Limited <br />
                  <Text>
                    <Link to="/"> Terms of service | </Link>
                    <Link to="/">Privacy policy</Link>
                  </Text>
                </p>

                <p>
                  iRaters.ng is crafted to trade trade, buy & sell giftcards and
                  bitcoins, at the best rates and get paid instantly into your
                  bank account.
                </p>
              </FlexibleDiv>
              <FlexibleDiv flexDir="column" alignItems="flex-start">
                <Title level={5}>Quick Links</Title>
                <FlexibleDiv
                  justifyContent="space-between"
                  height="35px"
                  alignItems="flex-start"
                >
                  <Link to="/giftcards-calculator">Rate Calculator</Link>
                  <Link to="/faq">FAQs</Link>
                </FlexibleDiv>
                <FlexibleDiv justifyContent="space-between">
                  <Link to="/contact-us">Contact </Link>
                  <Link to="/about-us">About </Link>
                </FlexibleDiv>
              </FlexibleDiv>
              <FlexibleDiv flexDir="column" alignItems="flex-start">
                <Title level={5}>Get in touch</Title>
                <p>+234 (0)704 148 8189</p>
                <p>iratersworld@gmail.com</p>
                <FlexibleDiv justifyContent="space-between" width="150px">
                  <a href="https://www.facebook.com/iraters.ng">
                    <Facebook />
                  </a>
                  <a href="https://www.instagram.com/iraters.ng/">
                    <Instagram />
                  </a>

                  <a href="https://twitter.com/iratersn">
                    <Twitter />
                  </a>
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
            <FlexibleDiv
              justifyContent="flex-start"
              alignItems="flex-end"
              height="70px"
            >
              <img src={Hetical} alt="" />
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </FooterWrap>
  );
};

export default LandingFooter;
