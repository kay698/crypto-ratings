import React, { useState, useEffect } from "react";
import LandingLayout from "../../components/Layout";
import { FlexibleDiv } from "../../components/Box/styles";
import { CardTradePageWrapper } from "./styles";
import { Typography } from "antd";
import Button from "../../components/Button";
import CheckLine from "../../assets/svgs/checkline.svg";
import Star from "../../assets/svgs/star.svg";
import { useNavigate } from "react-router-dom";
import { getAllGiftCardCategories, getAllCrypto } from "../../network/cards";
import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";

const CardTradePage = () => {
  const [page] = useState(`page=1&perPage=1000`);
  const [activeCard, setActiveCard] = useState("GiftCards");
  let { isLoading, data: giftcardList } = useQuery(
    "giftCards",
    async () => await getAllGiftCardCategories(page)
  );
  let { isLoading: cryptoLoading, data: crypoList } = useQuery(
    "crypto",
    async () => await getAllCrypto(page)
  );
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user_token");

    if (user === null) {
      navigate("/login");
    }
  }, []);

  const getSingleCard = (val) => {
    if (activeCard === "Cryptocurrency") {
      navigate("/crypto-calculator", { state: { ...val } });
    } else {
      navigate("/giftcards-calculator", { state: { ...val } });
    }
  };

  return (
    <LandingLayout>
      <CardTradePageWrapper>
        <FlexibleDiv>
          <FlexibleDiv justifyContent="space-between">
            <FlexibleDiv
              flexDir="column"
              alignItems="flex-start"
              width="max-content"
              className="leftHeader"
            >
              <p>The Best Plug to –</p>
              <Typography.Title>
                Trade your <span>{activeCard}</span>{" "}
                <img alt="" src={Star} className="star" />
                <br /> for Cash Instantly.
              </Typography.Title>
              <img alt="" src={CheckLine} className="line" />
            </FlexibleDiv>
            {activeCard === "Cryptocurrency" && (
              <Button onClick={() => setActiveCard("GiftCards")} width="170px">
                GiftCards
              </Button>
            )}
            {activeCard === "GiftCards" && (
              <Button
                onClick={() => setActiveCard("Cryptocurrency")}
                width="170px"
              >
                Cryptocurrency
              </Button>
            )}
          </FlexibleDiv>

          {isLoading || cryptoLoading ? (
            <FlexibleDiv height="300px">
              <LoadingOutlined />
            </FlexibleDiv>
          ) : (
            <FlexibleDiv className="cardsWrap">
              {(!!giftcardList?.data?.length > 0 &&
                activeCard === "GiftCards") ||
              (crypoList?.data?.length > 0 &&
                activeCard === "Cryptocurrency") ? (
                <>
                  {" "}
                  {(activeCard === "GiftCards"
                    ? giftcardList?.data
                    : crypoList?.data
                  )?.map((item, idx) => (
                    <FlexibleDiv key={idx}>
                      <img src={item.logo} />
                      <Button
                        onClick={() => {
                          getSingleCard(item);
                        }}
                      >
                        Check Rate
                      </Button>
                    </FlexibleDiv>
                  ))}
                </>
              ) : (
                <FlexibleDiv height="300px">
                  <Typography.Title level={4}> No Cards Yet</Typography.Title>
                </FlexibleDiv>
              )}
            </FlexibleDiv>
          )}
        </FlexibleDiv>
      </CardTradePageWrapper>
    </LandingLayout>
  );
};
export default CardTradePage;
