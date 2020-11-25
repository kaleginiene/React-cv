import React from "react";
import { Section, Card, BreakLine, ProjectCard } from "../../components";
import * as S from "./Portfolio.style";
import Photo from "../../assets/ieva.jpg";
import RandomImg from "../../assets/projects/random.JPG";

function Portfolio() {
  return (
    <S.Portfolio>
      <S.CardWrapper>
        <Card
          imgUrl={Photo}
          name="Ieva Kaleginienė"
          career="Front-End developer"
        />
      </S.CardWrapper>
      <S.SectionWrapper>
        <Section fullWidth background="fff">
          <S.TitleHeading>My projects</S.TitleHeading>
          <S.Article>
            To develop the skills I gained during my courses, I've been making
            various projects. Check them out below.
          </S.Article>
          <BreakLine />
          <ProjectCard
            portfolio={[
              {
                id: 1,
                caption: "Project 1",
                url: RandomImg,
                page: "https://google.lt",
              },
              {
                id: 2,
                caption: "Project 2",
                url: RandomImg,
                page: "https://google.lt",
              },
              {
                id: 3,
                caption: "Project 3",
                url: RandomImg,
                page: "https://google.lt",
              },
              {
                id: 4,
                caption: "Project 4",
                url: RandomImg,
                page: "https://google.lt",
              },
              {
                id: 5,
                caption: "Project 5",
                url: RandomImg,
                page: "https://google.lt",
              },
              {
                id: 6,
                caption: "Project 6",
                url: RandomImg,
                page: "https://google.lt",
              },
              {
                id: 7,
                caption: "Project 7",
                url: RandomImg,
                page: "https://google.lt",
              },
            ]}
          />
        </Section>
      </S.SectionWrapper>
    </S.Portfolio>
  );
}

export default Portfolio;
