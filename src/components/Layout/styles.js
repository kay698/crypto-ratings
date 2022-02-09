import styled from "styled-components";

export const LayoutWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow-x: hidden;
  padding: 0;
  margin: 0;

  .layout__main {
    padding: 0;
    margin: 0;
    height: max-content;
    min-height: calc(100vh - 80px);
    background: #f5fcff;
  }
`;
