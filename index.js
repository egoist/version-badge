const app = require('express')()
const axios = require('axios')
const { sendSVG, handleError } = require('./utils')

app.get('/', (req, res) => {
  res.end('https://github.com/egoist/version-badge')
})

app.get('/npm/:name.svg', handleError(async (req, res) => {
  const { name } = req.params
  const { tag = 'latest' } = req.query
  const { data } = await axios.get(`https://registry.npmjs.org/${name}`)
  sendSVG(res, data['dist-tags'][tag])
}))

app.get('/gh/:owner/:repo.svg', handleError(async (req, res) => {
  const { owner, repo } = req.params
  const { file = 'package.json', branch = 'master', field = 'version' } = req.query
  const { data } = await axios.get(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file}`)
  sendSVG(res, data[field])
}))

app.listen(3000)
console.log('> Open http://localhost:3000')
