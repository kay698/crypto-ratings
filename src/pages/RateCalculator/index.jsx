import React, { useState, useEffect } from "react";
import LandingLayout from "../../components/Layout";
import { FlexibleDiv } from "../../components/Box/styles";
import { RateCalculatorWrapper } from "./styles";
import { Typography, Form, Select } from "antd";
import Rateimage from "../../assets/svgs/rate.svg";
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons";
import Input from "../../components/TextField";
import Button from "../../components/Button";
import {
  cardCategories,
  giftCardList,
} from "../../utils/dataHelpers/rateCalculator";
import { useNavigate } from "react-router-dom";

const RateCalculatorPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeCard, setActiveCard] = useState("giftcards");
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleFormSubmit = () => {};

  useEffect(() => {
    const user = localStorage.getItem("user_token");

    if (user === null) {
      navigate("/login");
    }
  }, []);

  return (
    <LandingLayout>
      <RateCalculatorWrapper>
        <FlexibleDiv className="calculatorWrap" alignItems="flex-start">
          <FlexibleDiv className="leftSection" flexDir="column">
            <p>
              Not sure how much you would get for your card or bitcoin trade?
              With our rate calcuator you can –
            </p>
            <Typography.Title>
              Check your Giftcards & Bitcoin Rate!
            </Typography.Title>

            <FlexibleDiv className="imageWrap" alignItems="flex-start">
              <img src={Rateimage} />
            </FlexibleDiv>
          </FlexibleDiv>
          <FlexibleDiv className="rightSection">
            <FlexibleDiv className="authForm">
              <Form form={form} onFinish={handleFormSubmit} autocomplete="off">
                <p>What rate would you like to check?</p>
                <FlexibleDiv justifyContent="flex-start">
                  <FlexibleDiv
                    className={
                      activeCard === "giftcards" ? "card active" : "card"
                    }
                    onClick={() => setActiveCard("giftcards")}
                  >
                    <p>Giftcards</p>
                  </FlexibleDiv>
                  <FlexibleDiv
                    className={activeCard === "crypto" ? "card active" : "card"}
                    margin="0 0 0 15px"
                    onClick={() => setActiveCard("crypto")}
                  >
                    <p>Cryptocurrency</p>
                  </FlexibleDiv>
                </FlexibleDiv>
                <Form.Item>
                  <Select placeholder="Select card category" listHeight={1000}>
                    {giftCardList.map((value, index) => (
                      <Select.Option value={value.title} key={index}>
                        <FlexibleDiv
                          justifyContent="flex-start"
                          style={{
                            padding: "0 0 15px 0",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {value.title}
                        </FlexibleDiv>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Select placeholder="Select pricing" listHeight={1000}>
                    {cardCategories.map((value, index) => (
                      <Select.Option value={value.title} key={index}>
                        <FlexibleDiv
                          justifyContent="flex-start"
                          style={{
                            padding: "0 0 15px 0",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {value.title}
                        </FlexibleDiv>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <FlexibleDiv
                  justifyContent="space-between"
                  className="numbersWrap"
                >
                  <Form.Item name="number">
                    <Input autocomplete="off" placeholder="100" type="number" />
                  </Form.Item>
                  <Form.Item name="phoneNumber">
                    <Input autocomplete="off" placeholder="5" type="number" />
                  </Form.Item>
                  <span className="currentTrading">
                    Current trading rate:<span> #390 / $1</span>
                  </span>
                </FlexibleDiv>

                <FlexibleDiv flexDir="column" margin="50px 0 20px 0">
                  <small>You would get</small>
                  <Typography.Title>&#8358; 195,000</Typography.Title>
                </FlexibleDiv>
                <Button type="primary" htmlType="submit" width="100%">
                  {isLoading && <LoadingOutlined />}
                  Trade this card
                </Button>
              </Form>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </RateCalculatorWrapper>
    </LandingLayout>
  );
};
export default RateCalculatorPage;
