import React from "react";
import { Helmet } from "react-helmet";

import PageHeader from "../components/PageHeader/PageHeader";
import PageHeaderBtnContainer from "../components/PageHeader/PageHeaderBtnContainer";
import PageHeaderBtnList from "../components/PageHeader/PageHeaderBtnList";
import PageHeaderBtnListItem from "../components/PageHeader/PageHeaderBtnListItem";
import { Button } from "@echo360/ui-lib";

import { Heading5 } from "../components/Typography/Headlines/Headings";
import Box from "../components/Box/Box";

import PageGrid from "../components/PageGrid/PageGrid";

import ResponsiveImage from "../components/Helpers/ResponsiveImage";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Collections</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <section>
        <PageHeader
          title="Collections"
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
        />{" "}
        <PageGrid
          main={
            <Box>
              <Heading5 as="h2" text="main" />
              <p>sddfsddsdsdf</p>
            </Box>
          }
          sidebar={
            <Box>
              <Heading5 as="h2" text="side" />
              <p>sidebar</p>
              <p>
                <ResponsiveImage
                  src="https://placeimg.com/800/450/tech"
                  alt="placeholder"
                />
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                dolorum. Voluptatibus expedita beatae, esse voluptatum mollitia
                magni ipsum quam id.
              </p>
            </Box>
          }
        />
      </section>
    </>
  );
};

export default Collections;
