import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [state, setState] = useState("block");
  return (
    <FormContext.Provider value={{ state, setState }}>
      {children}
    </FormContext.Provider>
  );
};
