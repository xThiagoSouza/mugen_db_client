import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  min-height: 100%;
  display: flex;
  margin: 0 auto;

  @media only screen and (max-width: 850px) {
    width: 95%;
  }

  @media only screen and (max-width: 800px) {
    width: 99%;
  }

  @media only screen and (max-width: 749px) {
    flex-direction: column;
    position: relative;
  }

  @media only screen and (max-width: 749px) {
    justify-content: flex-start;
  }
`;
