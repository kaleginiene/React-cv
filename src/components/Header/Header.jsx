import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Header>
      <S.Actions>
        <S.StyledLink to="/">home</S.StyledLink>
        <S.StyledLink to="/about">experience</S.StyledLink>
        <S.StyledLink to="/about">education</S.StyledLink>
        <S.StyledLink to="/about">portfolio</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
