import React, { useState, useEffect } from "react";
import { FlexibleDiv } from "../../components/Box/styles";
import { Typography, Form, Select } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Input from "../../components/TextField";
import Button from "../../components/Button";
import { getAllGiftCardCategories, getAllGiftCards } from "../../network/cards";
import RateCalculatorPage from ".";

const GiftcardCalculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isPageLoading, setIsPageLoading] = useState(false);
  // const [categoryLoading, setCategoryLoading] = useState(false);
  const [giftcardCategories, setGiftcardCategory] = useState();
  const [singleGifcard, setSingleGiftcard] = useState();
  const [giftCardRate, setGiftcardRate] = useState();

  const handleGiftCardCategories = async (val) => {
    const payload = `page=1&perPage=1000`;
    try {
      const { data } = await getAllGiftCardCategories(payload);
      setGiftcardCategory(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getSingleGiftCardCategory = async (val) => {
    const payload = {
      giftCardCategoryId: val?._id,
      page: 1,
      perPage: 1000,
    };
    try {
      const { data } = await getAllGiftCards(payload);
      setSingleGiftcard(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const current = JSON.parse(localStorage.getItem("current_card"));
      await handleGiftCardCategories();
      if (current?.cardType) {
        await getSingleGiftCardCategory(current);
      }
    };
    fetchData();
  }, []);

  const getGiftcardRate = async (val) => {
    setGiftcardRate(val);
  };

  return (
    <RateCalculatorPage>
      <Form.Item>
        <Select
          placeholder="Select card category"
          listHeight={1000}
          value={singleGifcard?.title}
        >
          {giftcardCategories?.map((value, index) => (
            <Select.Option key={index}>
              <FlexibleDiv
                justifyContent="flex-start"
                style={{
                  padding: "0 0 15px 0",
                  borderBottom: "1px solid #eee",
                }}
                onClick={() => getSingleGiftCardCategory(value)}
              >
                {value.title}
              </FlexibleDiv>
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Select placeholder="Select pricing" listHeight={1000}>
          {singleGifcard?.giftcards?.map((value, index) => (
            <Select.Option value={value.title} key={index}>
              <FlexibleDiv
                justifyContent="flex-start"
                style={{
                  padding: "0 0 15px 0",
                  borderBottom: "1px solid #eee",
                }}
                onClick={() => getGiftcardRate(value)}
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
      <Button type="primary" htmlType="submit" width="100%">
        {isLoading && <LoadingOutlined />}
        Trade this card
      </Button>
    </RateCalculatorPage>
  );
};
export default GiftcardCalculator;
