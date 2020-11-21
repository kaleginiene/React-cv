import React from "react";
import * as S from "./ProjectCard.style";
import { Button } from "../../components";

// function delayedHover() {
//   return(

//   )
// }

function ProjectCard({ portfolio }) {
  console.log();
  return (
    <S.FlexBlock projcets={portfolio}>
      {!portfolio && "There are no projects yet."}
      {portfolio &&
        portfolio.map((project) => (
          <S.Container key={project.id}>
            <S.Image src={project.url} />
            <S.Caption>
              <S.Title>{project.caption}</S.Title>
              <S.StyledLink
                href={project.page}
                target="_blank"
                rel="noreferrer"
              >
                View project
              </S.StyledLink>
            </S.Caption>
          </S.Container>
        ))}
    </S.FlexBlock>
  );
}

export default ProjectCard;
