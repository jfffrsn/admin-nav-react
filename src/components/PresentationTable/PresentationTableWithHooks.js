//@ts-check
import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Checkbox, Table } from "@echo360/ui-lib";
// eslint-disable-next-line no-unused-vars
import { Presentation } from "./PresentationTable";
import { StyledTable } from "../commonComponents";
import styled from "styled-components/macro";
import { i18nX } from "../../i18n";
import Paginator from "../Paginator";

const columnDefs =
  [{ headerText: i18nX.t("PresentationTableHeader.id"), displayField: 'id', sortField: 'paddedID', enableSort: true },
  { headerText: i18nX.t("PresentationTableHeader.thumbnail"), displayField: 'ThumbnailURLElement' },
  { headerText: i18nX.t("PresentationTableHeader.conferenceTitle"), displayField: 'ConferenceTitle', sortField: 'ConferenceTitle', enableSort: true },
  { headerText: i18nX.t("PresentationTableHeader.presentationTitle"), displayField: 'Title', sortField: 'Title', enableSort: true },
  { headerText: i18nX.t("PresentationTableHeader.speakers"), displayField: 'SpeakerList' }]

const PresentationTableWithHooks = () => {

  /** 
   * @type {[Presentation[], Function]} Loading
   */
  const [presentations, setPresentations] = useState(undefined);
  const [sortField, setSortField] = useState("Title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showHeaders, setShowHeaders] = useState("checked");
  const [pageNumber, setPageNumber] = useState(undefined);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(process.env.REACT_APP_APIBASEURL + '/api/Presentation/GetPresentationList', { signal: signal })
      .then(res => res.json())
      /** @param {Presenation[]} presentations */
      .then((presentations) => {
        setPresentations(presentations);
        setSortField("Title");
        setSortOrder("asc");
        setShowHeaders("checked");
        setPageSize(20);
      })
      .catch(console.log)

    return function cleanup() {
      abortController.abort();
    }
  }, []);

  // Handlers

  const handleHeaderChange = value => setShowHeaders(value);
  const handlePageChange = pageNumber => setPageNumber(pageNumber);
  const handleSortChange = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  }

  // Methods

  /** 
  * Creates presentation data suitable for table
  * adds image tag to ThumbnailURL
  * add id for row key
  * 
  * @param {Presentation[]} presentations
  * @returns {Presentation[]} 
  * */
  const generateRowData = (presentations) => {
    if (presentations == null) return presentations;
    const sortedPresentations = presentations.sort(sortPresentations(sortField, sortOrder));
    return getCurrentPageContents(sortedPresentations).map(presentation => {
      const numRows = presentation.Speakers.length;
      return {
        ...presentation,
        ThumbnailURLElement: <img src={presentation.ThumbnailURL} alt={"Thumbnail"} width="100" />,
        id: presentation.ID,
        paddedID: zeroPad(presentation.ID, 8),
        SpeakerList: presentation.Speakers.map((speaker, i) => { return speaker.FullName + ' (' + speaker.RoleText + ')' + ((i < numRows - 1) ? ', ' : '') })
      };
    });
  }

  /**
   * 
   * @param {Presentation[]} presentations 
   */
  const getCurrentPage = (presentations) => {
    let currentPage = pageNumber || 0
    if (presentations) {
      const pageCount = Math.ceil(presentations.length / pageSize)
      currentPage = currentPage + 1 > pageCount ? pageCount : currentPage
      currentPage = currentPage <= 0 ? undefined : currentPage

      if (pageNumber !== currentPage) setPageNumber(currentPage)
    }
    return currentPage || 0
  }

  /**
   * 
   * @param {Presentation[]} presentations 
   */
  const getCurrentPageContents = (presentations) => {
    const pageCount = Math.ceil(presentations.length / pageSize)
    if (pageCount > 1) {
      const currentPage = getCurrentPage(presentations)
      return presentations.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    }
    return presentations
  }

  /**
   * Sort callback, consider moving to separate file and generalize if possible
   * @param {string | number} field
   * @param {string} order 
   * @returns { any }
   */
  const sortPresentations = (field, order) => {
    const isAsc = (order === undefined || order === "asc") ? true : false;
    const sortField = (field === undefined) ? "Title" : field;
    return (a, b) => {
      if (sortField === "paddedID") {
        const aNum = Number(a.ID)
        const bNum = Number(b.ID)
        if (aNum > bNum) return isAsc ? 1 : -1
        if (aNum < bNum) return isAsc ? -1 : 1
        return 0
      }

      if (sortField === "Title") {
        if (a.Title > b.Title) return isAsc ? 1 : -1;
        if (a.Title < b.Title) return isAsc ? -1 : 1;
        return 0;
      }
      if (sortField === "ConferenceTitle") {
        if (a.ConferenceTitle > b.ConferenceTitle) return isAsc ? 1 : -1;
        if (a.ConferenceTitle < b.ConferenceTitle) return isAsc ? -1 : 1;
        return 0;
      }
    };
  };

  /**
   * Utility function to pad number with zeros
   */
  const zeroPad = (num, places) => {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }


  const MediaTable = styled(StyledTable)`
    td:last-child {
      text-align: center;
    }
    th {
      flex-grow: 1;
      flex-shrink: 1;
    }
    th:nth-child(2),
    th:nth-child(4) {
      flex-grow: 2;
    }
    th:nth-child(1),
    th:nth-child(3),
    th:nth-child(5) {
      flex-shrink: 2;
    }
    th:nth-child(1),
    th:nth-child(2),
    th:nth-child(4) {
      width: 25%;
    }
    `

  return presentations === undefined ? i18nX.t("loadingData") :
    presentations.length === 0 ? i18nX.t("noData") :
      (
        <React.Fragment>
          <Checkbox id="toggle-show-headers" value={showHeaders} label={i18nX.t("TableHeader.showHeaders")} onChange={handleHeaderChange} />
          <br />
          <MediaTable
            columnDefs={columnDefs}
            data={generateRowData(presentations)}
            hideHeaders={showHeaders === "unchecked"}
            sortField={sortField}
            sortOrder={sortOrder}
            onSortChange={handleSortChange}

            onRowClick={(id) => alert("Clicked " + id)}
          />
          <br />
          <Paginator
            name="media-collection"
            itemCount={presentations === undefined ? 0 : presentations.length}
            pageNumber={getCurrentPage(presentations)}
            onPageChange={handlePageChange}
            pageSize={pageSize}
          />
        </React.Fragment>
      );
};

export default PresentationTableWithHooks;
