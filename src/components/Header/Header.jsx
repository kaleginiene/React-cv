import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Header>
      <S.Actions>
        <S.StyledLink to="/">home</S.StyledLink>
        <S.StyledLink to="/experience">experience</S.StyledLink>
        <S.StyledLink to="/education">education</S.StyledLink>
        <S.StyledLink to="/portfolio">portfolio</S.StyledLink>
        <S.StyledLink to="/about">contacts</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
