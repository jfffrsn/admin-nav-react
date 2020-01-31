import React from "react";

import PageHeaderContainer from "./PageHeaderContainer";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderBtnContainer from "./PageHeaderBtnContainer";
import PageHeaderBtnList from "./PageHeaderBtnList";
import PageHeaderBtnListItem from "./PageHeaderBtnListItem";

import { Button } from "@echo360/ui-lib";

const PageHeader = () => {
  return (
    <PageHeaderContainer>
      <PageHeaderTitle as="h1" title="Page title" />
      <PageHeaderBtnContainer>
        <PageHeaderBtnList>
          <PageHeaderBtnListItem>
            <Button primary label="button text" onClick={() => {}} />
          </PageHeaderBtnListItem>
          <PageHeaderBtnListItem>
            <Button secondary label="button text" onClick={() => {}} />
          </PageHeaderBtnListItem>
          <PageHeaderBtnListItem>
            <Button primary label="button text" onClick={() => {}} />
          </PageHeaderBtnListItem>
        </PageHeaderBtnList>
      </PageHeaderBtnContainer>
    </PageHeaderContainer>
  );
};

export default PageHeader;
