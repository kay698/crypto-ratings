import React, { useEffect } from "react";
import { TestimonialsWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import { testimonials } from "../../../utils/dataHelpers/landingPage";
import { IoLogoInstagram as Instagram } from "react-icons/io";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Testimonials = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sponsorAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "bottom 100%",
      },
    });
    sponsorAnimation.from(".comment", {
      boxShadow: "none",
      transform: "rotate(0deg)",
      scrollTrigger: {
        scrub: true,
      },
    });

    sponsorAnimation.to(".comment", {
      boxShadow: " 1em 2em 3.5em -2.5em rgba(0, 0, 0, 0.335)",
      transform: "rotate3d(0.5, 0.866, 0, -25deg) rotate(1deg)",

      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);
  return (
    <TestimonialsWrapper id="testimonials">
      <FlexibleDiv>
        <FlexibleDiv className="textWrap" flexDir="column">
          <Typography.Title>
            What our Happy <br />
            customers say about us
          </Typography.Title>
          <span>No Scam. No Delay. Just Credit Alerts</span>
        </FlexibleDiv>

        <FlexibleDiv
          className="commentsWrap"
          // justifyContent="flex-start"
          width="95%"
        >
          <FlexibleDiv className="overlay"></FlexibleDiv>
          {testimonials.map((item, idx) => (
            <FlexibleDiv
              flexDir="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              className="comment"
            >
              <FlexibleDiv flexWrap="nowrap" alignItems="flex-start">
                <div className="imageWrap">
                  <img src={item.image} alt="" />
                </div>
                <FlexibleDiv flexDir="column" alignItems="flex-start">
                  <Typography.Title level={5}>{item.username}</Typography.Title>
                  <span>
                    <Instagram width="20" height="20" color="#bbb" />
                    {item.channel}
                  </span>
                </FlexibleDiv>
              </FlexibleDiv>
              <p>{item.comment}</p>
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </TestimonialsWrapper>
  );
};
export default Testimonials;
