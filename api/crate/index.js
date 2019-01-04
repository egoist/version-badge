const { parse } = require('url')
const axios = require('axios')
const { sendSVG, handleError } = require('../utils')

module.exports = handleError(async (req, res) => {
  const {
    query: { name }
  } = parse(req.url, true)
  const { data } = await axios.get(`https://crates.io/api/v1/crates/${name}`)
  sendSVG(res, `v${data.crate.max_version}`)
})
