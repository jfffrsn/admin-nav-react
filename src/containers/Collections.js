import React from "react";
import { Helmet } from "react-helmet";

import PageHeader from "../components/PageHeader/PageHeader";

import { Heading5 } from "../components/Typography/Headlines/Headings";
import Box from "../components/Box/Box";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Collections</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <section>
        <PageHeader title="Collections"></PageHeader>
        <Box>
          <Heading5 as="h2" text="Collections" />
          <p>sddfsddsdsdf</p>
        </Box>
      </section>
    </>
  );
};

export default Collections;
