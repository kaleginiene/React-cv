import React from "react";
import { Section, Card, BreakLine, ProjectCard } from "../../components";
import * as S from "./Portfolio.style";
import Photo from "../../assets/ieva.jpg";
import PortfolioData from "../../utilities/portfolioData";

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
            To develop the skills I gained during my courses, I've been creating
            and designing various projects. Check them out below.
          </S.Article>
          <BreakLine />
          <ProjectCard portfolio={PortfolioData} />
        </Section>
      </S.SectionWrapper>
    </S.Portfolio>
  );
}

export default Portfolio;
