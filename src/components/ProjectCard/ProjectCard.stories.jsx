import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import React from "react";
import ProjectCard from "./ProjectCard";
import RandomImg from "../../assets/projects/random.JPG";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("Project-card", module)
  .addDecorator(StoryRouter())
  .add("Card", () => (
    <ThemeProvider theme={theme}>
      <ProjectCard
        portfolio={[
          {
            id: 1,
            caption: "Project 1",
            url: RandomImg,
            page: "https://google.lt",
          },
          {
            id: 2,
            caption: "Project 2",
            url: RandomImg,
            page: "https://google.lt",
          },
          {
            id: 3,
            caption: "Project 3",
            url: RandomImg,
            page: "https://google.lt",
          },
          {
            id: 4,
            caption: "Project 4",
            url: RandomImg,
            page: "https://google.lt",
          },
          {
            id: 5,
            caption: "Project 5",
            url: RandomImg,
            page: "https://google.lt",
          },
          {
            id: 6,
            caption: "Project 6",
            url: RandomImg,
            page: "https://google.lt",
          },
          {
            id: 7,
            caption: "Project 7",
            url: RandomImg,
            page: "https://www.google.com/",
          },
        ]}
      />
    </ThemeProvider>
  ));
