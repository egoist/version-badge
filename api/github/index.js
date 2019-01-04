const { parse } = require('url')
const axios = require('axios')
const { sendSVG, handleError } = require('../utils')

module.exports = handleError(async (req, res) => {
  const {
    query: {
      owner,
      repo,
      file = 'package.json',
      branch = 'master',
      field = 'version'
    }
  } = parse(req.url, true)
  const { data } = await axios.get(
    `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file}`
  )
  sendSVG(res, `v${data[field]}`)
})
