import React, { useState, useEffect } from "react";
import { FlexibleDiv } from "../../components/Box/styles";
import { Typography, Form, Select } from "antd";
import Input from "../../components/TextField";
import Button from "../../components/Button";
import { giftCardList } from "../../utils/dataHelpers/rateCalculator";
import { getAllCrypto } from "../../network/cards";
import RateCalculatorPage from ".";

const CryptoCalculator = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [cryptoList, setCryptoList] = useState();

  const handleCryptoList = async (val) => {
    const payload = `page=1&perPage=1000`;
    try {
      const { data } = await getAllCrypto(payload);
      setCryptoList(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const current = JSON.parse(localStorage.getItem("current_card"));

      if (current?.cardType === "Giftcards") {
        await handleCryptoList();
      }
    };
    fetchData();
  }, []);

  return (
    <RateCalculatorPage>
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

      <FlexibleDiv justifyContent="space-between" className="numbersWrap">
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
      <Button type="primary" htmlType="submit" width="100%" loading={isLoading}>
        Trade this card
      </Button>
    </RateCalculatorPage>
  );
};
export default CryptoCalculator;
