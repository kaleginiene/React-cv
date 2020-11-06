import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 1em;
`;

export const Container = styled.div`
  max-width: 768px;
  width: ${(props) => (props.width ? props.width + "px" : "none")};
  margin: 0 auto;
`;
