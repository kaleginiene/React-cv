import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  @media only screen and (max-width: 768px) {
    width: 300px;
    max-width: 100%;
  }
  padding: 1em;
`;

export const Actions = styled.nav`
  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    text-align: right;
    width: 768px;
    margin: 0 auto;
    font-family: "Quicksand", sans-serif;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 0.9em;
  color: #757575;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
  &:hover {
    color: #333;
    transition: ease-in 0.3s;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
