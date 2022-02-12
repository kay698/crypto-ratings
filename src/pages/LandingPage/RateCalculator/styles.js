import styled from "styled-components";

export const RateCalculatorWrapper = styled.div`
  width: 100%;
  height: 100%;

  .calculatorWrap {
    padding: 70px 5% 0 5%;
    border-radius: 40px;
    background: #dceefd;
    overflow: hidden;
    justify-content: space-between;

    @media (max-width: 800px) {
      padding: 0;
      background: transparent;
    }
    & > div {
      width: 45%;
      align-items: flex-start;

      p {
        width: 80%;
        max-width: 280px;
        color: #006eef;
      }

      .imageWrap {
        justify-content: flex-start;
        img {
          width: 100%;
          margin-left: -20%;
          max-width: 500px;
        }

        @media (max-width: 800px) {
          justify-content: center;
          img {
            width: 60%;
            margin-left: 0;
          }
        }
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
        padding-bottom: 50px;
      }
      .authForm {
        background: #fff;
        border-radius: 40px;
        max-width: 600px;

        padding: 40px;
        animation: popUp 1s 1 ease;
        transform: translateY(0);
        overflow: hidden;

        span {
        }

        .ant-form {
          width: 100%;

          .ant-select:not(.ant-select-customize-input) .ant-select-selector,
          .ant-input {
            height: 50px;
            background: rgba(0, 110, 239, 0.1);
            border: none;
            border-radius: 10px;
            font-size: 14px;
            color: #050bac;

            ::placeholder {
              color: #050bac;
            }
          }
          .ant-select-selection-placeholder,
          .ant-select-selection-item {
            padding-top: 10px !important;
            color: #050bac;
          }
          .ant-select-arrow,
          small,
          p {
            color: #050bac;
          }
          .currentTrading {
            margin: -20px 0 0 5px;
            color: #828282;
            span {
              color: #050bac;
            }
          }
          .numbersWrap {
            .ant-form-item {
              width: 48%;

              @media (max-width: 800px) {
                width: 100%;
              }
            }
          }

          .ant-btn-primary {
            margin: 20px 0 0 0;
            box-shadow: 0px 20px 70px rgba(0, 110, 239, 0.3);
          }
        }
        @media (max-width: 1100px) {
          padding: 40px 20px;
          border-radius: 20px;
        }
      }
    }
  }
`;
