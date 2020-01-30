import React from "react";
import { Heading1 } from "../components/Typography/Headlines/Headings";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <section>
        <Heading1 as="h1" text="Route not found" />
      </section>
    </>
  );
};

export default NotFound;
