import styled from "styled-components";

export const SkillsLevel = styled.div`
  margin: 0 auto;
  padding: 0 0.5em;
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
`;

export const Bubble = styled.div`
  box-sizing: border-box;
  width: 19px;
  height: 19px;
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
`;
