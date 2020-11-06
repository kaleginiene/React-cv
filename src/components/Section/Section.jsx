import React from "react";
import * as S from "./Section.style";

function Section({ background, fullWidth, children, width }) {
  return (
    <S.Section background={background}>
      {fullWidth ? (
        children
      ) : (
        <S.Container width={width}>{children}</S.Container>
      )}
    </S.Section>
  );
}

export default Section;
