import React, { useState, useEffect } from "react";
import LandingLayout from "../../components/Layout";
import { FlexibleDiv } from "../../components/Box/styles";
import { RateCalculatorWrapper } from "./styles";
import { Typography, Form } from "antd";
import Rateimage from "../../assets/svgs/rate.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { aboutUsIn } from "../../animations/about_us";
import splitting from "splitting";

const RateCalculatorPage = ({ children }) => {
  const location = useLocation();
  const [activeCard, setActiveCard] = useState("Giftcards");
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    const user = localStorage.getItem("user_token");
    if (user === null) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      splitting({
        by: "words",
        target: "#about_us [data-splitting]",
      });
      aboutUsIn();
    }, 0);
  }, []);

  useEffect(() => {
    if (location.pathname === "/giftcards-calculator") {
      setActiveCard("Giftcards");
    } else {
      setActiveCard("Crypto");
    }
  }, []);

  return (
    <LandingLayout>
      <RateCalculatorWrapper id="about_us">
        <FlexibleDiv className="calculatorWrap" alignItems="flex-start">
          <FlexibleDiv className="leftSection" flexDir="column">
            <p>
              Not sure how much you would get for your card or bitcoin trade?
              With our rate calcuator you can –
            </p>
            <Typography.Title data-splitting="">
              Check your Giftcards & Bitcoin Rate!
            </Typography.Title>

            <FlexibleDiv className="imageWrap" alignItems="flex-start">
              <img src={Rateimage} />
            </FlexibleDiv>
          </FlexibleDiv>
          <FlexibleDiv className="rightSection">
            <FlexibleDiv className="authForm">
              <Form form={form} autocomplete="off">
                <p>What rate would you like to check?</p>
                <FlexibleDiv justifyContent="flex-start">
                  <FlexibleDiv
                    className={
                      activeCard === "Giftcards" ? "card active" : "card"
                    }
                    onClick={() => navigate("/giftcards-calculator")}
                  >
                    <p>Giftcards</p>
                  </FlexibleDiv>
                  <FlexibleDiv
                    className={activeCard === "Crypto" ? "card active" : "card"}
                    margin="0 0 0 15px"
                    onClick={() => navigate("/crypto-calculator")}
                  >
                    <p>Cryptocurrency</p>
                  </FlexibleDiv>
                </FlexibleDiv>
                {children}
              </Form>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </RateCalculatorWrapper>
    </LandingLayout>
  );
};
export default RateCalculatorPage;
