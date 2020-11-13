import { storiesOf } from "@storybook/react";
import React from "react";
import ExperienceBlock from "./ExperienceBlock";

storiesOf("Experience-Block", module).add("Experience", () => (
  <>
    <ExperienceBlock
      position="Sales Manager"
      company="Telia Lietuva, AB"
      date="Sep 2016 - present"
      logo="https://seekvectorlogo.com/wp-content/uploads/2019/02/telia-vector-logo.png"
      description="In this job position my duties are: Selling IT and Mobility services for medium and large B2B clients. Attending meetings with clients and project management: constructing budget and timelines."
    />
    <ExperienceBlock
      position="Sales Manager"
      company="Telia Lietuva, AB"
      date="Sep 2016 - present"
      logo="https://seekvectorlogo.com/wp-content/uploads/2019/02/telia-vector-logo.png"
      description="In this job position my duties are: Selling IT and Mobility services for medium and large B2B clients. Attending meetings with clients and project management: constructing budget and timelines."
    />
    <ExperienceBlock
      position="Sales Manager"
      company="Telia Lietuva, AB"
      date="Sep 2016 - present"
      logo="https://seekvectorlogo.com/wp-content/uploads/2019/02/telia-vector-logo.png"
      description="In this job position my duties are: Selling IT and Mobility services for medium and large B2B clients. Attending meetings with clients and project management: constructing budget and timelines."
    />
  </>
));
