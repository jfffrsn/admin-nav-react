import React from "react";
import { Helmet } from "react-helmet";
import theme from "../theme/AdminTheme";

import PageHeader from "../components/PageHeader/PageHeader";
import PageHeaderBtnContainer from "../components/PageHeader/PageHeaderBtnContainer";
import PageHeaderBtnList from "../components/PageHeader/PageHeaderBtnList";
import PageHeaderBtnListItem from "../components/PageHeader/PageHeaderBtnListItem";
import { Button, TextInput } from "@echo360/ui-lib";

import Box from "../components/Box/Box";
import BoxHeader from "../components/Box/BoxHeader";
import BoxHeaderBtnContainer from "../components/Box/BoxHeaderBtnContainer";
import BoxHeaderBtnList from "../components/Box/BoxHeaderBtnList";
import BoxHeaderBtnListItem from "../components/Box/BoxHeaderBtnListItem";
import BoxDivider from "../components/Box/BoxDivider";

import PageGrid from "../components/PageGrid/PageGrid";

import ResponsiveImage from "../components/Helpers/ResponsiveImage";

import FormGroup from "../components/Forms/FormGroup";

import MediaList from "../components/MediaList/MediaList";
import MediaListItem from "../components/MediaList/MediaListItem";

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
        />
        <PageGrid
          main={
            <>
              <Box>
                <FormGroup>
                  <TextInput
                    noMaxWidth
                    style={{ fontWeight: 600, fontSize: theme.fontSizes[3] }}
                    id="textInput1"
                    label="Title"
                    //onChange={v => {
                    //  setState({ val: v });
                    // }}
                    placeholder="placeholder"
                    //value={state.val}
                  />
                </FormGroup>
                <FormGroup>
                  <TextInput
                    noMaxWidth
                    style={{ fontWeight: 600, fontSize: theme.fontSizes[3] }}
                    id="textInput2"
                    label="Description"
                    //onChange={v => {
                    //  setState({ val: v });
                    // }}
                    placeholder="placeholder"
                    //value={state.val}
                  />
                </FormGroup>
              </Box>
              <Box>
                <BoxHeader title="Faculty" />
                second box
                <MediaList>
                  <MediaListItem
                    title="foo"
                    description="mmmmmm"
                    src="https://placeimg.com/400/225/tech"
                    alt="thumbnail"
                  />
                  <MediaListItem
                    title="foo"
                    description="mmmmmm"
                    src="https://placeimg.com/400/225/arch"
                    alt="thumbnail"
                  />
                  <MediaListItem
                    title="foo"
                    description="mmmmmm"
                    src="https://placeimg.com/300/300/people"
                    alt="person"
                    isFaculty
                  />
                </MediaList>
              </Box>
            </>
          }
          sidebar={
            <>
              <Box>
                <BoxHeader
                  title="Thumbnail"
                  buttons={
                    <BoxHeaderBtnContainer>
                      <BoxHeaderBtnList>
                        <BoxHeaderBtnListItem>
                          <Button secondary label="Edit" onClick={() => {}} />
                        </BoxHeaderBtnListItem>
                      </BoxHeaderBtnList>
                    </BoxHeaderBtnContainer>
                  }
                />

                <p>
                  <ResponsiveImage
                    src="https://placeimg.com/800/450/tech"
                    alt="placeholder"
                  />
                </p>
              </Box>

              <Box>
                <BoxHeader title="Visibility" />
                second box
                <BoxDivider />
                sd
              </Box>
            </>
          }
        />
      </section>
    </>
  );
};

export default Collections;
