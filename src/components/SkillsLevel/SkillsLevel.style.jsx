import styled from "styled-components";

export const SkillsLevel = styled.div`
  margin: 0 auto;
  float: ${(props) => props.float};
`;

export const Title = styled.h4`
  font-size: 0.8em;
  line-height: 1.2em;
  display: block;
  margin-bottom: 0.7em;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
`;

export const FlexBlock = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) and (orientation: landscape) {
    justify-content: center;
    width: 100%;
  }
`;

export const Bubble = styled.div`
  box-sizing: border-box;
  width: 23px;
  height: 23px;
  border-radius: 100%;
  border: 1px solid ${(props) => props.background};
  &:not(:last-child) {
    margin-right: 0.3em;
  }
  margin-bottom: 1em;
  &&:nth-child(-n + ${(props) => props.level}) {
    background-color: ${(props) => props.background};
  }
  &&:nth-child(-n + ${(props) => props.level}):hover {
    background-color: #e6dbdb;
  }
  @media only screen and (max-width: 320px) {
    width: 20px;
    height: 20px;
  }
  @media only screen and (min-width: 321px) and (max-width: 375px) {
    width: 25px;
    height: 25px;
  }
  @media only screen and (min-width: 376px) and (max-width: 766px) {
    width: 28px;
    height: 28px;
  }
  @media only screen and (min-width: 767px) and (max-width: 996px) and (orientation: landscape) {
    width: 18px;
    height: 18px;
  }
`;
