import React from "react";
import { Section, ExperienceBlock, Card } from "../../components";
import experienceData from "../../utilities/experienceData";
import * as S from "./Experience.style";
import Photo from "../../assets/ieva.jpg";

function Experience() {
  return (
    <S.Experience>
      <S.CardWrapper>
        <Card
          imgUrl={Photo}
          name="Ieva Kaleginienė"
          career="Front-End developer"
        />
      </S.CardWrapper>
      <S.SectionWrapper>
        <Section fullWidth background="fff">
          <S.Title>Experience</S.Title>
          {experienceData &&
            experienceData.map((field, index) => (
              <ExperienceBlock
                key={index}
                position={field.position}
                company={field.company}
                date={field.date}
                logo={field.logo}
                description={field.description}
              />
            ))}
        </Section>
      </S.SectionWrapper>
    </S.Experience>
  );
}

export default Experience;
