import styled from "styled-components";

export const FaqWrapper = styled.div`
  width: 100%;
  height: 100%;

  .ant-collapse {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border: none;
    background: transparent;
  }
  .ant-collapse-item {
    width: 100%;
    margin: 0 0 20px 0;
    background: #fff;
    border: 1px solid rgba(0, 110, 239, 0.3);
    border-radius: 10px;
    overflow: hidden;
    @media (min-width: 900px) {
      width: 380px;
      margin: 0 20px 20px 0;
    }
  }
`;
