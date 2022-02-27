import React, { useState, useEffect } from "react";
import { FlexibleDiv } from "../../components/Box/styles";
import { Typography, Form, Select } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Input from "../../components/TextField";
import Button from "../../components/Button";
import { getAllGiftCardCategories, getAllGiftCards } from "../../network/cards";
import RateCalculatorPage from ".";
import { useLocation } from "react-router-dom";
import { getCurrncy, formatMoney } from "../../utils/functionLibraries";

const GiftcardCalculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [giftcardCategories, setGiftcardCategory] = useState();
  const [singleGifcardCategory, setSingleGiftcardCategory] = useState();
  const [giftCardRate, setGiftcardRate] = useState();
  const [finalAmount, setFinalAmount] = useState();
  const [finalQuantity, setFinalQuantity] = useState();

  const location = useLocation();
  const { state } = location;

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
      setSingleGiftcardCategory(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setIsPageLoading(true);
    const fetchData = async () => {
      await handleGiftCardCategories();
      if (state?._id) {
        await getSingleGiftCardCategory(state);
      }
      setIsPageLoading(false);
    };
    fetchData();
  }, []);

  const getGiftcardRate = async (val) => {
    setGiftcardRate(val);
  };

  const handleAmount = (e) => {
    const { value } = e.target;

    setFinalAmount(parseInt(value * giftCardRate?.amount));
  };

  const handleQuantity = (e) => {
    const { value } = e.target;

    setFinalQuantity(parseInt(value * finalAmount));
  };

  return (
    <RateCalculatorPage>
      {isPageLoading ? (
        <FlexibleDiv height="200px">
          <LoadingOutlined />
        </FlexibleDiv>
      ) : (
        <>
          <Form.Item>
            <Select
              placeholder="Select card category"
              listHeight={1000}
              value={singleGifcardCategory?.title}
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
            <Select
              placeholder="Select pricing"
              listHeight={1000}
              value={giftCardRate?.title}
            >
              {singleGifcardCategory?.giftcards?.map((value, index) => (
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
              <Input
                autocomplete="off"
                placeholder="Card Value"
                type="number"
                onChange={handleAmount}
              />
            </Form.Item>
            <Form.Item name="phoneNumber">
              <Input
                autocomplete="off"
                placeholder="Quantity"
                type="number"
                onChange={handleQuantity}
              />
            </Form.Item>
            <span className="currentTrading">
              Current trading rate:
              {giftCardRate?.amount && (
                <span>
                  {" "}
                  &#8358;{giftCardRate?.amount}{" "}
                  {getCurrncy(giftCardRate?.currency)}1
                </span>
              )}
            </span>
          </FlexibleDiv>

          <FlexibleDiv flexDir="column" margin="50px 0 20px 0">
            <small>You would get</small>
            <Typography.Title>
              &#8358; {formatMoney(finalQuantity || finalAmount)}
            </Typography.Title>
          </FlexibleDiv>
          <Button type="primary" htmlType="submit" width="100%">
            {isLoading && <LoadingOutlined />}
            Trade this card
          </Button>
        </>
      )}
    </RateCalculatorPage>
  );
};
export default GiftcardCalculator;
