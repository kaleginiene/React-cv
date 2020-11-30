import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import * as S from "./Contact.style";
import { Section, Card, FormTemplate } from "../../components";
import Photo from "../../assets/ieva.jpg";
import formData from "../../utilities/formData";

function Contact() {
  const displayForm = useContext(FormContext);

  return (
    <S.Contact>
      <S.CardWrapper>
        <Card
          imgUrl={Photo}
          name="Ieva Kaleginienė"
          career="Front-End developer"
        />
      </S.CardWrapper>
      <S.SectionWrapper>
        <Section fullWidth background="fff">
          {displayForm.state === "block" && (
            <S.TitleHeading>Contact me</S.TitleHeading>
          )}
          {displayForm.state === "block" && (
            <FormTemplate
              fields={formData}
              buttonText="Send your message"
              formTitle="Feel free to contact me"
            />
          )}
          {displayForm.state === "none" && (
            <S.Title>Thank You for your message!</S.Title>
          )}
        </Section>
      </S.SectionWrapper>
    </S.Contact>
  );
}

export default Contact;
