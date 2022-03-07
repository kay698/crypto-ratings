import React, { useEffect } from "react";
import { CardsRangeWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import { bottomCards, topCards } from "../../../utils/dataHelpers/landingPage";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const CardsRange = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sponsorAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#cards_range",
        start: "bottom 100%",
      },
    });

    sponsorAnimation.to(".bottom", {
      x: -300,
      scrollTrigger: {
        scrub: true,
      },
    });

    sponsorAnimation.to(".top", {
      x: 300,
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);
  return (
    <CardsRangeWrapper id="cards_range">
      <FlexibleDiv>
        <FlexibleDiv className="textWrap" flexDir="column">
          <Typography.Title>
            A wide range of <br />
            giftcard accepted
          </Typography.Title>
          <span>No Scam. No Delay. Just Credit Alerts</span>
        </FlexibleDiv>
        <FlexibleDiv flexDir="column" className="rows-wrap">
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
      </FlexibleDiv>
    </CardsRangeWrapper>
  );
};
export default CardsRange;
