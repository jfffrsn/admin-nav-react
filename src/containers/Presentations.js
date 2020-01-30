import React from "react";
import { Helmet } from "react-helmet";

import PresentationTable from "../components/PresentationTable/PresentationTable";

const Presentations = () => {
  return (
    <>
      <Helmet>
        <title>Presentations</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <PresentationTable />
    </>
  );
};

export default Presentations;
