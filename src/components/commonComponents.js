import styled from "styled-components/macro"
import { Button, colors, Icon, Table, variables } from "@echo360/ui-lib"
import { cover, ellipsis, lighten, rgba } from "polished"
import ViewSel from "./ViewSelector"

const dividerGrey = "#dbdde4"

const Divider = styled.hr`
  margin: 1.4rem 0;
  border: none;
  border-bottom: solid 1px ${dividerGrey};
`

const FilterContent = styled.div`
  min-width: 35rem;
  max-width: 55rem;
  background-color: ${colors.backgrounds.light};
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
`

const FilterDialogButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > button {
    width: 6rem;
    flex-shrink: 0;
  }
  button:nth-of-type(1) {
    margin-right: auto;
  }
  button:nth-of-type(2) {
    margin-right: 0.5rem;
  }
`

const ViewToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
`

const ViewSelector = styled(ViewSel)`
  margin-left: auto;
`
/**************************
 Library card components
***************************/

const DialogContainer = styled.div`
  background-color: ${colors.palette.white};
  border-radius: ${variables.borderRadius};
  font-weight: normal;
  max-width: 98vw;
  min-width: 30rem;
  padding: 1.5rem 2rem;
`

const MenuItem = styled(Button)`
  border: 0;
  justify-content: flex-start;
  padding-left: 0.5rem;
  span {
    font-size: 0.875rem;
    color: ${colors.palette.echoNavy};
    line-height: 1.3125rem;
    font-weight: 400;
  }
`

const MenuTriggerButton = styled(Button)`
  min-height: 1.5rem;
  position: fixed;
  left: -10000px;
  &:after {
    display: none;
  }
  &:focus,
  &[aria-expanded="true"] {
    position: relative;
    padding: 0;
    left: auto;
    width: 1.5rem;
  }
`

const CardWrapper = styled.a`
  background: ${colors.palette.white};
  border-radius: ${variables.borderRadius};
  box-sizing: border-box;
  color: ${colors.palette.echoNavy};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 14.5rem;
  justify-content: space-between;
  margin: 0 1.5rem 1.5rem 0;
  padding: 0.5rem;
  text-decoration: none;
  width: 15.5rem;

  &:hover {
    text-decoration: none;
    & ${MenuTriggerButton} {
      position: relative;
      padding: 0;
      left: auto;
      width: 1.5rem;
    }
  }
`

const AlertDialog = styled(DialogContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  padding: 1rem 1.5rem;
  ${props => props.error && `color: ${colors.palette.red};`}
  button {
    margin-top: 1rem;
    width: 6rem;
  }
`

const DialogContent = styled.div`
  padding: 1rem 0;
`

const getJustifyRuleFromProp = prop => {
  switch (prop || "") {
    case "left":
      return "flex-start"
    case "right":
      return "flex-end"
    case "center":
      return "center"
    case "":
    default:
      return "space-between"
  }
}

const DialogTitle = styled.span`
  align-items: center;
  border-bottom: solid 1px ${dividerGrey};
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-weight: 200;
  justify-content: ${props => getJustifyRuleFromProp(props.align)};
  line-height: 2rem;
  padding-bottom: 1rem;
`

const DialogButtons = styled.span`
  justify-content: ${props => getJustifyRuleFromProp(props.align)};
  display: flex;
  button {
    width: 6rem;
  }
  border-top: solid 1px ${dividerGrey};
  padding-top: 1.5rem;
`

const DialogErrorMessage = styled.div.attrs({
  "aria-live": "assertive"
})`
  color: ${colors.inputs.error};
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
`

const SecondaryInfo = styled.span`
  color: ${colors.palette.slate};
  font-size: 0.875rem;
  line-height: 1.3125rem;
  ${ellipsis("100%")}
`

const CardName = styled.span`
  color: ${colors.palette.echoNavy};
  font-size: 1rem;
  line-height: 1.4rem;
  height: 2.8rem;
  hyphens: auto;
  overflow-wrap: break-word;
  overflow: hidden;
  ${props => props.untitled && `font-style: italic;`}
`

const PreviewWithThumbnail = styled.div`
  background-color: ${colors.palette.echoNavy};
  border-radius: ${variables.borderRadius};
  display: flex;
  height: calc(50% + 0.5rem);
  position: relative;
  justify-content: center;
  align-items: center;
  color: ${colors.palette.white};
  font-size: 0.875rem;
`

const PreviewWithoutThumbnail = styled(PreviewWithThumbnail)`
  flex-direction: column;
  ${CardWrapper}:hover & {
    background-color: ${lighten(0.05, colors.palette.echoNavy)};
  }
`

const ThumbnailOverlay = styled.div`
  ${cover()}
  ${CardWrapper}:hover & {
    background-color: ${rgba(colors.palette.echoNavy, 0.4)};
  }
`

const ThumbnailImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  flex: 0 0 auto;
  object-fit: scale-down;
`

const MetaInfo = styled.div`
  position: absolute;
  display: flex;
  bottom: 0.25rem;
  left: 0.3125rem;
  border-radius: ${variables.borderRadius};
  background-color: ${colors.palette.echoNavy};
  overflow: hidden;
  padding: 0 0.25rem;
  align-items: center;
`

const MediaIcon = styled(Icon)`
  margin-right: 0.25rem;
`

const DateTime = styled.div`
  color: ${colors.palette.slate};
  display: flex;
  font-size: 0.875rem;
  line-height: 1.3125rem;
`

const ShareDialogContainer = styled(DialogContainer)`
  width: 34rem;
`

const StyledTable = styled(Table)`
  td,
  th {
    text-align: left;
  }
  tbody td,
  tbody th {
    word-break: break-word;
  }
`

export {
  AlertDialog,
  CardName,
  CardWrapper,
  DateTime,
  DialogButtons,
  DialogContainer,
  DialogContent,
  DialogErrorMessage,
  DialogTitle,
  Divider,
  dividerGrey,
  FilterContent,
  FilterDialogButtonsContainer,
  MediaIcon,
  MenuTriggerButton,
  MetaInfo,
  MenuItem,
  PreviewWithoutThumbnail,
  PreviewWithThumbnail,
  SecondaryInfo,
  ShareDialogContainer,
  StyledTable,
  ThumbnailImage,
  ThumbnailOverlay,
  ViewToolbarContainer,
  ViewSelector
}
