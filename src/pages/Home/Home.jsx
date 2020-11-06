import React from "react";
import { Section, Card, BreakLine } from "../../components";
import * as S from "./Home.styled";
import Photo from "../../assets/ieva.jpg";

function Home() {
  return (
    <S.Home>
      <S.CardWrapper>
        <Card
          imgUrl={Photo}
          name="Ieva Kaleginienė"
          career="Front-End developer"
        />
      </S.CardWrapper>
      <S.SectionWrapper>
        <Section background="fff">
          <S.Title>About me</S.Title>
          <S.Article>
            I’ve been working in IT industry for about six years and now my
            career goal is to retrain from seller to FrontEnd developer. I’m
            sure, that such ambitious goal is a proof of extremely high
            motivation and willingness to learn a lot.
          </S.Article>
          <BreakLine />
        </Section>
      </S.SectionWrapper>
    </S.Home>
  );
}

export default Home;
