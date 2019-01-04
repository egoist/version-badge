const { parse } = require('url')
const axios = require('axios')
const { sendSVG, handleError } = require('../utils')

module.exports = handleError(async (req, res) => {
  const {
    query: { name, tag = 'latest' }
  } = parse(req.url, true)
  const { data } = await axios.get(`https://registry.npmjs.org/${name}`)
  sendSVG(res, `v${data['dist-tags'][tag]}`)
})
