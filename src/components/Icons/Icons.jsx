import React, { useState } from "react";
import * as S from "./Icons.style";
import {
  HtmlLogo,
  CssLogo,
  ReactLogo,
  JavaScript,
  NodeLogo,
  BootstrapLogo,
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
          onMouseOut={() => {
            setShowSkill("none");
            setNewClass("block");
          }}
        />
      </S.IconWrapper>
      <S.IconWrapper show={showSkill}>
        <S.Skill show={showSkill} className="css" newClass={newClass}>
          CSS <br /> 70%
          <br /> Advanced
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
          <br /> Intermediate
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
          SASS <br /> 60%
          <br /> Intermediate
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
          <br /> Novice
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
          <br /> Intermediate
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
          <br /> Intermediate
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
          Github <br /> 60%
          <br /> Intermediate
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
        <S.Skill show={showSkill} className="bootstrap" newClass={newClass}>
          Bootstrap <br /> 50%
          <br /> Intermediate
        </S.Skill>
        <S.Icon
          src={BootstrapLogo}
          onMouseOver={() => {
            setShowSkill("block");
            setNewClass("bootstrap");
          }}
          onMouseOut={() => setShowSkill("none")}
        />
      </S.IconWrapper>
    </S.FlexBlock>
  );
}

export default Icons;
