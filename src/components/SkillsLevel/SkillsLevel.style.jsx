import styled from "styled-components";

export const Title = styled.h4`
  font-size: 0.7em;
  line-height: 1.2em;
  display: block;
  margin-bottom: 0.7em;
  font-family: "Quicksand", sans-serif;
`;

export const FlexBlock = styled.div`
  display: flex;
`;

export const Bubble = styled.div`
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: 1px solid ${(props) => props.background};
  margin-right: 0.3em;
  &&:nth-child(-n + ${(props) => props.level}) {
    background-color: ${(props) => props.background};
  }
`;
