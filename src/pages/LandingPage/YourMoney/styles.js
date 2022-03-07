import styled from "styled-components";

export const YourMoneyWrapper = styled.div`
  width: 100%;
  height: max-content;
  background: #dceefd;
  position: relative;
  padding: 50px 0;
  overflow: hidden;

  img {
    width: 90%;
    max-width: 900px;
  }

  .textWrap {
    position: absolute;
    h1,
    span {
      text-align: center;
      max-width: 600px;
      color: #050bac;
      cursor: crosshair;
    }

    span {
      margin: 0;
    }
  }

  @media (max-width: 450px) {
    padding: 30px 0;

    h1 {
      font-size: 22px !important;
    }
    span {
      font-size: 10px;
    }
  }

  .cursor_follow {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 2px solid #6bbb99;
    mix-blend-mode: difference;
    user-select: none;
    pointer-events: none;
    transform: translate(5px, 5px);
    position: absolute;
    background: #52d5ec5d;
    z-index: 3;
  }
`;
