import React from "react";

import PageHeaderContainer from "./PageHeaderContainer";
import PageHeaderTitle from "./PageHeaderTitle";

const PageHeader = ({ title, buttons, isSticky }) => {
  return (
    <PageHeaderContainer isSticky={isSticky}>
      <PageHeaderTitle title={title}></PageHeaderTitle>
      {buttons}
    </PageHeaderContainer>
  );
};

export default PageHeader;
