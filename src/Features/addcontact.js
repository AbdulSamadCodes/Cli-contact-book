const fs = require('fs');
const { parseData , existsInFile , performOperationInFile } = require('./utils/utils.js');

/* reading and writing contact data to file */
function addContactToFile(contactData) {   
  if(existsInFile(contactData)) {
    console.log('Contact name or phone already exits!!');

    return;
  };

  performOperationInFile(contactData , 'Cannot add the contact' , 'Added contact succesfully',
    (contacts,contactData) => contacts.push(contactData)
  );
}

function addContact() {
  const [ contactNameData , contactPhoneData ] = process.argv.slice(3,5);
  const [ contactName , contactPhone ] = parseData(contactNameData , contactPhoneData);

  addContactToFile({ name : contactName , phone : contactPhone });
}

module.exports = addContact;