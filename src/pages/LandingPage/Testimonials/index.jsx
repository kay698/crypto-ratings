import React from "react";
import { TestimonialsWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import { testimonials } from "../../../utils/dataHelpers/landingPage";
import { IoLogoInstagram as Instagram } from "react-icons/io";

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
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
