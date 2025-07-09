const fs = require('fs');
const { printErrorMessage } = require('./utils/utils.js');

function listContacts() {
  fs.readFile('contacts.json', 'utf-8', (error, data) => {
    if (error) {
      printErrorMessage('An error ocurred');
      
      return;
    }

    const contacts = JSON.parse(data).contacts;

    contacts.forEach(({ name, phone }, index) => {
      console.log(`${index + 1}. name:${name} - phone:${phone}`);
    })
  })
}

module.exports = listContacts;