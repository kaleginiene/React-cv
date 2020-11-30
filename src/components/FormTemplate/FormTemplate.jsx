import React, { useState } from "react";
import { Button, InputField } from "..";
import { FormContext } from "../../contexts/FormContext";
import * as S from "./FormTemplate.style";

function sendMessage(fieldValues) {
  fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: fieldValues.name,
      email: fieldValues.email,
      subject: fieldValues.subject,
      comment: fieldValues.comment,
    }),
  }).catch((err) => console.log(err));
}

function FormTemplate({ formTitle, fields, buttonText }) {
  const [fieldValues, setFieldValues] = useState({});
  const displayForm = React.useContext(FormContext);

  return (
    <S.FormWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(fieldValues);
          displayForm.setState("none");
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
            required={field.required}
            handleChange={(e) =>
              setFieldValues({
                ...fieldValues,
                [field.name]: e.target.value,
              })
            }
          />
        ))}
        <Button type="submit">{buttonText}</Button>
      </form>
    </S.FormWrapper>
  );
}
export default FormTemplate;
