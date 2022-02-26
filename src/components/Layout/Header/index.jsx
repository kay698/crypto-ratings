import React, { useEffect, useRef, useState } from "react";
import { Menu } from "antd";
import { LandingMenuList } from "../../../utils/dataHelpers/landingMenuItems";
import { HeaderWrap } from "./styles";
import { FlexibleDiv } from "../../Box/styles";
import Logo from "../../../assets/svgs/logo.svg";
import Button from "../../Button";
import MobileNav from "./mobileNav";
import { throttle } from "lodash";
import { useLocation, Link, useNavigate } from "react-router-dom";
import LogoWhite from "../../../assets/svgs/logo-white.svg";
import { AiOutlineLogout } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";

const LandingHeader = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleShowMenu = () => setShowMenu(!showMenu);

  const isActive = (value) => location.pathname === value;

  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 60;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", throttle(handleScroll, 100));
    return () => {
      document.removeEventListener("scroll", throttle(handleScroll, 100));
    };
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user_token");
    if (!!user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <HeaderWrap showMenu={showMenu}>
      <FlexibleDiv className="desktopHeader">
        <FlexibleDiv
          justifyContent="space-between"
          className="desktopHeader__sub"
          width="90%"
          alignItems="flex-end"
          flexWrap="no-wrap"
        >
          <Link to="/" target="">
            <div className="desktopHeader__logoWrap">
              {location.pathname === "/" ? (
                <img alt="" src={LogoWhite} />
              ) : (
                <img alt="" src={Logo} />
              )}
            </div>
          </Link>
          <FlexibleDiv
            width="70%"
            flexWrap="no-wrap"
            className="desktopHeader__itemsWrap"
          >
            <Menu>
              {LandingMenuList.map((item, index) => (
                <Menu.Item
                  key={index}
                  style={{
                    fontWeight: isActive(item.to) && "600",
                    color: location.pathname === "/" ? "#fff" : "#006eef",
                  }}
                  onClick={() => {
                    navigate(item.to);
                  }}
                >
                  {item.title}
                </Menu.Item>
              ))}
            </Menu>
          </FlexibleDiv>
          {!!isLoggedIn ? (
            <FlexibleDiv width="max-content" flexWrap="no-wrap">
              {location.pathname === "/trade-card" ? (
                <Link
                  to="/"
                  className="login"
                  style={{
                    color: "#006eef",
                    whiteSpace: "nowrap",
                  }}
                >
                  <RiArrowGoBackLine
                    style={{
                      marginBottom: "-2px",
                    }}
                  />{" "}
                  Go back to main website
                </Link>
              ) : (
                <Link
                  to="/trade-card"
                  className="login"
                  style={{
                    color: location.pathname === "/" ? "#fff" : "#006eef",
                    whiteSpace: "nowrap",
                  }}
                >
                  Trade Card
                </Link>
              )}

              <Button
                width="120px"
                height="50px"
                background="red"
                boxShadow=" 0px 30px 70px rgba(232, 19, 19, 0.3);"
              >
                <Link to="/signup">
                  Logout{" "}
                  <AiOutlineLogout
                    style={{
                      marginBottom: "-3px",
                    }}
                  />
                </Link>
              </Button>
            </FlexibleDiv>
          ) : (
            <FlexibleDiv width="max-content" flexWrap="no-wrap">
              <Link
                to="/login"
                className="login"
                style={{
                  color: location.pathname === "/" ? "#fff" : "#006eef",
                }}
              >
                Login
              </Link>
              {location.pathname === "/" ? (
                <Button width="120px" height="50px" className="whiteButton">
                  <Link to="/signup">Register</Link>
                </Button>
              ) : (
                <Button width="120px" height="50px">
                  <Link to="/signup">Register</Link>
                </Button>
              )}
            </FlexibleDiv>
          )}
        </FlexibleDiv>
      </FlexibleDiv>
      <FlexibleDiv className="mobileMenuWrap">
        <Link to="/" target="">
          <div className="mobileHeader__logoWrap">
            {location.pathname === "/" ? (
              <img alt="" src={LogoWhite} />
            ) : (
              <img alt="" src={Logo} />
            )}
          </div>
        </Link>
        <FlexibleDiv>
          {" "}
          <FlexibleDiv
            className="mobileHeader__menuIcon"
            width="30px"
            height="25px"
            onClick={handleShowMenu}
            flexDir="column"
            alignItems="center"
          >
            <div className="mobileHeader__menuIcon__firstTab"></div>
            <div className="mobileHeader__menuIcon__secondTab"></div>
            <div className="mobileHeader__menuIcon__thirdTab"></div>
          </FlexibleDiv>
        </FlexibleDiv>

        <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
      </FlexibleDiv>
    </HeaderWrap>
  );
};

export default LandingHeader;
