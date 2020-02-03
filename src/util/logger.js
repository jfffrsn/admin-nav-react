/**
 * Usage:
 *    import logger from '../util/logger'
 *    const log = logger('source:string')
 *    ...
 *    log.warn("I'm warning you!")
 *
 * Console output will be: (including whatever decoration the current browser gives to 'warn' level messages)
 *    source:string I'm warning you!
 *
 * Configuration:
 *    localStorage.logLevel = 'error' (or any key from logLevels as a string, defaults to 'warn')
 *    localStorage.logSourceFilter = 'comma,separated,substrings' (converted to regexp with commas replaced by | defaults to '.*')
 *
 * Notes:
 *    to remove an item from localStorage, you must use e.g. localStorage.clear('logSourceFilter')
 *
 * @format
 */

const logLevels = {
    silent: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    log: 4,
    trace: 5
  }
  
  const logger = source => {
    return {
      error(...message) {
        doMessage(source, "error", ...message)
      },
      warn(...message) {
        doMessage(source, "warn", ...message)
      },
      info(...message) {
        doMessage(source, "info", ...message)
      },
      debug(...message) {
        doMessage(source, "log", ...message)
      },
      log(...message) {
        doMessage(source, "log", ...message)
      },
      trace(...message) {
        doMessage(source, "trace", ...message)
      }
    }
  }
  
  const doMessage = (source, level, ...message) => {
    if (!window.localStorage) return
    const configLevelString = window.localStorage.logLevel || "warn" // default log level
    const configLevelInt = logLevels[configLevelString] || 2 // in case of mismatch, still warn!
  
    const levelInt = logLevels[level]
    if (!levelInt) return // passed-in log level doesn't match anything, so bail
    if (levelInt > configLevelInt) return // actual log level gating
  
    if (!source.match(makeSourceRegExp())) return // filter based on source
    console[level](source, ...message)
  }
  
  const makeSourceRegExp = () => {
    const sourceFilter = window.localStorage.logSourceFilter || ".*"
    return new RegExp(sourceFilter.replace(",", "|"), "i")
  }
  
  export default logger  