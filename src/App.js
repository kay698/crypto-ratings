import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/ScrollManager";
import "antd/dist/antd.css";
import Signup from "./pages/Auth/signup";
import Login from "./pages/Auth/login";
import ResetPassword from "./pages/Auth/reset-password";
import ForgotPassword from "./pages/Auth/forgot-password";
import FaqPage from "./pages/LandingPage/FaqPage";
import ContactUsPage from "./pages/LandingPage/ContactPage";
import AboutPage from "./pages/LandingPage/AboutPage";
import RateCalculator from "./pages/LandingPage/RateCalculator";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/rate-calculator" element={<RateCalculator />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
