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
      <Main guide="guide-persistent-and-visible">
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
