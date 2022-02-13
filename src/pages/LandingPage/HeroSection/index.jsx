import React from "react";
import { HeroSectionWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import HeroCards from "../../../assets/pngs/hero-cards.png";
import Star from "../../../assets/svgs/star.svg";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <FlexibleDiv>
        <FlexibleDiv flexDir="column" className="heroSection">
          <p>The Best Plug to –</p>
          <Typography.Title>
            Trade your <span>Giftcards</span> & <span>Bitcoin</span> for Cash
            Instantly.
          </Typography.Title>
          <img alt="" src={Star} className="star" />
          <span>
            Trading your giftcards & bitcoin for cash has never been easy. Trade
            securely with no worries or delay. Receive alert of your trades in
            less than 2 mins.
          </span>
          <img src={HeroCards} alt="" />
        </FlexibleDiv>
      </FlexibleDiv>
    </HeroSectionWrapper>
  );
};
export default HeroSection;