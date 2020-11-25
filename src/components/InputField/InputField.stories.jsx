import { storiesOf } from "@storybook/react";
import React from "react";
import InputField from "./InputField";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("Input", module)
  .add("Text Field", () => (
    <ThemeProvider theme={theme}>
      <InputField
        label="Name"
        type="text"
        placeholder="Name"
        handleChange={(e) => console.log(e.target.value)}
      />
    </ThemeProvider>
  ))
  .add("Number Field", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type="number"
        placeholder="Age"
        handleChange={(e) => console.log(e.target.value)}
      />
    </ThemeProvider>
  ))
  .add("Text Area", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type="longtext"
        placeholder="Default text"
        handleChange={(e) => console.log(e.target.value)}
      />
    </ThemeProvider>
  ))
  .add("Dropdown", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type="dropdown"
        handleChange={(e) => console.log(e.target.value)}
        options={[
          { name: "Vilnius", value: "vilnius" },
          { name: "Kaunas", value: "kaunas" },
          { name: "Klaipėda", value: "klaipėda" },
        ]}
      />
    </ThemeProvider>
  ))
  .add("Radio", () => (
    <ThemeProvider theme={theme}>
      <InputField
        type="radio"
        radioId="female"
        handleChange={(e) => console.log(e.target.id)}
        label="Female"
        radioName="gender"
      />
      <InputField
        type="radio"
        radioId="male"
        handleChange={(e) => console.log(e.target.id)}
        label="Male"
        radioName="gender"
      />
      <InputField
        type="radio"
        radioId="other"
        handleChange={(e) => console.log(e.target.id)}
        label="Other"
        radioName="gender"
      />
    </ThemeProvider>
  ));
