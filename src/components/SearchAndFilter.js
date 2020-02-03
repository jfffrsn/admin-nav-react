/** @format */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { Button, colors, Icon, TextInput, variables } from "@echo360/ui-lib"
import { rgba } from "polished"

import { i18n } from "../services/Messages/Messages"

const propTypes = {
  activeFilterCount: PropTypes.number,
  isActive: PropTypes.bool,
  onFilterButtonClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  searchTextPlaceholder: PropTypes.string
}

const defaultProps = {
  activeFilterCount: 0,
  searchText: "",
  searchTextPlaceholder: i18n("Labels.search")
}

const FilterButton = styled(Button)`
  flex-shrink: 0;
  width: 145px;
  height: 3rem;
`

const Divider = styled.div`
  background-color: ${colors.palette.veryLightGrey};
  opacity: 0.5;
  width: 2px;
  height: 2rem;
`

const SearchIcon = styled(Icon)`
  width: 1.625rem;
  height: 1.625rem;
  margin-left: 0.625rem;
  flex-shrink: 0;
  color: ${colors.palette.echoBlue};
`

const SearchInput = styled(TextInput)`
  input {
    &:hover {
      background-color: ${colors.palette.white};
    }
  }
`

const SearchBar = styled.div`
  background-color: ${colors.backgrounds.light};
  height: 3rem;
  border-radius: ${variables.inputs.borderRadius};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  ${props => props.active && `border: solid 1px ${colors.palette.echoBlue};`}
  ${props => props.active && `box-shadow: 0 2px 5px 0 ${rgba(colors.palette.a11yGrey, 0.3)};`}
`

class SearchAndFilter extends React.PureComponent {
  render() {
    const {
      activeFilterCount,
      isActive,
      onFilterButtonClick,
      onSearchTextChange,
      searchText,
      searchTextPlaceholder
    } = this.props
    return (
      <SearchBar active={isActive}>
        <SearchIcon name="search" />
        <SearchInput
          id="search-box"
          onChange={onSearchTextChange}
          value={searchText}
          hasBorder={false}
          placeholder={searchTextPlaceholder}
          label={i18n("Labels.search")}
          name="search-box"
          hideLabel
          noMaxWidth
        />
        <Divider />
        <FilterButton
          id="filter-button"
          iconName="filter"
          text
          label={`${i18n("Labels.filters")} (${activeFilterCount})`}
          onClick={onFilterButtonClick}
          isWide
        />
      </SearchBar>
    )
  }
}

SearchAndFilter.propTypes = propTypes

SearchAndFilter.defaultProps = defaultProps

export default SearchAndFilter