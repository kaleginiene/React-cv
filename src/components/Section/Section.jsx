import React from "react";
import * as S from "./Section.style";

function Section({ background, fullWidth, children, width, smallBackground }) {
  return (
    <S.Section background={background}>
      {fullWidth ? (
        children
      ) : (
        <S.Container background={smallBackground} width={width}>
          {children}
        </S.Container>
      )}
    </S.Section>
  );
}

export default Section;
