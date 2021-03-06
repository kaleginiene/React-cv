import styled from "styled-components";

export const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 270px;
  float: right;
  margin: 0;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const IconWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  background: ${(props) => (props.show === "block" ? "#A58C96" : "#fff")};
  border-radius: 10px;
  @media only screen and (max-width: 320px) {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 321px) and (max-width: 375px) {
    width: 92px;
    height: 92px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 376px) and (max-width: 766px) {
    width: 107px;
    height: 107px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 767px) and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (min-width: 767px) and (max-width: 1024px) and (orientation: landscape) {
    width: 70px;
    height: 70px;
  }
`;

export const Skill = styled.div`
  text-align: center;
  color: #fff;
  padding: 0.5em;
  display: none;
  &&.${(props) => {
      if (props.className === props.newClass) {
        return props.newClass;
      }
    }} {
    display: ${(props) => (props.show === "block" ? "block" : "none")};
  }
`;

export const Icon = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-clip: border-box;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 1em;
  width: 90px;
  height: 90px;
  background-color: #a58c96;
  border: 3px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: ease-in-out 1s;
  &:hover {
    transform: rotateY(180deg);
    opacity: 0;
    transition: ease-in-out 1s;
    position: absolute;
    top: 0em;
  }
  @media only screen and (max-width: 320px) {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 321px) and (max-width: 375px) {
    width: 92px;
    height: 92px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 376px) and (max-width: 766px) and (orientation: landscape) {
    width: 107px;
    height: 107px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 376px) and (max-width: 766px) {
    width: 107px;
    height: 107px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 767px) and (max-width: 1024px) and (orientation: landscape) {
    width: 70px;
    height: 70px;
  }
`;
