import React from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader/PageHeader";
import PageHeaderBtnContainer from "../components/PageHeader/PageHeaderBtnContainer";
import PageHeaderBtnList from "../components/PageHeader/PageHeaderBtnList";
import PageHeaderBtnListItem from "../components/PageHeader/PageHeaderBtnListItem";
import { Button } from "@echo360/ui-lib";

import Box from "../components/Box/Box";
import PresentationTableWithHooks from "../components/PresentationTable/PresentationTableWithHooks";
import { i18nX } from "../i18n";

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>{i18nX.t("Courses.title")}</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <PageHeader
        title={i18nX.t("Courses.title")}
        buttons={
          <PageHeaderBtnContainer>
            <PageHeaderBtnList>
              <PageHeaderBtnListItem>
                <Button secondary label="button" onClick={() => { }} />
              </PageHeaderBtnListItem>
              <PageHeaderBtnListItem>
                <Button primary label="button" onClick={() => { }} />
              </PageHeaderBtnListItem>
            </PageHeaderBtnList>
          </PageHeaderBtnContainer>
        }
      />
      <Box>
        <PresentationTableWithHooks />
      </Box>
    </>
  );
};

export default Courses;
