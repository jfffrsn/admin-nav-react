/** @format */

import logger from "./logger"
//import { i18n } from "../services/Messages/Messages"

const log = logger("AjaxError")

class AjaxError extends Error {
  constructor(message = "Bad response from server") {
    super(message)
    this.name = "AjaxError"
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AjaxError)
    }
  }

  withErrorDetails(responseJson) {
    const data = responseJson.data
    this.errors = []
    let errorList = this.errors

    if (data.length > 0) {
      if (data.length > 1)
        log.error(`Expected error count of 1, but found [${data.length}] error elements`, data)

      const errorDetail = data[0]
      this.withMessage(errorDetail.error)
      const formErrors = errorDetail.formErrors
      Object.keys(formErrors).forEach(key => {
        let errorJson = { field: key, messages: [] }
        // eslint-disable-next-line array-callback-return
        formErrors[key].map(formError => {
          errorJson.messages.push(this.resolveMessage(formError.msg, ...formError.args))
        })
        errorList.push(errorJson)
      })
      log.debug("Error Detail:", this.errors)
    } else {
      log.debug("Error did not have additional details, using primary message")
      this.message = responseJson.message
    }
  }

  withMessage(message, ...args) {
    this.message = this.resolveMessage(message, ...args)
  }

  resolveMessage(message, ...args) {
    const localizedMsg = null //i18n(message, ...args)
    if (localizedMsg) return localizedMsg
    else return message
  }
}

export default AjaxError
