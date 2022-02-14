import React from "react";
import { CardsRangeWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import { bottomCards, topCards } from "../../../utils/dataHelpers/landingPage";

const CardsRange = () => {
  return (
    <CardsRangeWrapper>
      <FlexibleDiv>
        <FlexibleDiv className="textWrap" flexDir="column">
          <Typography.Title>
            A wide range of <br />
            giftcard accepted
          </Typography.Title>
          <span>No Scam. No Delay. Just Credit Alerts</span>
        </FlexibleDiv>
        <FlexibleDiv flexWrap="nowrap" className="row bottom">
          {bottomCards.map((image, idx) => (
            <FlexibleDiv>
              <img src={image.logo} alt="" />
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
        <FlexibleDiv flexWrap="nowrap" className="row top">
          {topCards.map((image, idx) => (
            <FlexibleDiv>
              <img src={image.logo} alt="" />
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </CardsRangeWrapper>
  );
};
export default CardsRange;
