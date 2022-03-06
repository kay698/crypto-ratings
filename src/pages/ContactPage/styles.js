import styled from "styled-components";

export const ContactUsWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leftSection {
    button {
      margin-bottom: 30px;
    }

    a {
      font-size: 18px;
      margin-top: 10px;
      color: #006eef;
    }
    @media (min-width: 800px) {
      width: 50%;
      align-items: flex-start;
    }

    @media (max-width: 800px) {
      button,
      a {
        display: none;
      }
    }
  }
  .rightSection {
    @media (min-width: 800px) {
      width: 50%;
    }

    .authForm {
      background: #fff;
      border-radius: 40px;
      max-width: 600px;

      padding: 40px;
      animation: popUp 1s 1 ease;
      transform: translateY(0);
      overflow: hidden;
      border: 1px solid rgba(0, 110, 239, 0.3);

      form {
        width: 100%;

        .ant-input {
          height: 50px;
          background: rgba(0, 110, 239, 0.1);
          border: none;
          border-radius: 10px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        textarea {
          min-height: 150px;
        }

        .ant-btn-primary {
          margin: 20px 0 0 0;
          box-shadow: 0px 20px 70px rgba(0, 110, 239, 0.3);
        }
      }
      @media (max-width: 600px) {
        padding: 40px 20px;
        border-radius: 20px;
      }
    }
  }
`;
