import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { FormProvider } from "./contexts/FormContext";
import theme from "./theme";
import "normalize.css";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FormProvider>
        <Routes />
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
