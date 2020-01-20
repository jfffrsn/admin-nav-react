import React from "react";

import SkipNav from "./Topbar/SkipNav";
import Topbar from "./Topbar/Topbar";
import MiniGuide from "./Sidebar/MiniGuide/MiniGuide";

import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

function Layout() {
  return (
    <>
      <SkipNav />
      <Topbar />
      <Sidebar />
      <MiniGuide />
      <Main guide="guide-persistent-and-visible" />
    </>
  );
}

export default Layout;
