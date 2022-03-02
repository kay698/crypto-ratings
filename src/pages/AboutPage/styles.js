import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;

  .wrap {
    @media (min-width: 800px) {
      justify-content: space-between;
    }
    & > div {
      width: 50%;
      align-items: flex-start;

      p {
        width: 80%;
        margin-bottom: 60px;
      }
      @media (max-width: 800px) {
        width: 100%;
        align-items: center;
        h1,
        p {
          text-align: center;
          width: 100%;
        }
      }
    }
    .rightSection {
      @media (min-width: 800px) {
        justify-content: flex-end;
      }
      @media (min-width: 800px) and (max-width: 1191px) {
        width: 40%;
      }
      .lastCardWrap {
        @media (min-width: 1180px) {
          justify-content: flex-end;
        }
        @media (min-width: 1250px) {
          justify-content: flex-start;
        }
      }
    }

    .aboutCard {
      margin-bottom: 30px;
      max-width: 500px;
      border-radius: 40px;
      height: max-content;
      min-height: 300px;
      padding: 30px;
      position: relative;
      h3 {
        color: #050bac !important;
      }
      p {
        color: #050bac !important;
        font-size: 20px;
        text-align: center;
      }

      .image {
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 100%;

        img {
          width: 140%;
          margin: 10% 0 0 20%;
        }
      }

      @media (max-width: 800px) {
        border-radius: 30px;
      }
    }

    .cardOne {
      background: #fde7e7;
      .image {
        right: -50px;
        top: -60px;
        background: red;

        img {
          width: 140%;
        }
      }
    }

    .cardTwo {
      background: #dceefd;
      .image {
        left: -50px;
        bottom: -60px;
        background: blue;

        img {
          margin: -50% 0 0 0;
        }
      }
    }

    .cardThree {
      background: #f5f7ed;
      margin: 50px 0 0 0;
      .image {
        right: -50px;
        bottom: -30px;
        background: #f2c94c;

        img {
          margin: -50% 0 0 0;
        }
      }
    }
    @media (max-width: 800px) {
      .cardOne {
        .image {
          right: -2%;
          top: -40px;
        }
      }

      .cardTwo {
        .image {
          left: -2%;
          bottom: -40px;
        }
      }

      .cardThree {
        .image {
          right: -2%;
          bottom: -40px;
        }
      }
      .aboutCard {
        .image {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
`;
