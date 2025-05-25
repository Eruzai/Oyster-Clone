const buildQuery = (searchParamsObject) => {
  let query = "type_id=4"
  for (let key in searchParamsObject) {
    if (searchParamsObject[key]) {
      query = query.concat(`&&${key}=${searchParamsObject[key]}`)
    }
  }
  return query;
}

export default buildQuery