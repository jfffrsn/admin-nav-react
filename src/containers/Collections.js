import React from "react";
import { Heading1 } from "../components/Typography/Headlines/Headings";

import { Helmet } from "react-helmet";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Collections</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <section>
        <Heading1 as="h1" text="Collections" />
      </section>
    </>
  );
};

export default Collections;
