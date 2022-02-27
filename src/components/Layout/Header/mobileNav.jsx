import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { LandingMenuList } from "../../../utils/dataHelpers/landingMenuItems";
import { MobileWrap } from "./styles";
import { FlexibleDiv } from "../../Box/styles";
import Logo from "../../../assets/pngs/logo.png";
import Button from "../../Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";

const MobileNav = ({ setShowMenu, showMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user_token");
    if (!!user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    navigate("/login");
  };
  return (
    <MobileWrap showMenu={showMenu}>
      <FlexibleDiv className="mobileHeader">
        <FlexibleDiv
          className="mobileHeader__sub"
          height="100%"
          flexDir="column"
        >
          <FlexibleDiv className="mobileHeader__logoAndMenuIconWrap">
            <FlexibleDiv
              justifyContent="space-between"
              height="80px"
              bgColor="red"
              width="94%"
            >
              <Link to="/" target="">
                <div className="mobileHeader__logoWrap menuOpen">
                  <img alt="" src={Logo} />
                </div>
              </Link>
            </FlexibleDiv>
          </FlexibleDiv>
          <FlexibleDiv flexDir="column" className="mobileHeader__itemsWrap">
            <FlexibleDiv
              className="mobileHeader__listWrap"
              width="80%"
              justifyContent="flex-start"
            >
              <Menu>
                {LandingMenuList.map((item, index) => (
                  <Menu.Item
                    key={index}
                    onClick={() => {
                      navigate(item.to);
                    }}
                  >
                    {item.icon}
                    {item.title}
                  </Menu.Item>
                ))}

                {isLoggedIn ? (
                  <>
                    {location.pathname === "/trade-card" ? (
                      <Menu.Item
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        <RiArrowGoBackLine
                          style={{
                            marginBottom: "-2px",
                          }}
                        />
                        Go back to main website
                      </Menu.Item>
                    ) : (
                      <Menu.Item
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        Cards
                      </Menu.Item>
                    )}
                  </>
                ) : (
                  <Menu.Item
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Menu.Item>
                )}
              </Menu>
            </FlexibleDiv>
            {}

            <FlexibleDiv
              width="max-content"
              height="120px"
              justifyContent="space-between"
              flexDir="column"
              className="mobileHeader__buttonsWrap"
            >
              {isLoggedIn ? (
                <Button
                  height="50px"
                  background="red"
                  boxShadow=" 0px 30px 70px rgba(232, 19, 19, 0.3);"
                  hover="red"
                  onClick={handleLogout}
                >
                  Logout{" "}
                  <AiOutlineLogout
                    style={{
                      margin: "0 0 -3px 5px",
                      color: "#fff",
                    }}
                  />
                </Button>
              ) : (
                <Button height="50px" onClick={() => navigate("/signup")}>
                  Register
                </Button>
              )}
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </MobileWrap>
  );
};

export default MobileNav;
