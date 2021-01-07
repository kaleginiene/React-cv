import React from "react";
import * as S from "./Card.style";
import Resume from "../../assets/downloads/Ieva-Kaleginiene-CV.pdf";

function Card({ imgUrl, name, career }) {
  return (
    <S.Card>
      <S.Image src={imgUrl} />
      <S.Title>{name}</S.Title>
      <S.SubTitle>{career}</S.SubTitle>
      <S.FlexBlock>
        <S.FlexBlock>
          <S.SocialLink
            href="https://www.linkedin.com/in/ieva-kaleginiene/"
            target="_blank"
          >
            <S.Icon className="linkedin" />
          </S.SocialLink>
          <S.SocialLink
            href="https://www.linkedin.com/in/ieva-kaleginiene/"
            target="_blank"
          >
            Linkedin
          </S.SocialLink>
        </S.FlexBlock>
        <S.FlexBlock>
          <S.SocialLink href="https://github.com/kaleginiene" target="_blank">
            <S.Icon className="github" />
          </S.SocialLink>
          <S.SocialLink href="https://github.com/kaleginiene" target="_blank">
            GitHub
          </S.SocialLink>
        </S.FlexBlock>
      </S.FlexBlock>

      <S.Section fullWidth background="fff">
        <S.StyledLink href={Resume} download>
          Download resume
        </S.StyledLink>
      </S.Section>
    </S.Card>
  );
}

export default Card;
