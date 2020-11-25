import styled from "styled-components";

export const FlexBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
`;

export const Container = styled.div`
  width: calc(50% - 1em);
  text-align: center;
  height: 200px;
  margin: 0.5em;
  margin-bottom: 1em;
  cursor: pointer;
  background-color: ${(props) => props.theme.primary.background};
  position: relative;
  transition: ease-in 0.3s;
  box-sizing: border-box;
  &&:hover {
    opacity: 0.9;
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
  margin-bottom: 2.2em;
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 22;
  opacity: 1;
  display: block;
  &&:hover {
    opacity: 0;
  }
`;
