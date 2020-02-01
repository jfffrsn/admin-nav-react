import React from "react";
import { Helmet } from "react-helmet";

import PageHeader from "../components/PageHeader/PageHeader";
import PageHeaderBtnContainer from "../components/PageHeader/PageHeaderBtnContainer";
import PageHeaderBtnList from "../components/PageHeader/PageHeaderBtnList";
import PageHeaderBtnListItem from "../components/PageHeader/PageHeaderBtnListItem";
import { Button } from "@echo360/ui-lib";

import PresentationTable from "../components/PresentationTable/PresentationTable";

const Presentations = () => {
  return (
    <>
      <Helmet>
        <title>Presentations</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <PageHeader
        title="Presentations"
        buttons={
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
        }
      />

      <PresentationTable />
    </>
  );
};

export default Presentations;
