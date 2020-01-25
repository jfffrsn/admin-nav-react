import React from "react";
import { GlobalStyle } from "@echo360/ui-lib";
import AdminGlobalStyle from "./theme/AdminGlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/AdminTheme";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AdminGlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
