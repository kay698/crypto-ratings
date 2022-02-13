import React from "react";
import LandingLayout from "../../../components/Layout";
import { FlexibleDiv } from "../../../components/Box/styles";
import { AboutWrapper } from "./styles";
import { Typography } from "antd";
import Mission from "../../../assets/svgs/mission.svg";
import Values from "../../../assets/svgs/values.svg";
import Vision from "../../../assets/svgs/vision.svg";

const AboutPage = () => {
  return (
    <LandingLayout>
      <AboutWrapper>
        <FlexibleDiv className="wrap" alignItems="flex-start">
          <FlexibleDiv className="leftSection" flexDir="column">
            <Typography.Title>
              We are iRaters and <br />
              we’re here built to serve you better
            </Typography.Title>
            <p>
              iRaters was founded in Lorem Ipsum. We are one of the fastest
              growing giftcard and crypto trading company in Nigeria.
              <br /> <br />
              Trade your Giftcards & Bitcoin for Cash Instantly. Trading your
              giftcards & bitcoin for cash has never been easy. Trade securely
              with no worries or delay. Receive alert of your trades in less
              than 2 mins.
              <br /> <br />
              Trade your Giftcards & Bitcoin for Cash Instantly. Trading your
              giftcards & bitcoin for cash has never been easy. Trade securely
              with no worries or delay. Receive alert of your trades in less
              than 2 mins. Trade your Giftcards & Bitcoin for Cash Instantly.
              Trading your giftcards & bitcoin for cash has never been easy.
            </p>

            <FlexibleDiv className="aboutCard cardOne" alignItems="flex-start">
              <Typography.Title level={3}>Our Mission</Typography.Title>
              <FlexibleDiv className="image">
                <img src={Mission} />
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
          <FlexibleDiv className="rightSection">
            <FlexibleDiv className="aboutCard cardTwo" alignItems="flex-start">
              <Typography.Title level={3}>Our Values</Typography.Title>
              <FlexibleDiv className="image">
                <img src={Values} />
              </FlexibleDiv>
            </FlexibleDiv>{" "}
            <FlexibleDiv className="lastCardWrap">
              <FlexibleDiv
                className="aboutCard cardThree"
                alignItems="flex-start"
              >
                <Typography.Title level={3}>Our Vision</Typography.Title>
                <FlexibleDiv className="image">
                  <img src={Vision} />
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </AboutWrapper>
    </LandingLayout>
  );
};
export default AboutPage;
