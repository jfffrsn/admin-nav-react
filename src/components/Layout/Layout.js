import React, { useState, useEffect } from "react";

import { ReactComponent as MenuIcon } from "../../assets/icon-menu.svg";

import SkipNav from "./Topbar/SkipNav";
import Topbar from "./Topbar/Topbar";
import TopbarLogo from "./Topbar/TopbarLogo";
import TopbarMenuBtn from "./Topbar/TopbarMenuBtn";

import Main from "./Main/Main";

import Sidebar from "./Sidebar/Sidebar";
import SidebarContainer from "./Sidebar/SidebarContainer";
import Scrim from "./Sidebar/Scrim";

import MiniGuide from "./Sidebar/MiniGuide/MiniGuide";

import Guide from "./Sidebar/Guide/Guide";
import GuideContent from "./Sidebar/Guide/GuideContent";
import GuideLogo from "./Sidebar/Guide/GuideLogo";
import GuideSpacer from "./Sidebar/Guide/GuideSpacer";
import GuideMenuBtn from "./Sidebar/Guide/GuideMenuBtn";
import GuideHeader from "./Sidebar/Guide/GuideHeader";

const Layout = props => {
  //
  const body = document.querySelector("body");
  const [main, setMain] = useState("");
  const [miniGuide, setMiniGuide] = useState("hidden");
  const [sidebarPersist, setSidebarPersist] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState("");
  const [sidebarContainerOpen, setSidebarContainerOpen] = useState("");
  const [scrimVis, setScrimVis] = useState("hidden");
  const [guideHeader, setGuideHeader] = useState("hidden");
  const [guideSpacer, setGuideSpacer] = useState("hidden");

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
      //figure out how to set focus to GuideMenuBtn
      setScrimVis("visible");
      setGuideHeader("visible");
    }
    console.log("togglemenu clicked");
  };

  //close sidebar from the guide button
  const closeGuideMenu = () => {
    setSidebarOpen("");
    setSidebarContainerOpen("");
    //setMain(""); //appMain.removeAttribute("guide-persistent-and-visible", "");
    setScrimVis("hidden");
    body.style.removeProperty("overflow");
    console.log("close guide menu clicked");
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

  //useEffect initial render
  useEffect(() => {
    if (window.innerWidth >= 0 && window.innerWidth < 768) {
      setSidebarPersist("");
      setSidebarOpen("");
      setSidebarContainerOpen("");
      setMiniGuide("hidden");
      setMain("");
      setGuideHeader("visible");
      setGuideSpacer("hidden");
      console.log("small");
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setMiniGuide("visible");
      setSidebarOpen("");
      setSidebarContainerOpen("");
      setScrimVis("hidden");
      document.querySelector("body").style.removeProperty("overflow");
      setMain("mini-guide-visible");
      console.log("medium");
    }

    if (window.innerWidth >= 1280) {
      setSidebarPersist("persistent");
      setSidebarOpen("opened");
      setSidebarContainerOpen("opened");
      setMiniGuide("hidden");
      setMain("guide-persistent-and-visible");
      setScrimVis("hidden");
      document.querySelector("body").style.removeProperty("overflow");
      setGuideHeader("hidden");
      setGuideSpacer("visible");
      console.log("large");
    }
  }, []);

  ///

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (window.innerWidth >= 0 && window.innerWidth < 768) {
        setSidebarPersist("");
        setSidebarOpen("");
        setSidebarContainerOpen("");
        setMiniGuide("hidden");
        setMain("");
        setGuideHeader("visible");
        setGuideSpacer("hidden");
        console.log("small");
      }

      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setMiniGuide("visible");
        setSidebarOpen("");
        setSidebarContainerOpen("");
        setScrimVis("hidden");
        body.style.removeProperty("overflow");
        setMain("mini-guide-visible");
        console.log("medium");
      }

      if (window.innerWidth >= 1280) {
        setSidebarPersist("persistent");
        setSidebarOpen("opened");
        setSidebarContainerOpen("opened");
        setMiniGuide("hidden");
        setMain("guide-persistent-and-visible");
        setScrimVis("hidden");
        body.style.removeProperty("overflow");
        setGuideHeader("hidden");
        setGuideSpacer("visible");
        console.log("large");
      }

      console.log("resize debounce");
    }, 50);

    window.addEventListener("resize", debouncedHandleResize);

    return _ => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  //debounce
  function debounce(fn, ms) {
    let timer;
    return _ => {
      clearTimeout(timer);
      timer = setTimeout(_ => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  return (
    <>
      <SkipNav id="skip-navigation" anchor="#content" />
      <Topbar>
        <TopbarMenuBtn label="Guide" clicked={toggleMenu}>
          <MenuIcon title="menu" />
        </TopbarMenuBtn>

        <TopbarLogo />
      </Topbar>

      <Sidebar persistent={sidebarPersist} open={sidebarOpen}>
        <Scrim visibility={scrimVis} clicked={clickScrim} />
        <SidebarContainer open={sidebarContainerOpen}>
          <Guide>
            <GuideSpacer visiblity={guideSpacer} />

            <GuideContent>
              <GuideHeader visiblity={guideHeader}>
                <GuideMenuBtn label="Guide" clicked={closeGuideMenu}>
                  <MenuIcon />
                </GuideMenuBtn>
                <GuideLogo />
              </GuideHeader>
            </GuideContent>
          </Guide>
        </SidebarContainer>
      </Sidebar>

      <MiniGuide visibility={miniGuide}>minini</MiniGuide>

      <Main guide={main}>
        <p>dddddddddddddddddd</p>
      </Main>
    </>
  );
};

export default Layout;
