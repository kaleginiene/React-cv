import React, { useState } from "react";
import { Button, InputField } from "..";
import * as S from "./FormTemplate.style";

function FormTemplate({ formTitle, fields, callback, buttonText }) {
  const [fieldValues, setFieldValues] = useState({});
  return (
    <S.FormWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          callback(fieldValues);
        }}
      >
        <S.Title>{formTitle}</S.Title>
        {fields.map((field) => (
          <InputField
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            handleChange={(e) =>
              setFieldValues({ ...fieldValues, [field.name]: e.target.value })
            }
          />
        ))}
        <Button type="submit">{buttonText}</Button>
      </form>
    </S.FormWrapper>
  );
}
export default FormTemplate;
