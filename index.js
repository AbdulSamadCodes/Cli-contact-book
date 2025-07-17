const addContact  = require('./src/Features/addcontact');
const listContacts  = require('./src/Features/listcontacts');
const updateContact = require('./src/Features/updatecontact');
const deleteContact = require('./src/Features/deletecontact');
const searchContact = require('./src/Features/searchcontact');

const { printErrorMessage } = require('./src/Features/utils/utils.js');

console.log(`
-----------------------------------------
         CLI CONTACT BOOK 📒
-----------------------------------------
`);

/* Options for user to select */
const options = Object.freeze({
  'ADD' : 'add',
  'UPDATE' : 'update',
  'DELETE' : 'delete',
  'SEARCH' : 'search',
  'LIST' : 'list'
});

const actions = Object.freeze({
  'add' : addContact,
  'list' : listContacts,
  'update' : updateContact,
  'delete' : deleteContact,
  'search' : searchContact
}); 

/* Read the user command and perform action */
function performAction() {
  const userOption = process.argv.slice(2,3)[0];  

  if(!userOption) {
    console.log('Please enter a command');

    return;
  }

  if(!Object.keys(actions).includes(userOption)) {
    printErrorMessage('No such command found');

    return;
  }

  actions[options[userOption.toUpperCase()]]();
} 

performAction();