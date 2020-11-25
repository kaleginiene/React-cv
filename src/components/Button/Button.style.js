import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) => (props.color === "primary" ? "#fff" : "#222")};
  outline: none;
  border: none;
  border-radius: 35px;
  padding: 1em 2em;
  font-family: "Quicksand", sans-serif;
  font-size: 0.8em;
  font-weight: ${(props) => (props.color === "primary" ? "normal" : "bold")};
  text-transform: uppercase;
  transition: ease-in 0.3s;
  margin: 1em 0;
  cursor: pointer;
  &:hover {
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.focus.background
        : props.theme.secondary.focus.background};
  }
`;
