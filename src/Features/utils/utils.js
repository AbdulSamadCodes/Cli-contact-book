 const fs = require('fs');

function parseData(...data) {
  return data.map((query) => query.split('=')[1]);
}

function printErrorMessage(error) {
  console.log(`${error}!!!`);
}

function existsInFile({ name , phone }) {
  const contactsData = fs.readFileSync('contacts.json' , 'utf-8');  

  const contacts = JSON.parse(contactsData).contacts;

  return contacts.filter((contact) => contact.name === name || contact.phone === phone).
    length > 0;
}

module.exports = { parseData , printErrorMessage , existsInFile };