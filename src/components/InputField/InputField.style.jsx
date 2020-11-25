import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 80%;
  box-sizing: border-box;
  border: none;
  background-color: #e3dfde;
  padding: 0.5em;
  height: ${(props) => props.theme.primary.height};
  margin: 1em 0;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 80%;
  box-sizing: border-box;
  border: none;
  padding: 0.5em;
  margin: 1em 0;
  background-color: #e3dfde;
  &&:focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary.background};
  padding: 5px;
`;
export const Radio = styled.input`
  width: 15px;
  margin-right: 10px;
  margin-left: 5px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  margin: 10px;
`;

export const Label = styled.label`
  width: 20%;
  font-family: "Quicksand", sans-serif;
  color: #444;
  font-size: 0.8em;
  text-align: right;
  padding-right: 0.7em;
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin-top: 2em;
  }
`;
