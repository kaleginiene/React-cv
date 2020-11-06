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
export const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #333;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
`;

export const Article = styled.article`
  font-family: "Quicksand", sans-serif;
  font-weight: normal;
  font-size: 0.9em;
  color: #333;
  text-align: justify;
  line-height: 1.5em;
`;
