import styled from "styled-components";
import { LocationPin, PhoneIcon, EmailIcon } from "../../assets/icons";

export const Home = styled.main`
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 769px) {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    position: relative;
  }
`;

export const SectionWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    width: 95%;
    max-width: 100%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) and (orientation: landscape) {
    width: calc(100% - 15em - 1.5em);
  }
  @media only screen and (min-width: 1024px) {
    width: calc(70% - 1.5em);
    margin: 0;
    margin-left: 0.5em;
    box-sizing: border-box;
  }
`;
export const CardWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    width: 95%;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 0.5em;
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) and (orientation: landscape) {
    width: 15em;
    margin: 0 0.5em;
  }
  @media only screen and (min-width: 1024px) {
    width: 30%;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 1em;
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
  justify-content: space-between;
  @media only screen and (max-width: 767px) {
    display: inline-block;
  }
`;

export const Span = styled.span`
  font-weight: bold;
`;
export const HalfWrapper = styled.section`
  @media only screen and (max-width: 767px) and (orientation: landscape) {
    width: 100%;
    font-weight: ${(props) => (props.weight ? props.weight : "normal")};
    padding: 0.25em 0;
  }
  @media only screen and (min-width: 768px) {
    width: calc(50% - 1em);
    min-height: 10em;
    font-size: 0.8rem;
    padding: 0.25em 0;
    box-sizing: border-box;
    font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  }
`;
export const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  font-size: 1.2em;
  @media only screen and (max-width: 767px) {
    font-size: 0.9em;
    justify-content: center;
  }
  @media only screen and (min-width: 767px) and (max-width: 996px) {
    font-size: 0.9em;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  margin-right: 1em;
  &.location {
    background-image: url(${LocationPin});
  }
  &.email {
    background-image: url(${EmailIcon});
  }
  &.phone {
    background-image: url(${PhoneIcon});
  }
  @media only screen and (max-width: 374px) {
    width: 22px;
    height: 22px;
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
  @media only screen and (max-width: 768px) {
    font-size: 1.1em;
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
