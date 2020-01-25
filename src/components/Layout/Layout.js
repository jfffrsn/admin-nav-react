import React from "react";

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

import useMedia from "../../hooks/useMedia";

function Layout(props) {
  let small = useMedia("(min-width: 48rem)");
  let medium = useMedia("(min-width: 63.25rem)");
  let large = useMedia("(min-width: 80rem)");

  let sbp = "";
  if (small && !medium) {
    sbp = "one";
  } else if (medium && !large) {
    sbp = "two";
  } else if (large) {
    sbp = "persistent";
  }

  let sbo = "";
  if (small && !medium) {
    sbo = "aaa";
  } else if (medium && !large) {
    sbo = "bbb";
  } else if (large) {
    sbo = "opened";
  }

  let sbc = "";
  if (small && !medium) {
    sbc = "hidden";
  } else if (medium && !large) {
    sbc = "hidden";
  } else if (large) {
    sbc = "opened";
  }

  let scrv = "visible";
  if (small || medium) {
    scrv = "visible";
  } else if (large) {
    scrv = "hidden";
  }

  let gspc = "visible";
  if (small || medium) {
    gspc = "visible";
  } else if (large) {
    gspc = "hidden";
  }

  let ghdr = "hidden";
  if (small || medium) {
    ghdr = "hidden";
  } else if (large) {
    ghdr = "visible";
  }

  let minig = "hidden";
  if (small || medium) {
    minig = "visible";
  } else if (large) {
    minig = "hidden";
  }
  let mn = "0000";
  if (small && !medium && !large) {
    mn = "";
  } else if (medium && !large) {
    mn = "mini-guide-visible";
  } else if (large) {
    mn = "guide-persistent-and-visible";
  }

  const toggleMenu = fart => {
    alert("Hello!");
  };

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

      <Sidebar persistent={sbp} open={sbo}>
        <Scrim visibility={scrv} />
        <SidebarContainer open={sbc}>
          <Guide>
            <GuideSpacer visiblity={gspc} />

            <GuideContent>
              <GuideHeader visiblity={ghdr}>
                <GuideMenuBtn label="Guide">
                  <MenuIcon />
                </GuideMenuBtn>
                <GuideLogo />
              </GuideHeader>

              <GuideNavSection>
                <GuideNav label="Main">
                  <GuideNavItem>
                    <GuideNavLink href="1">
                      <GuideNavIcon>
                        <HomeIcon />
                      </GuideNavIcon>
                      <GuideNavText text="Home" />
                    </GuideNavLink>
                  </GuideNavItem>

                  <GuideNavItem>
                    <GuideNavLink href="2">
                      <GuideNavIcon>
                        <PresentationIcon />
                      </GuideNavIcon>
                      <GuideNavText text="Presentations" />
                    </GuideNavLink>
                  </GuideNavItem>

                  <GuideNavItem>
                    <GuideNavLink href="3">
                      <GuideNavIcon>
                        <CollectionIcon />
                      </GuideNavIcon>
                      <GuideNavText text="Collections" />
                    </GuideNavLink>
                  </GuideNavItem>

                  <GuideNavItem>
                    <GuideNavLink href="4">
                      <GuideNavIcon>
                        <CourseIcon />
                      </GuideNavIcon>
                      <GuideNavText text="Courses" />
                    </GuideNavLink>
                  </GuideNavItem>
                </GuideNav>
              </GuideNavSection>
            </GuideContent>
          </Guide>
        </SidebarContainer>
      </Sidebar>

      <MiniGuide visibility={minig}>
        <MiniGuideNavSection>
          <MiniGuideNav label="Navigation">
            <MiniGuideNavItem>
              <MiniGuideNavLink href="1">
                <MiniGuideNavIcon>
                  <HomeIcon />
                </MiniGuideNavIcon>
                <MiniGuideNavText text="Home" />
              </MiniGuideNavLink>
            </MiniGuideNavItem>

            <MiniGuideNavItem>
              <MiniGuideNavLink href="2">
                <MiniGuideNavIcon>
                  <PresentationIcon />
                </MiniGuideNavIcon>
                <MiniGuideNavText text="Presentations" />
              </MiniGuideNavLink>
            </MiniGuideNavItem>

            <MiniGuideNavItem>
              <MiniGuideNavLink href="3">
                <MiniGuideNavIcon>
                  <CollectionIcon />
                </MiniGuideNavIcon>
                <MiniGuideNavText text="Collections" />
              </MiniGuideNavLink>
            </MiniGuideNavItem>

            <MiniGuideNavItem>
              <MiniGuideNavLink href="4">
                <MiniGuideNavIcon>
                  <CourseIcon />
                </MiniGuideNavIcon>
                <MiniGuideNavText text="Courses" />
              </MiniGuideNavLink>
            </MiniGuideNavItem>
          </MiniGuideNav>
        </MiniGuideNavSection>
      </MiniGuide>

      <Main guide={mn}>
        <div className="Media">
          <h1>Media</h1>
          <h2 style={{ color: "darkred" }}>Change this window size</h2>
          <p>Small? {small ? "Yep" : "Nope"}.</p>
          <p>Medium? {medium ? "Yep" : "Nope"}.</p>
          <p>Large? {large ? "Yep" : "Nope"}.</p>
        </div>

        <p>
          <a href="http://google.com">link</a>
          1Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sint?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, esse
          eveniet odio dolorem voluptas illo consequuntur modi corporis, veniam
          tenetur, suscipit qui doloribus temporibus atque voluptatum! Dolore ad
          numquam tempore repellendus laudantium iure consequatur iusto quas
          doloremque corrupti doloribus, quod corporis pariatur temporibus sed
          cupiditate repellat accusamus incidunt excepturi. Corporis, itaque
          repellat nostrum ipsa vel quae velit reiciendis aliquid in. Optio,
          dicta? Explicabo illum rem, temporibus quod quae ad. Unde repellat
          eligendi nulla quidem nobis id, dolorem quas possimus ratione quos
          nemo nihil commodi similique blanditiis sed facere veniam sequi
          aperiam, alias dolore. Mollitia aliquam nihil dolorem aut esse
          inventore.
        </p>
      </Main>
    </>
  );
}

export default Layout;
