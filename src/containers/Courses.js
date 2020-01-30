import React from "react";
import { Helmet } from "react-helmet";
import PresentationTableWithHooks from "../components/PresentationTable/PresentationTableWithHooks";

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Courses</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <PresentationTableWithHooks />
    </>
  );
};

export default Courses;
