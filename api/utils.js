const measureWidth = require('./measure-width')

exports.sendSVG = (res, text) => {
  res.setHeader('content-type', 'image/svg+xml')
  res.end(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${measureWidth(
    text
  )}" height="10"><text y="9" font-size="12" fill="#2d2d2d" font-family="Helvetica">${text}</text></svg>
  `)
}

exports.handleError = fn => {
  return async (req, res) => {
    try {
      await fn(req, res)
    } catch (err) {
      console.error(err)
      if (err.response) {
        res.statusCode = err.response.status
        res.end(err.response.data)
      } else {
        res.statusCode = 500
        res.end(err.response.data)
      }
    }
  }
}
