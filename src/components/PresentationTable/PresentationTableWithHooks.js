//@ts-check
import React, { useState, useEffect } from "react";
import { Checkbox, Table } from "@echo360/ui-lib";
// eslint-disable-next-line no-unused-vars
import { Presentation } from "./PresentationTable";

const PresentationTableWithHooks = () => {
  /**
   * @type {[Presentation[], Function]} Loading
   */
  const [presentations, setPresentations] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerText: "id",
      displayField: "id",
      sortField: "paddedID",
      enableSort: true
    },
    { headerText: "Thumbnail", displayField: "ThumbnailURLElement" },
    {
      headerText: "ConferenceTitle",
      displayField: "ConferenceTitle",
      sortField: "ConferenceTitle",
      enableSort: true
    },
    {
      headerText: "Title",
      displayField: "Title",
      sortField: "Title",
      enableSort: true
    },
    { headerText: "Speakers", displayField: "SpeakerList" }
  ]);
  const [sortField, setSortField] = useState("Title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showHeaders, setShowHeaders] = useState("checked");

  useEffect(() => {
    fetch(
      process.env.REACT_APP_APIBASEURL + "/api/Presentation/GetPresentationList"
    )
      .then(res => res.json())
      /** @param {Presenation[]} presrows */
      .then(presrows => {
        setPresentations(presrows);
        setSortField("Title");
        setSortOrder("asc");
        setShowHeaders("checked");
      })
      .catch(console.log);
  }, []);

  /**
   * Sort callback, consider moving to separate file and generalize if possible
   * @param {string | number} field
   * @param {string} order
   * @returns { any }
   */
  const sortPresentations = (field, order) => {
    const isAsc = order === undefined || order === "asc" ? true : false;
    const sortField = field === undefined ? "Title" : field;
    return (a, b) => {
      if (sortField === "paddedID") {
        const aNum = Number(a.ID);
        const bNum = Number(b.ID);
        if (aNum > bNum) return isAsc ? 1 : -1;
        if (aNum < bNum) return isAsc ? -1 : 1;
        return 0;
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
  };

  /**
   * Creates presentation data suitable for table
   * adds image tag to ThumbnailURL
   * add id for row key
   *
   * @param {Presentation[]} presentations
   * @returns {Presentation[]}
   * */
  const generateRowData = presentations => {
    if (presentations == null) return presentations;
    const sortedPresentations = presentations.sort(
      sortPresentations(sortField, sortOrder)
    );
    return sortedPresentations.slice(0, 20).map(presentation => {
      const numRows = presentation.Speakers.length;
      return {
        ...presentation,
        ThumbnailURLElement: (
          <img src={presentation.ThumbnailURL} alt={"Thumbnail"} width="100" />
        ),
        id: presentation.ID,
        paddedID: zeroPad(presentation.ID, 8),
        SpeakerList: presentation.Speakers.map((speaker, i) => {
          return (
            speaker.FullName +
            " (" +
            speaker.RoleText +
            ")" +
            (i < numRows - 1 ? ", " : "")
          );
        })
      };
    }); // TODO: calculate pagination
  };

  const handleHeaderChange = value => setShowHeaders(value);

  const handleSortChange = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <React.Fragment>
      <Checkbox
        id="toggle-show-headers"
        value={showHeaders}
        label="Show headers"
        onChange={handleHeaderChange}
      />
      <br />
      <Table
        columnDefs={columnDefs}
        data={generateRowData(presentations)}
        hideHeaders={showHeaders === "unchecked"}
        sortField={sortField}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
        onRowClick={id => alert("Clicked " + id)}
      />
    </React.Fragment>
  );
};

export default PresentationTableWithHooks;
