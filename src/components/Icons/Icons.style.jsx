import styled from "styled-components";

export const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 210px;
  margin: 0 auto;
`;
export const IconWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background: ${(props) => (props.show === "block" ? "#222" : "#fff")};
  border-radius: 10px;
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
  width: 70px;
  height: 70px;
  background-color: #222;
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
`;
