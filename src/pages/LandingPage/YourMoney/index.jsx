import React from "react";
import { YourMoneyWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import Emojis from "../../../assets/svgs/emojis.svg";
import { Typography } from "antd";

const YourMoney = () => {
  return (
    <YourMoneyWrapper>
      <FlexibleDiv>
        <img src={Emojis} />
        <FlexibleDiv className="textWrap" flexDir="column">
          <Typography.Title>
            It’s your Money <br />
            It shouldn’t be delayed
          </Typography.Title>
          <span>No Scam. No Delay. Just Credit Alerts</span>
        </FlexibleDiv>
      </FlexibleDiv>
    </YourMoneyWrapper>
  );
};
export default YourMoney;
