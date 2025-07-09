const fs = require('fs');
const { parseData } = require('./utils/utils.js');

/* reading and writing contact data to file */
function addContactToFile(contactData) {
  fs.readFile('contacts.json', 'utf-8', (error, data) => {
    if (error) {
      console.log('An error occurred');

      return;
    }

    const contactsData = JSON.parse(data);
    const contacts = contactsData.contacts;

    contacts.push(contactData);

    fs.writeFile('contacts.json', JSON.stringify(contactsData, null, 2), 'utf-8', (error) => {
      if (error) {
        console.log('Cannot add the contact');

        return;
      }

      console.log('Contact added successfully!');
    })

  })
}

function addContact() {
  const [ contactNameData , contactPhoneData ] = process.argv.slice(3,5);
  const [ contactName , contactPhone ] = parseData(contactNameData , contactPhoneData);

  addContactToFile({ name : contactName , phone : contactPhone });
}

module.exports = addContact;