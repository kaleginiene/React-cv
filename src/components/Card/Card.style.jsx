import styled from "styled-components";
import { GitHub, LinkedIN } from "../../assets/icons";

export const Card = styled.section`
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 2em 0 0 0;
  background-color: #e6dbdb;
  margin: 0 auto;
  @media only screen and (min-width: 769px) {
    max-width: 300px;
    position: fixed;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    max-width: 300px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 10% 10%;
  margin: 1em 1.5em;
  border: 2px double ${(props) => props.theme.secondary.color};
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
`;

export const SubTitle = styled.h3`
  font-family: "Quicksand", sans-serif;
  color: #333;
  text-align: center;
  font-size: 0.9em;
  font-weight: normal;
  margin: 1em 0;
`;

export const Section = styled.div`
  background-color: #fff;
  padding: 2em 0;
`;

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5em 0.5em;
  justify-content: center;
`;

export const StyledLink = styled.a`
  border-radius: 35px;
  text-decoration: none;
  padding: 1em 2em;
  font-family: "Quicksand", sans-serif;
  color: ${(props) => props.theme.primary.color};
  font-size: 0.8em;
  font-weight: ${(props) => (props.color === "primary" ? "normal" : "bold")};
  text-transform: uppercase;
  transition: ease-in 0.3s;
  background-color: ${(props) => props.theme.secondary.background};
  &:hover {
    text-decoration: none;
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
    color: ${(props) => props.theme.primary.color};
  }
`;

export const SocialLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #7b6a68;
  font-size: 0.9em;
  &:hover {
    text-decoration: none;
    color: #493f3e;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  &.github {
    background-image: url(${GitHub});
  }
  &.linkedin {
    background-image: url(${LinkedIN});
  }
`;
