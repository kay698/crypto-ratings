import React from "react";
import LandingLayout from "../../components/Layout";
import { LandingPageWrapper } from "./styles";
import HeroSection from "./HeroSection";
import YourMoney from "./YourMoney";
import Security from "./Security";

const LandingPage = () => {
  return (
    <LandingLayout noPadding>
      <LandingPageWrapper>
        <HeroSection />
        <YourMoney />
        <Security />
      </LandingPageWrapper>
    </LandingLayout>
  );
};
export default LandingPage;
