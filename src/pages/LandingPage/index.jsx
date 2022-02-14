import React from "react";
import LandingLayout from "../../components/Layout";
import { LandingPageWrapper } from "./styles";
import HeroSection from "./HeroSection";
import YourMoney from "./YourMoney";
import Security from "./Security";
import CardsRange from "./CardsRange";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <LandingLayout noPadding>
      <LandingPageWrapper>
        <HeroSection />
        <YourMoney />
        <Security />
        <CardsRange />
        <Testimonials />
      </LandingPageWrapper>
    </LandingLayout>
  );
};
export default LandingPage;
