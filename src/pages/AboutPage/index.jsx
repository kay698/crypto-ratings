import React, { useEffect } from "react";
import LandingLayout from "../../components/Layout";
import { FlexibleDiv } from "../../components/Box/styles";
import { AboutWrapper } from "./styles";
import { Typography } from "antd";
import Mission from "../../assets/svgs/mission.svg";
import Values from "../../assets/svgs/values.svg";
import Vision from "../../assets/svgs/vision.svg";
import { aboutUsIn } from "../../animations/about_us";
import splitting from "splitting";

const AboutPage = () => {
  useEffect(() => {
    setTimeout(() => {
      splitting({
        by: "words",
        target: "#about_us [data-splitting]",
      });
      aboutUsIn();
    }, 0);
  }, []);

  return (
    <LandingLayout>
      <AboutWrapper id="about_us">
        <FlexibleDiv className="wrap" alignItems="flex-start">
          <FlexibleDiv className="leftSection" flexDir="column">
            <Typography.Title data-splitting="">
              We are iRaters and <br />
              we’re here built to serve you better
            </Typography.Title>
            <p>
              iRaters was founded in Oct 19th, 2020. We are one of the fastest
              growing giftcard and crypto trading company in Nigeria.
              <br /> <br />
              Trade your Giftcards & Bitcoin for Cash Instantly. Trading your
              giftcards & bitcoin for cash has never been easy. Trade securely
              with no worries or delay. Receive alert of your trades in less
              than 2 mins.
            </p>

            <FlexibleDiv className="aboutCard cardOne" alignItems="flex-start">
              <Typography.Title level={3}>Our Mission</Typography.Title>
              <p>
                Our mission is to become solution providers to individuals or
                brands having difficulties in turning their digital assets into
                instant cash.
              </p>
              <FlexibleDiv className="image">
                <img src={Mission} />
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
          <FlexibleDiv className="rightSection">
            <FlexibleDiv className="aboutCard cardTwo" alignItems="flex-start">
              <Typography.Title level={3}>Our Values</Typography.Title>
              <p>
                Our core value is customer satisfaction through Integrity,
                honesty and excellence.
              </p>
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
                <p>
                  Our vision is to be among the top 3 digital assets brands in
                  Africa within the shortest period of time
                </p>
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
