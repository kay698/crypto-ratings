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

  .cardsWrap {
    justify-content: flex-start;
    padding-top: 70px;
    & > div {
      max-width: 280px;
      height: 300px;
      padding: 20px 15px;
      background: #ffffff;
      border: 1px solid rgba(0, 110, 239, 0.3);
      box-sizing: border-box;
      border-radius: 30px;
      align-items: space-between;
      margin: 0 23px 30px 0;

      img {
        width: 95%;
        height: auto;
      }

      .ant-btn {
        width: 95%;
        background: rgba(0, 110, 239, 0.1);
        border: 1px solid rgba(0, 110, 239, 0.3);
        box-sizing: border-box;
        border-radius: 16px;

        span {
          color: #006eef !important;
        }
      }
    }

    @media (max-width: 800px) {
      justify-content: space-between;
      padding-top: 50px;

      & > div {
        width: 47%;
        max-width: 300px;
        height: max-content;
        padding: 0 10px;
        border-radius: 15px;
        margin: 0 0 30px 0;
        img {
          width: 90%;
          height: auto;
        }
        .ant-btn {
          margin: 20px 0;
        }
      }
    }
    @media (max-width: 600px) {
      .ant-btn {
        height: 40px;
        border-radius: 10px !important;

        span {
          font-size: 12px;
        }
      }
    }
    @media (max-width: 400px) {
      .ant-btn {
        height: 35px;
      }
    }
  }
`;
