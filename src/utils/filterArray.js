const filterEmptyValueInArray = (arr) => {
  let result = arr.filter((item) => {
    return item && item.trim();
  });
  return result;
}

export { filterEmptyValueInArray }