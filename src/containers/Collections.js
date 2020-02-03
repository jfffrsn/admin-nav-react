import React from "react";
import { Helmet } from "react-helmet";

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

import MediaListBtnContainer from "../components/MediaList/MediaListBtnContainer";
import MediaListBtnList from "../components/MediaList/MediaListBtnList";
import MediaListBtnListItem from "../components/MediaList/MediaListBtnListItem";

import TextBtn from "../components/Buttons/TextBtn";
import IconBtn from "../components/Buttons/IconBtn";
import { ReactComponent as DeleteIcon } from "../assets/icon-delete.svg";
import { ReactComponent as EditIcon } from "../assets/icon-edit.svg";
import BtnContainer from "../components/Buttons/BtnContainer";
import { i18nX } from "../i18n";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>{i18nX.t("Collections.title")}</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <section>
        <PageHeader
          //tk-pagination-intl-services
          title={i18nX.t("Collections.title")}
          isSticky
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
                <BoxHeader title="Details" />
                <FormGroup>
                  <TextInput
                    noMaxWidth
                    noMinWidth
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
                    noMinWidth
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

                <BtnContainer>
                  <TextBtn text="Add Faculty" />
                </BtnContainer>

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
                    isFaculty
                    title="foo"
                    description="mmmmmm"
                    src="https://placeimg.com/300/300/people"
                    alt="person"
                    buttons={
                      <MediaListBtnContainer>
                        <MediaListBtnList>
                          <MediaListBtnListItem>
                            <IconBtn label="button" onClick={() => {}}>
                              <EditIcon title="Edit" />
                            </IconBtn>
                          </MediaListBtnListItem>

                          <MediaListBtnListItem>
                            <IconBtn label="button" onClick={() => {}}>
                              <DeleteIcon title="Delete" />
                            </IconBtn>
                          </MediaListBtnListItem>
                        </MediaListBtnList>
                      </MediaListBtnContainer>
                    }
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
