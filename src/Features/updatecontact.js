const fs = require('fs');
const { parseData, printErrorMessage } = require('./utils/utils.js');

function updateContactInFile({ name , phone }) {
  fs.readFile('contacts.json' , 'utf-8' , (error , data) => {
    if(error) {
      printErrorMessage('An error occurred');

      return;
    }
    
    const contactsData = JSON.parse(data);
    const contacts = contactsData.contacts;

    const updatedContactIndex = contacts.findIndex((contact) => contact.name === name);

    if(updatedContactIndex === -1) {
      console.log('Contact not found!!');

      return;
    }
   
    contacts.splice(updatedContactIndex,1,{name : name , phone : phone});

    fs.writeFile('contacts.json', JSON.stringify(contactsData, null, 2), 'utf-8', (error) => {
         if (error) {
           printErrorMessage('Cannot update the contact');
   
           return;
         }
   
         console.log('Contact updated successfully!');
       }) 
  })
}

function updateContact() {
  const [ contactNameData , contactPhoneData ] = process.argv.slice(3,5);
  const [ contactName , contactPhone ] = parseData(contactNameData , contactPhoneData);      

  updateContactInFile({ name : contactName , phone: contactPhone });
}

module.exports = updateContact;