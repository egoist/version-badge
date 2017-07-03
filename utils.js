const measureWidth = require('./measure-width')

exports.sendSVG = (res, version) => {
  const str = `v${version}`
  res.type('svg')
  res.end(`<svg xmlns="http://www.w3.org/2000/svg" width="${measureWidth(str)}" height="10"><text y="9" font-size="12" fill="#2d2d2d" font-family="Helvetica">${str}</text></svg>
  `)
}

exports.handleError = fn => {
  return async (req, res) => {
    try {
      await fn(req, res)
    } catch (err) {
      if (err.response) {
        res.status(err.response.status).end(err.response.data)
      } else {
        res.status(500).end(err.message)
      }
    }
  }
}
