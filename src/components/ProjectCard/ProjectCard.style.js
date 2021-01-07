import styled from "styled-components";
import { GitHub, Tag } from "../../assets/icons";

export const FlexBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 2em;
`;

export const Container = styled.div`
  width: calc(50% - 1em);
  text-align: center;
  height: 15em;
  margin: 0.5em;
  margin-bottom: 1em;
  cursor: pointer;
  background-color: ${(props) => props.theme.primary.background};
  position: relative;
  transition: ease-in 0.3s;
  box-sizing: border-box;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  &&:hover {
    opacity: 0.9;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 25em;
  }
`;
export const Caption = styled.div`
  height: 100%;
  position: absolute;
  transition: opacity ease-in 0.2s;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.primary.background};
  &&:hover {
    opacity: 1;
  }
`;
export const Title = styled.h3`
  font-family: "Quicksand", sans-serif;
  color: ${(props) => props.theme.secondary.color};
  text-align: center;
  font-size: 1.5em;
  font-weight: normal;
  margin-top: 0.8em;
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

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  margin-right: 0.5em;
  &.github {
    background-image: url(${GitHub});
  }
  &.website {
    background-image: url(${Tag});
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 22;
  opacity: 1;
  display: block;
  &&:hover {
    opacity: 0.1;
  }
`;

export const SocialLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #7b6a68;
  font-size: 0.9em;
  text-align: center;
  &:hover {
    text-decoration: none;
    color: #493f3e;
  }
`;
