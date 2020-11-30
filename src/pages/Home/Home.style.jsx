import styled from "styled-components";

export const Home = styled.main`
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

export const SectionWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    width: 95%;
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
  width: 30%;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 1em;
  @media only screen and (max-width: 575px) {
    width: 95%;
    max-width: 100%;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    max-width: 300px;
  }
  @media only screen and (min-width: 769px) {
    width: calc(30% - 1em);
    margin: 0.5em;
    position: sticky;
  }
`;

export const TitleHeading = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #333;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: bold;
`;
export const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
  color: #333;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  margin-top: 1em;
`;
export const SubTitle = styled.h3`
  font-family: "Quicksand", sans-serif;
  color: #333;
  text-align: center;
  font-size: 1.3em;
  font-weight: normal;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const Article = styled.article`
  font-family: "Quicksand", sans-serif;
  font-weight: normal;
  font-size: 0.9em;
  color: #333;
  text-align: justify;
  line-height: 1.5em;
`;
export const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Span = styled.span`
  font-weight: bold;
`;
export const HalfWrapper = styled.section`
  @media only screen and (max-width: 768px) {
    width: 300px;
    max-width: 100%;
    font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  }
  @media only screen and (min-width: 768px) {
    width: calc(50% - 1em);
    font-size: 0.8rem;
    padding: 0.25em 0;
    box-sizing: border-box;
    font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    text-decoration: none;
    color: #493f3e;
  }
`;

export const PaddingBlock = styled.div`
  padding: 1em 0;
  &.padding-block {
    padding: 1em 0 1em 4em;
  }
  @media only screen and (max-width: 768px) {
    &.padding-block {
      padding: 1em 0;
    }
  }
`;