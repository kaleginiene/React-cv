import React from "react";
import { useHistory } from "react-router-dom";
import {
  Section,
  Card,
  BreakLine,
  SkillsLevel,
  Icons,
  Button,
} from "../../components";
import * as S from "./Home.styled";
import Photo from "../../assets/ieva.jpg";

function Home() {
  const history = useHistory();

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
        <Section fullWidth background="fff">
          <S.TitleHeading>About me</S.TitleHeading>
          <S.Article>
            I’ve been working in IT industry for about six years and now my
            career goal is to retrain from seller to FrontEnd developer. I’m
            sure, that such ambitious goal is a proof of extremely high
            motivation and willingness to learn a lot.
          </S.Article>
          <BreakLine />
          <S.FlexBlock>
            <S.HalfWrapper>
              <S.SubTitle>personal information</S.SubTitle>
              <S.FlexBlock>
                <S.CardWrapper weight="bold">Full name:</S.CardWrapper>
                <S.HalfWrapper>Ieva Kaleginienė</S.HalfWrapper>
                <S.CardWrapper weight="bold">City:</S.CardWrapper>
                <S.HalfWrapper>Vilnius</S.HalfWrapper>
                <S.CardWrapper weight="bold">Email:</S.CardWrapper>
                <S.HalfWrapper>ieva.kaleginiene@gmail.com</S.HalfWrapper>
                <S.CardWrapper weight="bold">Phone:</S.CardWrapper>
                <S.HalfWrapper>+370 677 28390</S.HalfWrapper>
              </S.FlexBlock>
            </S.HalfWrapper>
            <S.HalfWrapper>
              <S.SubTitle>languages</S.SubTitle>
              <SkillsLevel background="#ACD6E4" skill="English" level="8" />
              <SkillsLevel
                background="#ACD6E4"
                skill="Lithuanian (native)"
                level="10"
              />
            </S.HalfWrapper>
          </S.FlexBlock>
        </Section>
        <Section fullWidth background="fff">
          <S.Title>Skills</S.Title>
          <S.Article>
            I've startded studying IT at CodeAcademy since 2019 September.
            During various studies I've learnt creating websites, connect it
            with MySQL data basaes and servers. I've worked with developer
            platforms such as Digital Ocean, Microsoft Azure and Firebase. I
            have strong set of HTML, CSS, SASS and JavaScript skills.
            Furthermore, I am able to use BEM methodology writing the code too.
            Moreover, I know how to work with CSS frameworks such as Bootstrap,
            Bulma, Pure etc.
          </S.Article>
          <S.FlexBlock>
            <S.HalfWrapper>
              <S.SubTitle>working skills</S.SubTitle>
              <SkillsLevel background="#ACD6E4" skill="Teamwork" level="8" />
              <SkillsLevel
                background="#ACD6E4"
                skill="Quick learner"
                level="10"
              />
              <SkillsLevel background="#ACD6E4" skill="Leadership" level="9" />
              <SkillsLevel background="#ACD6E4" skill="Planning" level="8" />
              <SkillsLevel
                background="#ACD6E4"
                skill="Project Management"
                level="9"
              />
            </S.HalfWrapper>
            <S.HalfWrapper>
              <S.SubTitle>software skills</S.SubTitle>
              <Icons />
            </S.HalfWrapper>
          </S.FlexBlock>
          <S.Title>Courses</S.Title>
          <p>To gain these skills, I've attended various courses. </p>
          <S.PaddingBlock>
            <Button handleClick={() => history.push("/education")}>
              Check out certificates
            </Button>
          </S.PaddingBlock>
        </Section>
      </S.SectionWrapper>
    </S.Home>
  );
}

export default Home;
