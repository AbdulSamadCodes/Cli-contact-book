const fs = require('fs');
const { parseData, printErrorMessage, performOperationInFile } = require('./utils/utils.js');

function updateContactInFile(contactData) {
  
  performOperationInFile(contactData , 'Cannot update the contact' , 'Updated contact successfully!' , 
    (contacts,contactData) => {
       const updatedContactIndex = contacts.findIndex((contact) => contact.name === contactData.name);

       if(updatedContactIndex === -1) {
          console.log('Contact not found!!');
 
        return;
      }
   
      contacts.splice(updatedContactIndex,1,{name : contactData.name , phone : contactData.phone});
    }
  );
}

function updateContact() {
  const [ contactNameData , contactPhoneData ] = process.argv.slice(3,5);
  const [ contactName , contactPhone ] = parseData(contactNameData , contactPhoneData);      

  updateContactInFile({ name : contactName , phone: contactPhone });
}

module.exports = updateContact;