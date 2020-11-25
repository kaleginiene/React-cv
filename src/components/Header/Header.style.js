import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  @media only screen and (max-width: 768px) {
    width: 300px;
    max-width: 100%;
  }
  padding: 1em 3em;
`;

export const Actions = styled.nav`
  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    text-align: right;
    max-width: 1000px;
    margin: 0 auto;
    padding-right: 0.5em;
    font-family: "Quicksand", sans-serif;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 0.9em;
  color: #2d2929;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  &:hover {
    color: #fcf8f7;
    transition: ease-in 0.3s;
    text-decoration: none;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
