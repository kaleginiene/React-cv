import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 1em 2.2em;
  &:not(:first-child) {
    margin-top: 1em;
  }
  margin: 0 auto;
`;

export const Container = styled.div`
  @media only screen and (max-width: 768px) {
    width: 310px;
    max-width: 100%;
  }
  max-width: 768px;
  width: ${(props) => (props.width ? props.width + "px" : "none")};
  margin: 0 auto;
  background: #${(props) => props.background};
`;
