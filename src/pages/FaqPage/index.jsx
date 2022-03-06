import React, { useEffect } from "react";
import LandingLayout from "../../components/Layout";
import { FaqWrapper } from "./styles";
import { FlexibleDiv } from "../../components/Box/styles";
import { faqs } from "../../utils/dataHelpers/faqs";
import { Collapse, Typography } from "antd";
import Button from "../../components/Button";
import { aboutUsIn } from "../../animations/about_us";
import splitting from "splitting";

const FaqPage = () => {
  useEffect(() => {
    setTimeout(() => {
      splitting({
        by: "words",
        target: "#about_us [data-splitting]",
      });
      aboutUsIn();
    }, 0);
  }, []);
  const { Panel } = Collapse;
  return (
    <LandingLayout>
      <FaqWrapper id="about_us">
        <FlexibleDiv justifyContent="flex-start" alignItems="flex-start">
          <Typography.Title data-splitting="">
            Frequently &nbsp;
            {/* <Button width="max-content">
              Speak to a customer care agent
            </Button>{" "} */}
            <br />
            Asked Questions
          </Typography.Title>
        </FlexibleDiv>
        <FlexibleDiv
          justifyContent="flex-start"
          margin="50px 0 0 0"
          alignItems="flex-start"
        >
          {faqs.map((item, idx) => (
            <Collapse>
              <Panel header={item.question} key={idx + 1}>
                <p>{item.answer}</p>
              </Panel>
            </Collapse>
          ))}
        </FlexibleDiv>
      </FaqWrapper>
    </LandingLayout>
  );
};
export default FaqPage;
