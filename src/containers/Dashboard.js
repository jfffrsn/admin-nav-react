import React from "react";
import theme from "../theme/AdminTheme";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
} from "../components/Typography/Headlines/Headings";
import {
  Display1,
  Display2,
  Display3,
  Display4
} from "../components/Typography/Display/Display";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Display1 as="h1" text="display1" isDark={false} />
      <Display2 as="h1" text="display2" isDark={false} />
      <Display3 as="h1" text="display3" isDark={false} />
      <Display4 as="h1" text="display4" isDark={false} />

      <Heading1 as="h1" text="heading1" isDark={false} />
      <Heading2 as="h2" text="heading2" />
      <Heading3 as="h3" text="heading3" />
      <Heading4 as="h4" text="heading4" />
      <Heading5 as="h5" text="heading5" />
      <Heading6 as="h6" text="heading6" />
      <section>
        <p>sssssssss</p>
        <p>ddddddd</p>
        <p>xxxxxxxxxxxxxdd</p>
        <p>dcdcdcdcdd</p>
        <p>
          <span style={{ fontFamily: theme.fonts.body }}>
            {theme.fonts.body} this is just for testing
          </span>
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
