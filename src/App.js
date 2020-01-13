import React from "react";
import { GlobalStyle } from "@echo360/ui-lib";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Layout from "./components/Layout/Layout";

import { createGlobalStyle } from "styled-components";

const GlobalStyleAdmin = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.appMainBg};
    height: auto;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalStyleAdmin />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
