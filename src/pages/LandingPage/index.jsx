import React from "react";
import LandingLayout from "../../components/Layout";
import { LandingPageWrapper } from "./styles";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  return (
    <LandingLayout noPadding>
      <LandingPageWrapper>
        <HeroSection />
      </LandingPageWrapper>
    </LandingLayout>
  );
};
export default LandingPage;
