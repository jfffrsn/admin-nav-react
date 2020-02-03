/** @format */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { IconButton, PopupMenu } from "@echo360/ui-lib"

const propTypes = {
  activeView: PropTypes.oneOf(["grid", "list"]),
  onViewChange: PropTypes.func.isRequired
}
const defaultProps = {
  activeView: "grid"
}

const ViewButton = styled(IconButton).attrs({
  isToggle: true
})`
  border: none;
  padding: 0 0.5rem;
`

const ViewSelector = ({ activeView, className, onViewChange }) => {
  const handleGridClick = () => {
    if (activeView !== "grid") onViewChange("grid")
  }
  const handleListClick = () => {
    if (activeView !== "list") onViewChange("list")
  }

  return (
    <div className={className}>
      <PopupMenu
        className={className}
        id="view-selector"
        triggerButton={
          <ViewButton iconName={activeView} label="change layout" onClick={() => {}} />
        }
      >
        <ViewButton
          label="switch to grid layout"
          isPressed={activeView === "grid"}
          iconName="grid"
          onClick={handleGridClick}
        />
        <ViewButton
          label="switch to list layout"
          isPressed={activeView === "list"}
          iconName="list"
          onClick={handleListClick}
        />
      </PopupMenu>
    </div>
  )
}

ViewSelector.propTypes = propTypes
ViewSelector.defaultProps = defaultProps
export default ViewSelector
