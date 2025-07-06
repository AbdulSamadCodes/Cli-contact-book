const fs = require('fs');

function listContacts() {
  fs.readFile('contacts.json', 'utf-8', (error, data) => {
    if (error) {
      console.log('An error occurred');

      return;
    }

    const contacts = JSON.parse(data).contacts;

    contacts.forEach(({name , phone}) => console.log(`name=${name} , phone=${phone}`));
  })
}

module.exports = listContacts;