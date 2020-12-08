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
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
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
  @media only screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
  @media only screen and (max-width: 374px) {
    width: 20px;
    height: 20px;
  }
`;
