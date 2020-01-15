import React, { Component } from "react";

import SkipNav from "./Topbar/SkipNav";
import Header from "./Topbar/Header";
import MiniGuide from "./Sidebar/MiniGuide/MiniGuide";

import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

class Layout extends Component {
  render() {
    return (
      <>
        <SkipNav />
        <Header />
        <Sidebar />
        <MiniGuide />
        <Main />
      </>
    );
  }
}

export default Layout;
