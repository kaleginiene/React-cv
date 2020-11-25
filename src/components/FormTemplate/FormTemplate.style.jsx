import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 10px;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: "Quicksand", sans-serif;
  color: ${(props) => props.theme.primary.color};
  text-align: left;
  font-size: 1.2em;
  font-weight: normal;
  margin-left: 20%;
  margin-top: 2em;
`;
