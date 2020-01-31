import React from "react";

import PageHeaderContainer from "./PageHeaderContainer";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderBtnContainer from "./PageHeaderBtnContainer";
import PageHeaderBtnList from "./PageHeaderBtnList";
import PageHeaderBtnListItem from "./PageHeaderBtnListItem";

const PageHeader = () => {
  return (
    <PageHeaderContainer>
      <PageHeaderTitle as="h1" title="Page title" />
      <PageHeaderBtnContainer>
        <PageHeaderBtnList>
          <PageHeaderBtnListItem>header buttons</PageHeaderBtnListItem>
          <PageHeaderBtnListItem>header buttons</PageHeaderBtnListItem>
          <PageHeaderBtnListItem>header buttons</PageHeaderBtnListItem>
        </PageHeaderBtnList>
      </PageHeaderBtnContainer>
    </PageHeaderContainer>
  );
};

export default PageHeader;
