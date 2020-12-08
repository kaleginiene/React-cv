import React from "react";
import * as S from "./ProjectCard.style";

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
              <S.FlexBlock>
                <S.SocialLink href={project.page} target="_blank">
                  <S.Icon className="website" />
                </S.SocialLink>
                <S.SocialLink href={project.page} target="_blank">
                  Check the website
                </S.SocialLink>
              </S.FlexBlock>
              <S.FlexBlock>
                <S.SocialLink href={project.git} target="_blank">
                  <S.Icon className="github" />
                </S.SocialLink>
                <S.SocialLink href={project.git} target="_blank">
                  GitHub FrontEnd
                </S.SocialLink>
              </S.FlexBlock>
              {project.backend && (
                <S.FlexBlock>
                  <S.SocialLink href={project.git} target="_blank">
                    <S.Icon className="github" />
                  </S.SocialLink>
                  <S.SocialLink href={project.backend} target="_blank">
                    GitHub Backend
                  </S.SocialLink>
                </S.FlexBlock>
              )}
            </S.Caption>
          </S.Container>
        ))}
    </S.FlexBlock>
  );
}

export default ProjectCard;
