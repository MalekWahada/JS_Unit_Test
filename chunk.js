const chunkArray = (arr, len) => {
    // // Init chunked arr
  const chunkedArr = [];
  // // Set index
  let i = 0;

  // // Loop while index is less than the array length
  while (i < arr.length) {
    // Slice out from the index to the index + the chunk length nd push on to the chunked array
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunk length
    i += len;
  }

  return chunkedArr;
}

module.exports = chunkArray;