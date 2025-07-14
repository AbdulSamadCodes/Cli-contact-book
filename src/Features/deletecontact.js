const fs = require('fs');
const { parseData, printErrorMessage } = require('./utils/utils.js');

function deleteContactFromFile(name) {
  fs.readFile('contacts.json', 'utf-8', (error, data) => {
    if (error) {
      printErrorMessage('An error occurred');

      return;
    }

     const contactsData = JSON.parse(data);
     const contacts = contactsData.contacts; 

     const deletedContactIndex = contacts.findIndex((contact) => contact.name === name); 

     if(deletedContactIndex === -1) {
      console.log('Contact not found!!');

      return;
    } 

    contacts.splice(deletedContactIndex , 1);
    
    fs.writeFile('contacts.json', JSON.stringify(contactsData, null, 2), 'utf-8', (error) => {
         if (error) {
           printErrorMessage('Cannot delete the contact');
   
           return;
         }
   
         console.log('Contact deleted successfully!');
       })     
  })
}

function deleteContact() {
  const [ contactNameData ] = process.argv.slice(3,4);
  const [ contactName , contactPhone ] = parseData(contactNameData);  

  deleteContactFromFile(contactName);
}

module.exports = deleteContact;