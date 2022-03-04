import React, { useEffect } from "react";
import { HeroSectionWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import HeroCards from "../../../assets/pngs/hero-cards.png";
import Star from "../../../assets/svgs/star.svg";
import CheckLine from "../../../assets/svgs/checkline.svg";
import { heroSectionIn } from "../../../animations/hero_section";
import splitting from "splitting";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => {
      splitting({
        by: "words",
        target: "#hero_section [data-splitting]",
      });
      heroSectionIn();
    }, 0.5);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sponsorAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero_section",
        start: "bottom 100%",
      },
    });

    sponsorAnimation.to("#a-six_img", {
      y: -150,
      scale: 0.3,

      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);

  return (
    <HeroSectionWrapper id="hero_section">
      <FlexibleDiv>
        <FlexibleDiv flexDir="column" className="heroWrap">
          <p data-splitting="">The Best Plug to –</p>
          <Typography.Title>
            Trade your <span>Giftcards</span> & <br /> <span>Bitcoin</span> for
            Cash Instantly.
            <img src={CheckLine} alt="" />
          </Typography.Title>
          <img alt="" src={Star} className="star" />
          <span data-splitting="">
            {" "}
            Trading your giftcards & bitcoin for cash has never been easy. Trade
            securely with no worries or delay. Receive alert of your trades in
            less than 2 mins.
          </span>
          <img src={HeroCards} alt="" id="a-six_img" />
        </FlexibleDiv>
      </FlexibleDiv>
    </HeroSectionWrapper>
  );
};
export default HeroSection;
