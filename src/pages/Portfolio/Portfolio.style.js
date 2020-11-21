import styled from "styled-components";

export const Portfolio = styled.main`
  @media only screen and (max-width: 768px) {
    width: 310px;
    max-width: 100%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) {
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

export const SectionWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    width: 310px;
    max-width: 100%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) {
    width: calc(70% - 1em);
    margin: 0.5em;
    box-sizing: border-box;
  }
`;
export const CardWrapper = styled.div`
  width: 300px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 1em;
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  @media only screen and (max-width: 768px) {
    width: 320px;
    max-width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: calc(30% - 1em);
    margin: 0.5em;
    position: sticky;
    box-sizing: border-box;
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
