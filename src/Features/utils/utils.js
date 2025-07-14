function parseData(...data) {
  return data.map((query) => query.split('=')[1]);
}

function printErrorMessage(error) {
  console.log(`${error}!!!`);
}

module.exports = { parseData , printErrorMessage };