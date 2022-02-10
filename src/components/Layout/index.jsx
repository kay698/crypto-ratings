import React from "react";
// import { Layout } from "antd";
import { LayoutWrap } from "./styles";
import LandingHeader from "./Header";
import LandingFooter from "./Footer";
import "antd/dist/antd.css";

const LandingLayout = ({ children }) => {
  // const { Content } = Layout;

  return (
    <LayoutWrap>
      {/* <div className="layout"> */}
      <LandingHeader />
      <main className="layout__main">{children}</main>
      <LandingFooter />
      {/* </div> */}
    </LayoutWrap>
  );
};

export default LandingLayout;
