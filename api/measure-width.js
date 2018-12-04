const PDFDocument = require('pdfkit')
const cache = require('lru-cache')({
  max: 128 * 1024 * 1024,
  length: src => src.length
})

const doc = new PDFDocument({ size: 'A4', layout: 'landscape' })
doc.font('Helvetica')
doc.fontSize(12)

module.exports = str => {
  let width = cache.get(str)
  if (width) {
    return width
  }

  width = doc.widthOfString(str)
  cache.set(str, width)
  return width
}
