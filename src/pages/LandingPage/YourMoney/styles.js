import styled from "styled-components";

export const YourMoneyWrapper = styled.div`
  width: 100%;
  height: max-content;
  background: #dceefd;
  position: relative;
  padding: 50px 0;

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
`;
