/** @format */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { IconButton, LayoutGrid } from "@echo360/ui-lib"

import { i18nX } from "../i18n"

const PaginationNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  button {
    border: none;
  }
`
const PaginationButton = styled(IconButton)`
  margin: 0 0.125rem;
  svg {
    transform: rotate(90deg);
  }
`
const PaginationText = styled.span`
  font-size: 0.75rem;
  align-self: center;
  padding-right: 1rem;
`

const CurrentPage = styled.span`
  display: flex;
  height: 100%;
  padding-left: 1rem;
`

const propTypes = {
  itemCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  pageNumber: PropTypes.number,
  pageSize: PropTypes.number,
  onPageChange: PropTypes.func.isRequired
}

const defaultProps = {
  pageNumber: undefined,
  pageSize: 50
}

const Paginator = ({ name, itemCount, pageNumber, pageSize, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize)

  const goToFirstPage = () => onPageChange(undefined)

  const goToPreviousPage = () => {
    const previousPage = pageNumber ? pageNumber - 1 : undefined
    onPageChange(previousPage)
  }

  const goToNextPage = () => {
    const nextPage = pageNumber ? pageNumber + 1 : 1
    onPageChange(nextPage)
  }

  const goToLastPage = () => {
    const lastPage = pageCount - 1
    onPageChange(lastPage)
  }

  if (pageCount > 1) {
    const firstItemShown = pageNumber * pageSize
    const lastItemShown =
      firstItemShown + pageSize > itemCount ? itemCount : firstItemShown + pageSize
    const isFirstPage = pageNumber === 0
    const isLastPage = pageNumber + 1 === pageCount
    return (
      <PaginationNav id={`${name}-pagination`} aria-label="Pagination controls">
        <PaginationText id={`${name}-pagination-total`}>
          {i18nX.t("Paginator.showingItems", firstItemShown + 1, lastItemShown, itemCount) }
        </PaginationText>
        <LayoutGrid>
          <IconButton
            id={`${name}-pagination-first`}
            label={i18nX.t("Paginator.goToFirstPage")}
            iconName="rewind"
            disabled={isFirstPage}
            onClick={goToFirstPage}
          />
          <PaginationButton
            id={`${name}-pagination-previous`}
            label={i18nX.t("Paginator.goToPage", pageNumber)}
            iconName="triangle-down"
            disabled={isFirstPage}
            onClick={goToPreviousPage}
          />
          <CurrentPage>
            <PaginationText id={`${name}-pagination-current`}>
              {i18nX.t("Paginator.page", pageNumber + 1)}
            </PaginationText>
          </CurrentPage>
          <PaginationButton
            id={`${name}-pagination-next`}
            label={i18nX.t("Paginator.goToPage", pageNumber + 2)}
            iconName="triangle-up"
            disabled={isLastPage}
            onClick={goToNextPage}
          />
          <IconButton
            id={`${name}-pagination-last`}
            label={i18nX.t("Paginator.goToLastPage")}
            iconName="fast-forward"
            disabled={isLastPage}
            onClick={goToLastPage}
          />
        </LayoutGrid>
      </PaginationNav>
    )
  }
  return null
}

Paginator.propTypes = propTypes
Paginator.defaultProps = defaultProps

export default Paginator
