import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 150px 0;

  .heroSection {
    max-width: 700px;
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
      position: relative;
    }

    p {
      font-weight: 600;
      color: #006eef;
      margin: 10px 0;
      font-size: 16px;
    }

    h1 {
      span {
        color: #006eef;
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
    padding: 100px 0;
    .heroSection {
      .star {
        position: absolute;
        width: 6%;
        top: -50px;
        right: 0;
      }
    }
  }
`;
