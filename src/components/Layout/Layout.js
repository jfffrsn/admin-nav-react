import React, { useState } from "react";

import { ReactComponent as MenuIcon } from "../../assets/icon-menu.svg";

import SkipNav from "./Topbar/SkipNav";
import Topbar from "./Topbar/Topbar";

import TopbarMenuBtn from "./Topbar/TopbarMenuBtn";

import Main from "./Main/Main";

import Sidebar from "./Sidebar/Sidebar";
import SidebarContainer from "./Sidebar/SidebarContainer";
import Scrim from "./Sidebar/Scrim";

import MiniGuide from "./Sidebar/MiniGuide/MiniGuide";

import Guide from "./Sidebar/Guide/Guide";
import GuideSpacer from "./Sidebar/Guide/GuideSpacer";
import GuideMenuBtn from "./Sidebar/Guide/GuideMenuBtn";

const Layout = props => {
  const body = document.querySelector("body");
  const [main, setMain] = useState("guide-persistent-and-visible");
  const [miniGuide, setMiniGuide] = useState("hidden");
  const [sidebarPersist, setSidebarPersist] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState("");
  const [sidebarContainerOpen, setSidebarContainerOpen] = useState("");
  const [scrimVis, setScrimVis] = useState("hidden");

  //toggle menu button
  const toggleMenu = () => {
    if (sidebarPersist === "persistent" && sidebarOpen === "opened") {
      setSidebarOpen("");
      setSidebarContainerOpen("");
      setMiniGuide("visible");
      setMain("mini-guide-visible");
    } else if (sidebarPersist === "persistent") {
      setSidebarOpen("opened");
      setSidebarContainerOpen("opened");
      setMiniGuide("hidden");
      setMain("guide-persistent-and-visible");
    } else if (sidebarPersist !== "persistent" && sidebarOpen !== "opened") {
      setSidebarOpen("opened");
      setSidebarContainerOpen("opened");
      body.style.overflow = "hidden";
      //appGuideNavicon.focus();
      setScrimVis("visible");
      //appGuideHeader.setAttribute("visible", "");
    }
  };

  //close sidebar from the guide button
  const closeGuideMenu = () => {
    setSidebarOpen("");
    setSidebarContainerOpen("");
    setMain(""); //appMain.removeAttribute("guide-persistent-and-visible", "");
    setScrimVis("hidden");
    body.style.removeProperty("overflow");
  };

  //close guide menu when clicking on scrim
  const clickScrim = () => {
    console.log("clicked scrim");
    setSidebarOpen("");
    setSidebarContainerOpen("");
    setScrimVis("hidden");
    body.style.removeProperty("overflow");
  };

  //close guide menu on escape
  (() => {
    window.onkeyup = function(e) {
      if (e.keyCode === 27) {
        if (scrimVis === "visible") {
          closeGuideMenu();
          setScrimVis("hidden");
        }
      }
    };
  })();

  return (
    <>
      <SkipNav id="skip-navigation" anchor="#content" />
      <Topbar>
        <TopbarMenuBtn label="Guide" clicked={toggleMenu}>
          <MenuIcon title="menu" />
        </TopbarMenuBtn>
      </Topbar>

      <Sidebar persistent={sidebarPersist} open={sidebarOpen}>
        <Scrim visibility={scrimVis} clicked={clickScrim} />
        <SidebarContainer open={sidebarContainerOpen}>
          <Guide>
            <GuideSpacer visiblity="visible" />
            <GuideMenuBtn label="Guide" clicked={closeGuideMenu}>
              <MenuIcon />
            </GuideMenuBtn>
          </Guide>
        </SidebarContainer>
      </Sidebar>

      {/* <MiniGuide visibility={miniGuide}>minini</MiniGuide> */}

      <Main guide={main}>
        <p>dddddddddddddddddd</p>
      </Main>
    </>
  );
};

export default Layout;
