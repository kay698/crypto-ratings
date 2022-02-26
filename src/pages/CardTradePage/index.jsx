import React, { useState, useEffect } from "react";
import LandingLayout from "../../components/Layout";
import { FlexibleDiv } from "../../components/Box/styles";
import { CardTradePageWrapper } from "./styles";
import { Typography } from "antd";
import Button from "../../components/Button";
import CheckLine from "../../assets/svgs/checkline.svg";
import Star from "../../assets/svgs/star.svg";
import {
  giftCardList,
  cryptoCardList,
} from "../../utils/dataHelpers/rateCalculator";
import { useNavigate } from "react-router-dom";

const CardTradePage = () => {
  const [activeCard, setActiveCard] = useState("GiftCards");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user_token");

    if (user === null) {
      navigate("/login");
    }
  }, []);

  return (
    <LandingLayout>
      <CardTradePageWrapper>
        <FlexibleDiv>
          <FlexibleDiv justifyContent="space-between">
            <FlexibleDiv
              flexDir="column"
              alignItems="flex-start"
              width="max-content"
              className="leftHeader"
            >
              <p>The Best Plug to –</p>
              <Typography.Title>
                Trade your <span>{activeCard}</span>{" "}
                <img alt="" src={Star} className="star" />
                <br /> for Cash Instantly.
              </Typography.Title>
              <img alt="" src={CheckLine} className="line" />
            </FlexibleDiv>
            {activeCard === "Cryptocurrency" && (
              <Button onClick={() => setActiveCard("GiftCards")} width="170px">
                GiftCards
              </Button>
            )}
            {activeCard === "GiftCards" && (
              <Button
                onClick={() => setActiveCard("Cryptocurrency")}
                width="170px"
              >
                Cryptocurrency
              </Button>
            )}
          </FlexibleDiv>

          <FlexibleDiv className="cardsWrap">
            {(activeCard === "GiftCards" ? giftCardList : cryptoCardList).map(
              (item, idx) => (
                <FlexibleDiv key={idx}>
                  <img src={item.logo} />
                  <Button
                    onClick={() => {
                      navigate.push("/rate-calculator");
                    }}
                  >
                    Check Rate
                  </Button>
                </FlexibleDiv>
              )
            )}
          </FlexibleDiv>
        </FlexibleDiv>
      </CardTradePageWrapper>
    </LandingLayout>
  );
};
export default CardTradePage;
