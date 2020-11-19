import styled from "styled-components";

export const FlexBlock = styled.div`
  display: flex;
  max-width: 768px;
  font-family: "Quicksand", sans-serif;
  margin-left: 160px;
  position: relative;
  min-height: 150px;
  margin: 0;
  background-color: #fff;
  &:last-child {
    margin-bottom: 5em;
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    &:last-child {
      margin-bottom: 10em;
    }
  }
`;

export const TimeBlock = styled.div`
  width: 30%;
  height: 30px;
  box-sizing: border-box;
  font-size: 0.8em;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
  }
`;
export const Line = styled.div`
  width: 1px;
  background-color: #acd6e4;
  margin: 0;
`;

export const Block = styled.div`
  width: 70%;
  padding: 0.4em 0.5em;
  box-sizing: border-box;
  position: relative;
  color: #444;
  &&::before {
    content: "";
    top: 0.82em;
    left: -0.19em;
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #010101;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
  }
`;

export const Date = styled.div`
  @media only screen and (min-width: 768px) {
    width: 160px;
    display: flex;
    position: relative;
    background-color: #acd6e4;
    padding: 0.65em;
    box-sizing: border-box;
    float: right;
    margin-right: 1em;
    text-align: center;
    font-weight: bold;
    &&::after {
      content: "";
      top: 0;
      left: 100%;
      width: 0;
      height: 0;
      position: absolute;
      border-top: 16px solid transparent;
      border-bottom: 16px solid transparent;
      border-right: 10px solid transparent;
      border-left: 10px solid #acd6e4;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 120px;
    position: relative;
    font-size: 0.65em;
    background-color: #acd6e4;
    float: left;
    padding: 0.67em;
    box-sizing: border-box;
    font-weight: bold;
    &&::after {
      content: "";
      top: 0;
      left: 99%;
      width: 0;
      height: 0;
      position: absolute;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 8px solid transparent;
      border-left: 8px solid #acd6e4;
    }
  }
`;

export const Title = styled.h4`
  font-family: "Quicksand", sans-serif;
  margin: 0;
  color: #010101;
`;
export const Company = styled.h4`
  font-family: "Quicksand", sans-serif;
  margin: 0 0 0.5em;
  font-weight: normal;
  color: #444;
  font-size: 1.3em;
`;

export const Logo = styled.img`
  max-width: 70px;
  max-height: 40px;
  margin: 0.5em 0;
`;

export const Description = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 0.8em;
  font-weight: normal;
`;
