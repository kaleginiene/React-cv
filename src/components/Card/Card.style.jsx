import styled from "styled-components";

export const Card = styled.section`
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  text-align: center;
  padding: 2em 0 0 0;
  background-color: #ebbce8;
  position: fixed;
  margin-left: 20px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
`;

export const SubTitle = styled.h3`
  font-family: "Quicksand", sans-serif;
  color: #333;
  text-align: center;
  font-size: 0.9em;
  font-weight: normal;
`;
