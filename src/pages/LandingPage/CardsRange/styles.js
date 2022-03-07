import styled from "styled-components";

export const CardsRangeWrapper = styled.div`
  width: 100%;
  height: max-content;
  background: #f2c94c11;
  position: relative;
  padding: 70px 0 100px 0;

  .textWrap {
    h1,
    span {
      text-align: center;
      max-width: 600px;
      color: #050bac;
    }

    span {
      margin: 0;
    }
  }
  .rows-wrap {
    transform: rotate(-1.5deg);
  }
  .row {
    height: max-content;
    div {
      min-width: 170px;
      width: 170px;
      height: 127px;
      overflow: hidden;
      border-radius: 10px;
      margin: 0 8px;
      img {
        width: 250px;
        height: auto;
      }
    }
  }

  .bottom {
    margin-top: 40px;
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
`;
