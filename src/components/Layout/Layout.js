import React, { useState, useEffect } from "react";

import { ReactComponent as MenuIcon } from "../../assets/icon-menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { ReactComponent as AlertIcon } from "../../assets/icon-alerts.svg";

import { ReactComponent as HomeIcon } from "../../assets/icon-home.svg";
import { ReactComponent as PresentationIcon } from "../../assets/icon-presentation.svg";
import { ReactComponent as CollectionIcon } from "../../assets/icon-collection.svg";
import { ReactComponent as CourseIcon } from "../../assets/icon-course.svg";

import SkipNav from "./Topbar/SkipNav";
import Topbar from "./Topbar/Topbar";
import TopbarMenu from "./Topbar/TopbarMenu";
import TopbarLogo from "./Topbar/TopbarLogo";

import TopbarMenuBtn from "./Topbar/TopbarMenuBtn";
import TopbarBtnHolder from "./Topbar/TopbarBtnHolder";
import TopbarBtn from "./Topbar/TopbarBtn";
import TopbarAvatarBtn from "./Topbar/TopbarAvatarBtn";
import TopbarAvatar from "./Topbar/TopbarAvatar";

import MiniGuide from "./Sidebar/MiniGuide/MiniGuide";
import MiniGuideNavSection from "./Sidebar/MiniGuide/MiniGuideNavSection";
import MiniGuideNav from "./Sidebar/MiniGuide/MiniGuideNav";
import MiniGuideNavLink from "./Sidebar/MiniGuide/MiniGuideNavLink";
import MiniGuideNavIcon from "./Sidebar/MiniGuide/MiniGuideNavIcon";
import MiniGuideNavItem from "./Sidebar/MiniGuide/MiniGuideNavItem";
import MiniGuideNavText from "./Sidebar/MiniGuide/MiniGuideNavText";

import Sidebar from "./Sidebar/Sidebar";
import SidebarContainer from "./Sidebar/SidebarContainer";
import Scrim from "./Sidebar/Scrim";

import Guide from "./Sidebar/Guide/Guide";
import GuideContent from "./Sidebar/Guide/GuideContent";
import GuideLogo from "./Sidebar/Guide/GuideLogo";
import GuideMenuBtn from "./Sidebar/Guide/GuideMenuBtn";
import GuideHeader from "./Sidebar/Guide/GuideHeader";
import GuideSpacer from "./Sidebar/Guide/GuideSpacer";
import GuideNavSection from "./Sidebar/Guide/GuideNavSection";
import GuideNav from "./Sidebar/Guide/GuideNav";
import GuideNavItem from "./Sidebar/Guide/GuideNavItem";
import GuideNavIcon from "./Sidebar/Guide/GuideNavIcon";
import GuideNavText from "./Sidebar/Guide/GuideNavText";
import GuideNavLink from "./Sidebar/Guide/GuideNavLink";

import Main from "./Main/Main";
import theme from "../../theme/AdminTheme";

import { Switch, Route, NavLink } from "react-router-dom";
import Dashboard from "../../containers/Dashboard";
import Presentations from "../../containers/Presentations";
import Collections from "../../containers/Collections";
import Courses from "../../containers/Courses";

const Layout = props => {
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
    //console.log("togglemenu clicked");
  };

  //close sidebar from the guide button
  const closeGuideMenu = () => {
    setSidebarOpen("");
    setSidebarContainerOpen("");
    setScrimVis("hidden");
    body.style.removeProperty("overflow");
    //console.log("close guide menu clicked");
  };

  //close guide menu when clicking on scrim
  const clickScrim = () => {
    //console.log("clicked scrim");
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

  const mqSizing = () => {
    if (window.innerWidth < theme.breakpoints[1]) {
      setSidebarPersist("");
      setSidebarOpen("");
      setSidebarContainerOpen("");
      setMiniGuide("hidden");
      setMain("foooooooooooooooo");
      setGuideHeader("visible");
      setGuideSpacer("hidden");
      // console.log("small");
    }

    if (
      window.innerWidth >= theme.breakpoints[1] &&
      window.innerWidth < theme.breakpoints[3]
    ) {
      setMiniGuide("visible");
      setSidebarPersist("");
      setSidebarOpen("");
      setSidebarContainerOpen("");
      setScrimVis("hidden");
      setGuideSpacer("hidden");
      document.querySelector("body").style.removeProperty("overflow");
      setMain("mini-guide-visible");
      //console.log("medium");
    }

    if (window.innerWidth >= theme.breakpoints[3]) {
      setSidebarPersist("persistent");
      setSidebarOpen("opened");
      setSidebarContainerOpen("opened");
      setMiniGuide("hidden");
      setMain("guide-persistent-and-visible");
      setScrimVis("hidden");
      document.querySelector("body").style.removeProperty("overflow");
      setGuideHeader("hidden");
      setGuideSpacer("visible");
      //console.log("large");
    }
    //console.log("mqSizing called");
  };

  //initial mq render
  useEffect(() => {
    mqSizing();
  }, []);

  //mq on resize
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      mqSizing();
      console.log("resize debounce");
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  //debounce
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
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

        <TopbarMenu>
          <TopbarBtnHolder>
            <TopbarBtn label="Search">
              <SearchIcon title="search" />
            </TopbarBtn>
          </TopbarBtnHolder>

          <TopbarBtnHolder>
            <TopbarBtn label="Notifications">
              <AlertIcon title="alert" />
            </TopbarBtn>
          </TopbarBtnHolder>

          <TopbarBtnHolder>
            <TopbarAvatarBtn>
              <TopbarAvatar
                imgSrc="https://i.pravatar.cc/300"
                imgAlt="Username"
              />
            </TopbarAvatarBtn>
          </TopbarBtnHolder>
        </TopbarMenu>
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

              <GuideNavSection>
                <GuideNav label="Main">
                  <GuideNavItem>
                    <GuideNavLink>
                      <NavLink to="/dash">
                        <GuideNavIcon>
                          <HomeIcon />
                        </GuideNavIcon>
                        <GuideNavText text="Home" />
                      </NavLink>
                    </GuideNavLink>
                  </GuideNavItem>

                  <GuideNavItem>
                    <GuideNavLink>
                      <NavLink to="/presentations">
                        <GuideNavIcon>
                          <PresentationIcon />
                        </GuideNavIcon>

                        <GuideNavText text="Presentations" />
                      </NavLink>
                    </GuideNavLink>
                  </GuideNavItem>

                  <GuideNavItem>
                    <GuideNavLink>
                      <NavLink to="/collections">
                        <GuideNavIcon>
                          <CollectionIcon />
                        </GuideNavIcon>
                        <GuideNavText text="Collections" />
                      </NavLink>
                    </GuideNavLink>
                  </GuideNavItem>

                  <GuideNavItem>
                    <GuideNavLink>
                      <NavLink to="/courses">
                        <GuideNavIcon>
                          <CourseIcon />
                        </GuideNavIcon>
                        <GuideNavText text="Courses" />
                      </NavLink>
                    </GuideNavLink>
                  </GuideNavItem>
                </GuideNav>
              </GuideNavSection>
            </GuideContent>
          </Guide>
        </SidebarContainer>
      </Sidebar>

      <MiniGuide visibility={miniGuide}>
        <MiniGuideNavSection>
          <MiniGuideNav label="Navigation">
            <MiniGuideNavItem>
              <MiniGuideNavLink>
                <NavLink to="/dash">
                  <MiniGuideNavIcon>
                    <HomeIcon />
                  </MiniGuideNavIcon>
                  <MiniGuideNavText text="Home" />
                </NavLink>
              </MiniGuideNavLink>
            </MiniGuideNavItem>

            <MiniGuideNavItem>
              <MiniGuideNavLink>
                <NavLink to="/presentations">
                  <MiniGuideNavIcon>
                    <PresentationIcon />
                  </MiniGuideNavIcon>
                  <MiniGuideNavText text="Presentations" />
                </NavLink>
              </MiniGuideNavLink>
            </MiniGuideNavItem>

            <MiniGuideNavItem>
              <MiniGuideNavLink>
                <NavLink to="/collections">
                  <MiniGuideNavIcon>
                    <CollectionIcon />
                  </MiniGuideNavIcon>
                  <MiniGuideNavText text="Collections" />
                </NavLink>
              </MiniGuideNavLink>
            </MiniGuideNavItem>

            <MiniGuideNavItem>
              <MiniGuideNavLink>
                <NavLink to="/courses">
                  <MiniGuideNavIcon>
                    <CourseIcon />
                  </MiniGuideNavIcon>
                  <MiniGuideNavText text="Courses" />
                </NavLink>
              </MiniGuideNavLink>
            </MiniGuideNavItem>
          </MiniGuideNav>
        </MiniGuideNavSection>
      </MiniGuide>

      <Main guide={main}>
        <Switch>
          <Route path="/dash" exact strict component={Dashboard} />
          <Route path="/presentations" exact component={Presentations} />
          <Route path="/collections" exact component={Collections} />
          <Route path="/courses" exact component={Courses} />
        </Switch>
      </Main>
    </>
  );
};

export default Layout;
