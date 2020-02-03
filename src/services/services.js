/** @format */

import Ajax from '../util/Ajax'

require("isomorphic-fetch")

function fetchPresentationTable(signal = null) {
  return Ajax.fetchJson(process.env.REACT_APP_APIBASEURL + '/api/Presentation/GetPresentationList', "GET", null, null, signal)
}

export { fetchPresentationTable }