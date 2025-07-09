function parseData(contactNameData , contactPhoneData) {
  return [ contactNameData.split('=')[1] , contactPhoneData.split('=')[1]];
}

function printErrorMessage(error) {
  console.log(`${error}!!!`);
}

module.exports = { parseData , printErrorMessage };