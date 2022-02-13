import React from "react";
import LandingLayout from "../../components/Layout";
import { LandingPageWrapper } from "./styles";
import HeroSection from "./HeroSection";
import YourMoney from "./YourMoney";

const LandingPage = () => {
  return (
    <LandingLayout noPadding>
      <LandingPageWrapper>
        <HeroSection />
        <YourMoney />
      </LandingPageWrapper>
    </LandingLayout>
  );
};
export default LandingPage;
