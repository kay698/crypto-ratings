import styled from "styled-components";

export const FaqWrapper = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    color: #050bac;
  }
  .ant-collapse {
    border: none;
    background: transparent;
    overflow: hidden;
    width: 100%;
    margin: 0 0 20px 0;

    svg,
    .ant-collapse-header {
      color: #050bac;
    }

    @media (min-width: 900px) {
      width: 380px;
      margin: 0 20px 20px 0;
    }
  }
  .ant-collapse-item {
    border-radius: 10px !important;
    border: 1px solid rgba(0, 110, 239, 0.3);
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
`;
