const marked = require('marked')
const axios = require('axios')
const { handleError } = require('../utils')

module.exports = handleError(async (req, res) => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/egoist/version-badge/master/README.md'
  )
  res.setHeader('content-type', 'text/html')
  res.end(`
  <link rel="stylesheet" href="https://unpkg.com/github-markdown-css@2.10.0/github-markdown.css">
  <style>
    .markdown-body {
      max-width: 700px;
      margin: 0 auto;
    }
  </style>
  <div class="markdown-body">${marked(data)}</div>
  `)
})
