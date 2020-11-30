import styled from "styled-components";
import { Link } from "react-router-dom";
import { Exit } from "../../assets/icons";

export const Header = styled.header`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 5em;
    background-color: #fff;
    margin: auto;
    margin-bottom: 0.5em;
    padding: 1em 1em;
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
  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
    &:hover {
      color: #cebaba;
      transition: ease-in 0.3s;
      text-decoration: none;
    }
  }
`;

export const Burger = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 3em;
    float: right;
    padding: 0.3em;
    border-radius: 0.5em;
    box-sizing: border-box;
    &:hover {
      box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const Title = styled.h2`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    color: #443d3d;
    margin-left: 0.5em;
    font-size: 1.6em;
    font-weight: bold;
  }
`;

export const SubTitle = styled.h2`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    color: #443d3d;
    margin-left: 0.5em;
    font-size: 1.3em;
  }
`;
export const BurgerLine = styled.div`
  padding: 0.2em;
  background-color: #cebaba;
  border-radius: 2em;
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export const MobileNav = styled.div`
  width: 12em;
  padding: 1em;
  position: absolute;
  right: 0;
  top: 6.4em;
  background-color: #fff;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: 2em 0 0em 2em;
  transition: ease-in 0.3s;
  border: 3px solid rgba(206, 186, 186, 0.5);
  z-index: 99;
`;
export const ExitBtn = styled.div`
  background-image: url(${Exit});
  width: 2em;
  height: 2em;
  border-radius: 2em;
  &:hover {
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const Ul = styled.ul`
  list-style: none;
  text-align: right;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1em;
`;
