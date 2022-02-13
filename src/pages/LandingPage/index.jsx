import React from "react";
import LandingLayout from "../../components/Layout";
import { LandingPageWrapper } from "./styles";
import { FlexibleDiv } from "../../components/Box/styles";
import { Typography } from "antd";
import HeroCards from "../../assets/pngs/hero-cards.png";

const LandingPage = () => {
  return (
    <LandingLayout noPadding>
      <LandingPageWrapper>
        <FlexibleDiv>
          <FlexibleDiv flexDir="column" className="hero">
            <p>The Best Plug to –</p>
            <Typography.Title>
              Trade your <span>Giftcards</span> & <span>Bitcoin</span> for Cash
              Instantly.
            </Typography.Title>
            <span>
              Trading your giftcards & bitcoin for cash has never been easy.
              Trade securely with no worries or delay. Receive alert of your
              trades in less than 2 mins.
            </span>
            <img src={HeroCards} alt="" />
          </FlexibleDiv>
        </FlexibleDiv>
      </LandingPageWrapper>
    </LandingLayout>
  );
};
export default LandingPage;
