import React from "react";
import LandingLayout from "../../components/Layout";
import { FaqWrapper } from "./styles";
import { FlexibleDiv } from "../../components/Box/styles";
import { faqs } from "../../utils/dataHelpers/faqs";
import { Collapse, Typography } from "antd";
import Button from "../../components/Button";

const FaqPage = () => {
  const { Panel } = Collapse;
  return (
    <LandingLayout>
      <FaqWrapper>
        <FlexibleDiv justifyContent="flex-start" alignItems="flex-start">
          <Typography.Title>
            Frequently &nbsp;
            <Button width="max-content">
              Speak to a customer care agent
            </Button>{" "}
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
