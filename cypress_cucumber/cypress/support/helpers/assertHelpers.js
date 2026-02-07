/**
 * Asserts that an array of values is sorted
 * @param {Array<number|string>} values - array to check
 * @param {"ascending"|"descending"} order - sort direction
 */
function assertSorted(values, order = "ascending") {
  if (!values || !Array.isArray(values)) {
    throw new Error("assertSorted: values must be an array");
  }

  const sorted = [...values].sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return order === "ascending" ? a - b : b - a;
    }
    // treat as strings
    return order === "ascending" ? a.localeCompare(b) : b.localeCompare(a);
  });

  expect(values, `values should be sorted ${order}`).to.deep.equal(sorted);
}

module.exports = { assertSorted };
