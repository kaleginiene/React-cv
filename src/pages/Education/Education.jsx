import React from "react";
import { Section, ExperienceBlock, Card, CarouselBoot } from "../../components";
import educationData from "../../utilities/educationData";
import Photo from "../../assets/ieva.jpg";
import * as S from "./Education.style";

function Education() {
  return (
    <S.Education>
      <S.CardWrapper>
        <Card
          imgUrl={Photo}
          name="Ieva Kaleginienė"
          career="Front-End developer"
        />
      </S.CardWrapper>
      <S.SectionWrapper>
        <Section fullWidth background="fff">
          <S.TitleHeading>Education</S.TitleHeading>
          {educationData &&
            educationData.map((field, index) => (
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
        <Section fullWidth>
          <CarouselBoot />
        </Section>
      </S.SectionWrapper>
    </S.Education>
  );
}

export default Education;
