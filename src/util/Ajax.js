/** @format */

import logger from "./logger"
import AjaxError from "./AjaxError"

require("isomorphic-fetch")

const $ = require("jquery")
const log = logger("Ajax")

class Ajax {
  static get(url, callback, crossDomain = false) {
    $.ajax({
      url,
      type: "GET",
      crossDomain,
      xhrFields: {
       withCredentials: true
      },
      timeout: 10000,
      success: callback
    })
  }

  static post(url, data, callback, async = true) {
    $.ajax({
      url,
      type: "POST",
      async,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      data: JSON.stringify(data),
      timeout: 10000,
      success: callback
    })
  }

  static fetchJson(url, method = "GET", body = null, extractData = true, signal) {
    const data = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }

    let uri = url
    if (body && (method === "POST" || method === "PUT")) {
      data.body = JSON.stringify(body)
    } else if (body && method === "GET") {
      uri = `${uri}?${this.queryParams(body)}`
    }

    const fetchJsonPromise = fetch(uri, { data, signal }).then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
    })

    if (extractData) {
      return fetchJsonPromise.then(response => {
        //if (response.status === "ok") {
        //  return response.data[0]
      if (response !== undefined && response.length > 0)  {
          return response
        }
        return []
      })
    }

    return fetchJsonPromise
  }

  /**
   * This behaves nearly the same as the fetchJson() function, with a couple of important distinctions:
   *  - If (response.ok === false) the response body JSON will be parsed and an AjaxException will be thrown. This
   *     AjaxException will contain more detailed error info if it is available.
   *  - If (response.ok === false) and the extractData param is set to true (default)
   *     then this function will throw an error instead of returning an empty array as fetchJson() does
   *
   * @param url
   * @param method
   * @param body
   * @param extractData
   * @returns {Promise<Response>}
   */
  static betterFetchJson(
    url,
    method = "GET",
    body = {},
    extractData = true,
    extractDataAsArray = false,
    addCacheControlHeaders = false
  ) {
    const data = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": addCacheControlHeaders ? "no-store" : undefined
      },
      credentials: "same-origin"
    }

    let uri = url
    if (body && (method === "POST" || method === "PUT")) {
      data.body = JSON.stringify(body)
    } else if (body && method === "GET") {
      uri = `${uri}?${this.queryParams(body)}`
    }

    function handleResponse(response) {
      return response.json().then(json => {
        if (response.ok) {
          if (extractData) {
            if (extractDataAsArray) {
              return json.data
            } else {
              return json.data[0]
            }
          }
          return json
        } else {
          return Promise.reject({
            json: json,
            ok: response.ok,
            status: response.status,
            statusText: response.statusText
          })
        }
      })
    }

    return fetch(uri, data)
      .then(handleResponse)
      .catch(err => {
        if (err.json) {
          let ajaxErr = new AjaxError()
          ajaxErr.withErrorDetails(err.json)
          throw ajaxErr
        } else {
          log.error("Error fetching JSON data: ", err)
          throw err
        }
      })
  }

  static queryParams(params) {
    return Object.keys(params)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
      .join("&")
  }
}

export default Ajax