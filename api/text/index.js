const { parse } = require('url')
const { sendSVG, handleError } = require('../utils')

module.exports = handleError(async (req, res) => {
  const {
    query: { text }
  } = parse(req.url, true)
  sendSVG(res, text)
})
