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
    border-left: 1px solid #cebaba;
    &:last-child {
      margin-bottom: 0.5em;
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
    height: 40px;
    margin-bottom: 1em;
  }
`;
export const Line = styled.div`
  width: 1px;
  background-color: #cebaba;
  margin: 0;
`;

export const Block = styled.div`
  width: 70%;
  padding: 0em 0.5em;
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
    margin-bottom: 1em;
  }
`;

export const Date = styled.div`
  @media only screen and (min-width: 768px) {
    width: 160px;
    display: flex;
    position: relative;
    background-color: #cebaba;
    padding: 0.5em;
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
      border-left: 10px solid#CEBABA;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 200px;
    position: relative;
    font-size: 1em;
    background-color: #cebaba;
    float: left;
    padding: 0.89em;
    box-sizing: border-box;
    font-weight: bold;
    margin-bottom: 0.5em;
    &&::after {
      content: "";
      top: -0.85px;
      left: 99%;
      width: 0;
      height: 0;
      position: absolute;
      border-top: 22px solid transparent;
      border-bottom: 22px solid transparent;
      border-right: 19.5px solid transparent;
      border-left: 19.5px solid #cebaba;
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
  text-align: justify;
  padding-bottom: 1.5em;
`;
