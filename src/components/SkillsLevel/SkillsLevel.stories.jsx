import { storiesOf } from "@storybook/react";
import React from "react";
import SkillsLevel from "./SkillsLevel";

storiesOf("Skills", module).add("Bubbly-skills", () => (
  <SkillsLevel background="#ACD6E4" skill="React" level="5" />
));
