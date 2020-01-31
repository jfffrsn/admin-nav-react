import React from "react";
import { Helmet } from "react-helmet";

import PageHeader from "../components/PageHeader/PageHeader";

import { Heading1 } from "../components/Typography/Headlines/Headings";
import Box from "../components/Box/Box";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Collections</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <section>
        <PageHeader></PageHeader>
        <Box border="rgba(0,0,0,.12) 1px solid">
          <Heading1 as="h1" text="Collections" />
        </Box>
      </section>
    </>
  );
};

export default Collections;
