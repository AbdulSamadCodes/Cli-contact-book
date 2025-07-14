const fs = require('fs');
const { parseData, printErrorMessage, performOperationInFile } = require('./utils/utils.js');

function deleteContactFromFile(contactName) {
  performOperationInFile(contactName, 'Cannot delete the contact', 'Deleted contact successfully',
    (contacts, contactName) => {
      const deletedContactIndex = contacts.findIndex((contact) => contact.name === contactName); 

      if(deletedContactIndex === -1) {
        console.log('Contact not found!!');

        return;
      } 

      contacts.splice(deletedContactIndex , 1);
    }
  )
}

function deleteContact() {
  const [contactNameData] = process.argv.slice(3, 4);
  const [contactName] = parseData(contactNameData);

  deleteContactFromFile(contactName);
}

module.exports = deleteContact;