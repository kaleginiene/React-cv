import React from "react";
import * as S from "./ExperienceBlock.style";

function ExperienceBlock({ date, position, company, logo, description }) {
  return (
    <S.FlexBlock>
      <S.TimeBlock>
        <S.Date>{date}</S.Date>
      </S.TimeBlock>
      <S.Line></S.Line>
      <S.Block>
        <S.Title>{position}</S.Title>
        <S.Logo src={logo} alt={company} />
        <S.Company>{company}</S.Company>
        <S.Description>{description}</S.Description>
      </S.Block>
    </S.FlexBlock>
  );
}

export default ExperienceBlock;
