export function filterObjectsByValue(arr, searchValue, searchKey) {
  const filteredArr = arr.filter(object => {
    const objectValue = object[searchKey]

    if (objectValue === undefined) {
      return false
    }

    const stringValue = String(objectValue).toLowerCase();
    const searchString = String(searchValue).toLowerCase();

    return stringValue.includes(searchString);
  })

  return filteredArr
}