const addContact  = require('./src/Features/addcontact');

console.log('---------- CLI Contact Book ----------\n')

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
}); 

/* Read the user command and perform action */
function performAction() {
  const userOption = process.argv.slice(2,3)[0];  

  if(!userOption) {
    console.warn('Please enter the command');

    return;
  }

  actions[options[userOption.toUpperCase()]]();
} 

performAction();
