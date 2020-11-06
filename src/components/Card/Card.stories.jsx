import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./Card";
import Photo from "../../assets/ieva.jpg";

storiesOf("Info-Card", module).add("Card", () => (
  <Card imgUrl={Photo} name="Ieva Kaleginienė" career="Front-End developer" />
));
