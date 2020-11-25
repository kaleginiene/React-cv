import React from "react";
import * as S from "./Contact.style";
import { Section, Card, FormTemplate } from "../../components";
import Photo from "../../assets/ieva.jpg";
import formData from "../../utilities/formData";

function Contact() {
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
          <S.TitleHeading>Contact me</S.TitleHeading>
          <FormTemplate
            fields={formData}
            buttonText="Send your message"
            formTitle="Feel free to contact me"
            callback={() => console.log("ok")}
            // callback={(fieldValues) => {
            //   fetch("http://localhost:8080/messages", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //       name: fieldValues.name,
            //       email: fieldValues.email,
            //       message: fieldValues.message,
            //     }),
            //   }).catch((err) => console.log(err));
            // }}
          />
        </Section>
      </S.SectionWrapper>
    </S.Contact>
  );
}

export default Contact;
