import React, { useState } from "react";
import * as S from "./Icons.style";
import {
  HtmlLogo,
  CssLogo,
  ReactLogo,
  JavaScript,
  NodeLogo,
  PhotoshopLogo,
  SassLogo,
  VueJsLogo,
  GitHubLogo,
} from "../../assets/icons";

function Icons() {
  const [showSkill, setShowSkill] = useState("none");
  const [newClass, setNewClass] = useState("");

  return (
    <S.FlexBlock>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="html" newClass={newClass}>
          HTML <br /> 70%
          <br /> strong
        </S.Skill>
        <S.Icon
          src={HtmlLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("html");
          }}
          onMouseOut={() => {setShowSkill("none"); setNewClass("block");}}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="css" newClass={newClass}>
          CSS <br /> 70%
          <br /> strong
        </S.Skill>
        <S.Icon
          src={CssLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("css");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="js" newClass={newClass}>
          JavaScript <br /> 50%
          <br /> strong
        </S.Skill>
        <S.Icon
          src={JavaScript}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("js");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="sass" newClass={newClass}>
          SASS <br /> 70%
          <br /> strong
        </S.Skill>
        <S.Icon
          src={SassLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("sass");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="node" newClass={newClass}>
          Node <br /> 30%
          <br /> strong
        </S.Skill>
        <S.Icon
          src={NodeLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("node");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="react" newClass={newClass}>
          React <br /> 50%
          <br /> strong
        </S.Skill>
        <S.Icon
          src={ReactLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("react");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="vue" newClass={newClass}>
          Vue <br /> 50%
          <br /> strong
        </S.Skill>
        <S.Icon
          src={VueJsLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("vue");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="git" newClass={newClass}>
          Github <br /> 70%
          <br /> strong
        </S.Skill>
        <S.Icon
          src={GitHubLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("git");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="photoshop" newClass={newClass}>
          Photoshop <br /> 30%
          <br /> novice
        </S.Skill>
        <S.Icon
          src={PhotoshopLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("photoshop");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
    </S.FlexBlock>
  );
}

export default Icons;
