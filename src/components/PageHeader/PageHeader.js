import React from "react";

import PageHeaderContainer from "./PageHeaderContainer";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderBtnContainer from "./PageHeaderBtnContainer";
import PageHeaderBtnList from "./PageHeaderBtnList";
import PageHeaderBtnListItem from "./PageHeaderBtnListItem";

import { Button } from "@echo360/ui-lib";

const PageHeader = ({ title }) => {
  return (
    <PageHeaderContainer>
      <PageHeaderTitle title={title} />
      <PageHeaderBtnContainer>
        <PageHeaderBtnList>
          <PageHeaderBtnListItem>
            <Button secondary label="button" onClick={() => {}} />
          </PageHeaderBtnListItem>
          <PageHeaderBtnListItem>
            <Button primary label="button" onClick={() => {}} />
          </PageHeaderBtnListItem>
        </PageHeaderBtnList>
      </PageHeaderBtnContainer>
    </PageHeaderContainer>
  );
};

export default PageHeader;
