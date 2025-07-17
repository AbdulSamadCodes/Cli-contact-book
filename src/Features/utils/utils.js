const fs = require('fs');

function parseData(...data) {
  return data.map((query) => query.split('=')[1]);
}

function printErrorMessage(error) {
  console.log(`${error}!!!`);
}

function existsInFile({ name, phone }) {
  const contactsData = fs.readFileSync('contacts.json', 'utf-8');

  const contacts = JSON.parse(contactsData).contacts;

  return contacts.filter((contact) => contact.name === name || contact.phone === phone).
    length > 0;
}

function performOperationInFile(contactData, errorMessage, sucessMessage, operation) {
  fs.readFile('contacts.json', 'utf-8', (error, data) => {
    if (error) {
      printErrorMessage('An error ocurred');

      return;
    }

    const contactsData = JSON.parse(data);
    const contacts = contactsData.contacts;

    const operationCode = operation(contacts , contactData);

    fs.writeFile('contacts.json', JSON.stringify(contactsData, null, 2), 'utf-8', (error) => {
      if (error) {
        printErrorMessage(errorMessage);

        return;
      }

      if(operationCode) return;

      console.log(sucessMessage);
    })
  })
}

module.exports = { parseData, existsInFile, performOperationInFile, printErrorMessage };