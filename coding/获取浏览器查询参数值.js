function getQuery(search, key) {
  const query = {}
  if (search) {
    const searchArr = search.split('?')[1].split('&')
    searchArr.forEach(item => {
      const [key, val] = item.split('=')
      query[key] = val
    })
  }
  if (key) {
    return query[key]
  }
  return query
}

console.log(getQuery('?number=122&name=xioameng', 'name'))