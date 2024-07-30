export default function hasValuesFromArray(setToCheck, arrayValues) {
  return arrayValues.every((num) => setToCheck.has(num));
}
