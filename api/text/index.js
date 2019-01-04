const { parse } = require('url')
const { sendSVG, handleError, escape } = require('../utils')

module.exports = handleError(async (req, res) => {
  const {
    query: { text = '' }
  } = parse(req.url, true)
  sendSVG(res, escape(text))
})
