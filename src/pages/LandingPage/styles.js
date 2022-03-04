import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  width: 100%;
  height: 100%;

  .home_section {
      &:not(.home_section:first-of-type) {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;
