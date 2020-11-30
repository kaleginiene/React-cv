import React, { useState } from "react";
import * as S from "./Header.style";

function Header() {
  const [mobileNav, setMobileNav] = useState("");

  return (
    <S.Header>
      <S.Actions>
        <S.StyledLink to="/">home</S.StyledLink>
        <S.StyledLink to="/experience">experience</S.StyledLink>
        <S.StyledLink to="/education">education</S.StyledLink>
        <S.StyledLink to="/portfolio">portfolio</S.StyledLink>
        {/* <S.StyledLink to="/contacts">contacts</S.StyledLink> will be aupdated, when the backend will be ready*/}
      </S.Actions>

      {/* Mobile Burger menu */}
      <div>
        <S.Title>Curriculum Vitae</S.Title>
        <S.SubTitle>Ieva Kaleginienė</S.SubTitle>
      </div>
      <S.Burger
        onClick={() => {
          if (mobileNav === "show") {
            setMobileNav("hide");
          } else {
            setMobileNav("show");
          }
        }}
      >
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.Burger>
      {mobileNav === "show" && (
        <S.MobileNav>
          <S.ExitBtn onClick={() => setMobileNav("hide")}></S.ExitBtn>
          <S.Ul>
            <S.ListItem>
              <S.StyledLink to="/" onClick={() => setMobileNav("hide")}>
                home
              </S.StyledLink>
            </S.ListItem>
            <S.ListItem>
              <S.StyledLink
                to="/experience"
                onClick={() => setMobileNav("hide")}
              >
                experience
              </S.StyledLink>
            </S.ListItem>
            <S.ListItem>
              <S.StyledLink
                to="/education"
                onClick={() => setMobileNav("hide")}
              >
                education
              </S.StyledLink>
            </S.ListItem>
            <S.ListItem>
              <S.StyledLink
                to="/portfolio"
                onClick={() => setMobileNav("hide")}
              >
                portfolio
              </S.StyledLink>
            </S.ListItem>
          </S.Ul>
        </S.MobileNav>
      )}
    </S.Header>
  );
}

export default Header;
