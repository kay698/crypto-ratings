import React, { useState, useEffect } from "react";
import { FlexibleDiv } from "../../components/Box/styles";
import { Typography, Form, Select } from "antd";
import Input from "../../components/TextField";
import Button from "../../components/Button";
import { getAllCrypto, getSingleCrypto } from "../../network/cards";
import { getCurrncy, formatMoney } from "../../utils/functionLibraries";
import RateCalculatorPage from ".";
import { LoadingOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const CryptoCalculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cryptoList, setCryptoList] = useState();
  const [singleCrypto, setSingleCrypto] = useState();
  const [finalAmount, setFinalAmount] = useState();
  const [finalQuantity, setFinalQuantity] = useState();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();
  const { state } = location;

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
    setIsPageLoading(true);
    const fetchData = async () => {
      await handleCryptoList();
      if (state?._id) {
        setSingleCrypto(state);
      }
      setIsPageLoading(false);
    };
    fetchData();
  }, []);
  const handleAmount = (e) => {
    const { value } = e.target;

    setFinalAmount(parseInt(value * singleCrypto?.amount));
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
              value={singleCrypto?.title}
            >
              {cryptoList?.map((value, index) => (
                <Select.Option value={value.title} key={index}>
                  <FlexibleDiv
                    justifyContent="flex-start"
                    style={{
                      padding: "0 0 15px 0",
                      borderBottom: "1px solid #eee",
                    }}
                    onClick={() => setSingleCrypto(value)}
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
                placeholder="100"
                type="number"
                onChange={handleAmount}
              />
            </Form.Item>
            <Form.Item name="phoneNumber">
              <Input
                autocomplete="off"
                placeholder="5"
                type="number"
                onChange={handleQuantity}
              />
            </Form.Item>
            <span className="currentTrading">
              Current trading rate:{" "}
              {singleCrypto?.amount && (
                <span>
                  {" "}
                  &#8358;{singleCrypto?.amount}{" "}
                  {getCurrncy(singleCrypto?.currency)}1
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
          <Button
            type="primary"
            htmlType="submit"
            width="100%"
            loading={isLoading}
          >
            Trade this card
          </Button>
        </>
      )}
    </RateCalculatorPage>
  );
};
export default CryptoCalculator;
