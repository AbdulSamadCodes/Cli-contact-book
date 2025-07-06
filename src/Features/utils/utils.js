function parseData(contactNameData , contactPhoneData) {
  return [ contactNameData.split('=')[1] , contactPhoneData.split('=')[1]];
}

module.exports = { parseData };