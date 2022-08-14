function formatDate (timestamp) {

  const date = new Date (timestamp)

  const d = date.getDate()

  const m = date.getMonth() + 1

  const y = date.getFullYear()

  return `${m}/${d}/${y}`

};



module.exports = formatDate