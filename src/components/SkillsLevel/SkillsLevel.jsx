import React from "react";
import * as S from "./SkillsLevel.style";

function SkillsLevel({ background, skill, level, float }) {
  return (
    <S.SkillsLevel float={float}>
      <S.Title>{skill}</S.Title>
      <S.FlexBlock>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
        <S.Bubble background={background} level={level}></S.Bubble>
      </S.FlexBlock>
    </S.SkillsLevel>
  );
}

export default SkillsLevel;
