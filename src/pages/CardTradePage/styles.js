import styled from "styled-components";

export const CardTradePageWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leftHeader {
    p,
    span {
      color: #006eef;
      font-weight: bold;
      margin: 0;
    }
    h1 {
      white-space: nowrap;
      z-index: 2;
      img {
        width: 10%;
      }
    }
    position: relative;
    .line {
      position: absolute;
      right: 24%;
      z-index: 1;
      bottom: 22px;
      width: 60%;
    }
  }
`;
