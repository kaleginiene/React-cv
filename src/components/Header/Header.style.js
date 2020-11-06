import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  padding: 1em;
`;

export const Actions = styled.nav`
  text-align: right;
  width: 768px;
  margin: 0 auto;
  font-family: "Quicksand", sans-serif;
`;

export const StyledLink = styled(Link)`
  font-size: 0.9em;
  color: #757575;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
