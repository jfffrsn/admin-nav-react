import React from "react";

import SkipNav from "./Layout/SkipNav";

import { GlobalStyle } from "@echo360/ui-lib";

import { ThemeProvider } from "styled-components";


import theme from "./theme";

import Header from "./Layout/Header";
import MiniGuide from "./Layout/MiniGuide";
import Sidebar from "./Layout/Sidebar";

import Main from "./Layout/Main";

import { createGlobalStyle } from 'styled-components';

const GlobalStyleAdmin = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.appMainBg};
    height: auto;
  }
`

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalStyleAdmin />
        <SkipNav />
        <Header />
        <Sidebar />
        <MiniGuide />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
