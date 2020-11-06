import React from "react";
import { Section, Button } from "../../components";
import * as S from "./Card.style";

function Card({ imgUrl, name, career }) {
  return (
    <S.Card>
      <S.Image src={imgUrl} />
      <S.Title>{name}</S.Title>
      <S.SubTitle>{career}</S.SubTitle>
      <Section fullWidth background="fff">
        <Button color="primary">Download resume</Button>
      </Section>
    </S.Card>
  );
}

export default Card;
