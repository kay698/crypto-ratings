import styled from "styled-components";

export const SecurityWrapper = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  padding: 100px 0 50px 0;

  .mainWrap {
    max-width: 90%;
    align-items: flex-start;
    & > div {
      margin-bottom: 50px;
      img {
        margin-bottom: 10px;
      }

      h3,
      span {
        text-align: center;
        max-width: 300px;
        color: #050bac;
      }
      @media (min-width: 800px) {
        width: 32%;
      }

      @media (max-width: 430px) {
        h3 {
          font-size: 20px;
        }
      }
    }

    .lowerItem {
      @media (min-width: 800px) {
        margin-top: 130px;
      }
    }
  }
`;
