import React, { useEffect, useRef, useState } from "react";
import { YourMoneyWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import Emojis from "../../../assets/svgs/emojis.svg";
import { Typography } from "antd";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const YourMoney = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sponsorAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#your_money",
        start: "top center",
      },
    });
    sponsorAnimation.from(".emojis", {
      opacity: 0,
      scale: 0.5,
    });

    sponsorAnimation.to(".emojis", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
    });
  }, []);

  return (
    <YourMoneyWrapper id="your_money">
      <FlexibleDiv>
        <FlexibleDiv className="emojis" width="80%">
          <img src={Emojis} alt="" />
        </FlexibleDiv>
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
