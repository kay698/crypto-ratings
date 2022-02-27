import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/ScrollManager";
import "antd/dist/antd.css";
import Signup from "./pages/Auth/signup";
import Login from "./pages/Auth/login";
import ResetPassword from "./pages/Auth/reset-password";
import ForgotPassword from "./pages/Auth/forgot-password";
import FaqPage from "./pages/FaqPage";
import ContactUsPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import GiftcardCalculator from "./pages/RateCalculator/giftcards";
import CryptoCalculator from "./pages/RateCalculator/crypto";
import CardTradePage from "./pages/CardTradePage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
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
              <Route
                path="/giftcards-calculator"
                element={<GiftcardCalculator />}
              />
              <Route path="/crypto-calculator" element={<CryptoCalculator />} />
              <Route path="/trade-card" element={<CardTradePage />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
