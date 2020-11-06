import styled from "styled-components";

export const Home = styled.main`
  @media only screen and (min-width: 768px) {
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    min-height: 90vh;
    margin: 0 auto;
  }
`;

export const SectionWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    width: calc(70% - 1em);
    margin: 0.5em;
  }
`;
export const CardWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    width: calc(30% - 1em);
    margin: 0.5em;
    position: sticky;
  }
`;
