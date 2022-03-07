import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  padding: 150px 0 100px 0;
  background: #050bac;
  box-sizing: border-box;

  .heroWrap {
    max-width: 700px;
    width: 90%;
    position: relative;
    .star {
      position: absolute;
      width: 6%;
      min-width: 30px;
      top: -2%;
      right: 10px;
    }
    p,
    h1,
    span {
      text-align: center;
      color: #ffffff !important;
    }

    p {
      font-weight: 600;
      margin: 10px 0;
      font-size: 16px;
    }

    h1 {
      position: relative;

      span {
        color: #f2c94c !important;
      }
      img {
        position: absolute;
        width: 55%;
        min-width: 30px;
        bottom: 0;
        right: 2%;
        opacity: 0.5;
        @media (max-width: 423px) {
          right: 30%;
        }
      }
    }

    span {
      max-width: 600px;
    }
    img {
      width: 100%;
      margin-top: 50px;
    }
  }
  @media (max-width: 750px) {
    padding: 100px 0 50px 0;
    .heroWrap {
      .star {
        position: absolute;
        width: 6%;
        top: -50px;
        right: 0;
      }
    }
  }
`;
