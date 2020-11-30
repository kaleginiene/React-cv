import React from "react";
import * as S from "./InputField.style";

function InputField({
  type,
  placeholder,
  handleChange,
  options,
  radioId,
  label,
  radioName,
  minLength,
  required,
}) {
  switch (type) {
    case "number":
      return (
        <S.InputWrapper>
          <S.Label>{label}</S.Label>
          <S.Input
            type="number"
            step="0.1"
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
          />
        </S.InputWrapper>
      );
    case "email":
      return (
        <S.InputWrapper>
          <S.Label>{label}</S.Label>
          <S.Input
            type="email"
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            minLength={minLength}
          />
        </S.InputWrapper>
      );
    case "longtext":
      return (
        <S.InputWrapper>
          <S.Label>{label}</S.Label>
          <S.TextArea
            type="longtext"
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
          />
        </S.InputWrapper>
      );
    case "dropdown":
      return (
        <S.InputWrapper>
          <S.Label>{label}</S.Label>
          <S.Select type="dropdown" onChange={handleChange} defaultValue>
            <option disabled value>
              {options[0].name}
            </option>
            {options.slice(1).map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </S.Select>
        </S.InputWrapper>
      );
    case "radio":
      return (
        <>
          <S.RadioLabel>
            {label}
            <S.Radio
              type="radio"
              id={radioId}
              onChange={handleChange}
              defaultValue
              name={radioName}
            />
          </S.RadioLabel>
        </>
      );
    default:
      return (
        <S.InputWrapper>
          <S.Label>{label}</S.Label>
          <S.Input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            minLength={minLength}
            required={required}
          />
        </S.InputWrapper>
      );
  }
}

export default InputField;
