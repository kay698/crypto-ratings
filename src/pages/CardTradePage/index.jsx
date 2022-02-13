import React, { useState } from "react";
import LandingLayout from "../../components/Layout";
import { FlexibleDiv } from "../../components/Box/styles";
import { CardTradePageWrapper } from "./styles";
import { Typography } from "antd";
import Button from "../../components/Button";
import CheckLine from "../../assets/svgs/checkline.svg";
import Star from "../../assets/svgs/star.svg";

const CardTradePage = () => {
  const [activeCard, setActiveCard] = useState("GiftCards");

  console.log(activeCard);
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
                Trade your <span>Giftcards</span>{" "}
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
        </FlexibleDiv>
      </CardTradePageWrapper>
    </LandingLayout>
  );
};
export default CardTradePage;
