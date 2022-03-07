import React, { useEffect } from "react";
import { SecurityWrapper } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import Emojis from "../../../assets/svgs/emojis.svg";
import { Typography } from "antd";
import { safetyData } from "../../../utils/dataHelpers/landingPage";
import splitting from "splitting";

const Security = () => {
  useEffect(() => {
    splitting({ by: "words", target: "#security [data-splitting]" });
  }, []);
  return (
    <SecurityWrapper id="security">
      <FlexibleDiv>
        <FlexibleDiv className="mainWrap" justifyContent="space-between">
          {safetyData.map((item, id) => (
            <FlexibleDiv flexDir="column" className={id === 1 && "lowerItem"}>
              <img src={item.image} alt="" />
              <Typography.Title level={3} data-splitting="">
                {item.title}
              </Typography.Title>
              <span data-splitting="">{item.content}</span>
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </SecurityWrapper>
  );
};
export default Security;
