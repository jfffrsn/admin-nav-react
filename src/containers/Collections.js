import React from "react";
import { Heading1 } from "../components/Typography/Headlines/Headings";
import i18n from "../i18n"

const Collections = () => {
  return (
    <section>
      <Heading1 as="h1" text={i18n.t("Collections")} />
    </section>
  );
};

export default Collections;
