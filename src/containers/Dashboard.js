import React from "react";

import PageHeader from "../components/PageHeader/PageHeader";
import Box from "../components/Box/Box";

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

import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <section>
        <PageHeader title="Dashboard" />
        <Box>
          <Display1 as="h1" text="display1" />

          <Display2 as="h1" text="display2" />

          <Display3 as="h1" text="display3" />

          <Display4 as="h1" text="display4" />

          <Heading1 as="h1" text="heading1" />

          <Heading2 as="h2" text="heading2" />

          <Heading3 as="h3" text="heading3" />

          <Heading4 as="h4" text="heading4" />

          <Heading5 as="h5" text="heading5" />

          <Heading6 as="h6" text="heading6" />
        </Box>
      </section>
    </>
  );
};

export default Dashboard;
