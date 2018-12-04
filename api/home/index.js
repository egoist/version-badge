const marked = require('marked')
const axios = require('axios')
const { handleError } = require('../utils')

module.exports = handleError(async (req, res) => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/egoist/version-badge/master/README.md'
  )
  res.setHeader('content-type', 'text/html')
  res.end(`
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Version Badge</title>
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
