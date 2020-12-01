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
import * as S from "./Home.style";
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
            <S.Span>Hello, I'm Ieva!</S.Span>
            <br />
            I’ve been working in the IT industry for about six years and now my
            career goal is to retrain from IT products seller to FrontEnd
            developer. I undertake all possible efforts to reach my goal, so
            I've already attended various courses and participated in the Women
            Go Tech project "Atrask technologijas!". I am sure, that such an
            ambitious goal is proof of extremely high motivation and willingness
            to learn a lot. I believe that working the job I love will let me
            reach extremely high achievements in my new career.
          </S.Article>
          <BreakLine />
          <S.FlexBlock>
            <S.HalfWrapper>
              <S.SubTitle>personal information</S.SubTitle>
              <S.ContactBlock>
                <S.Icon className="location" />
                <div>Vilnius</div>
              </S.ContactBlock>
              <S.ContactBlock>
                <S.Icon className="email" />
                <S.Link href="mailto:ieva.kaleginiene@gmail.com">
                  ieva.kaleginiene@gmail.com
                </S.Link>
              </S.ContactBlock>
              <S.ContactBlock>
                <S.Icon className="phone" />
                <S.Link href="tel:+37067728390">+370 677 28390</S.Link>
              </S.ContactBlock>
            </S.HalfWrapper>
            <S.HalfWrapper>
              <S.SubTitle>languages</S.SubTitle>
              <SkillsLevel
                background="#CEBABA"
                skill="English"
                level="8"
                float="right"
              />
              <SkillsLevel
                background="#CEBABA"
                skill="Lithuanian (native)"
                level="10"
                float="right"
              />
            </S.HalfWrapper>
          </S.FlexBlock>
        </Section>
        <Section fullWidth background="fff">
          <S.Title>Skills</S.Title>
          <S.Article>
            I've started studying IT at CodeAcademy since 2019 September. During
            various courses I've learnt creating websites, connect it with
            <S.Span> MySQL </S.Span>databases and servers. I've worked with
            development platforms such as
            <S.Span> Digital Ocean, Microsoft Azure and Firebase</S.Span>. I
            have a strong set of
            <S.Span> HTML, CSS, SASS and JavaScript </S.Span>skills.
            Furthermore, I can use <S.Span>BEM methodology</S.Span> writing the
            code too. Moreover, I know how to work with CSS frameworks such as
            <S.Span> Bootstrap, Bulma, Pure CSS </S.Span>etc. Besides, I can
            write high-quality code using <S.Span>React </S.Span>JavaScript
            library or
            <S.Span> Vue.js </S.Span>
            framework.
          </S.Article>
          <S.FlexBlock>
            <S.HalfWrapper>
              <S.SubTitle>working skills</S.SubTitle>
              <SkillsLevel background="#CEBABA" skill="Teamwork" level="8" />
              <SkillsLevel
                background="#CEBABA"
                skill="Quick learner"
                level="10"
              />
              <SkillsLevel background="#CEBABA" skill="Leadership" level="9" />
              <SkillsLevel background="#CEBABA" skill="Planning" level="8" />
              <SkillsLevel
                background="#CEBABA"
                skill="Project Management"
                level="9"
              />
            </S.HalfWrapper>
            <S.HalfWrapper>
              <S.SubTitle>software skills</S.SubTitle>
              <Icons />
            </S.HalfWrapper>
          </S.FlexBlock>
        </Section>
        <Section fullWidth background="fff">
          <S.Title>Courses</S.Title>
          <p>
            To gain these software skills, I've attended 3 courses in Code
            Academy coding school, 2 courses in Coursera online platform and
            other.
          </p>
          <Button handleClick={() => history.push("/education")}>
            Check out certificates
          </Button>
        </Section>
      </S.SectionWrapper>
    </S.Home>
  );
}

export default Home;
