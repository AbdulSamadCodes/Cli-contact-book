const fs = require('fs');
const readline = require('readline');
const { printErrorMessage , performOperationInFile } = require('./utils/utils.js');

function searchInFile(option , query, closeCallback) {
  fs.readFile('contacts.json' , 'utf-8' , (error,data) => {
      if(error) {
        printErrorMessage('Cannot search the contact');
        closeCallback();
          
         return;
      }

      const contacts = JSON.parse(data).contacts;

      const searchedContact = contacts.find((contact) => contact[option] === query);

      if(!searchedContact) {
        printErrorMessage('Contact does not exists');
        
        closeCallback()
        return;
      }

      console.log('\n🔍 Search Result:\n');

      console.log(
        `name : ${searchedContact['name']}
phone : ${searchedContact['phone']}`
);

      closeCallback();
  });
}

function searchContact() {
const USER_PROMPT = `
📘 Choose an option:
🧑 name   → Search by name
📞 phone  → Search by phone
❌ exit   → Exit the app

➡️  Your choice: `;

  const OPTIONS = ['name' , 'phone', 'exit'];
  
  const readlineInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  });
  
  readlineInterface.question(USER_PROMPT,
    (option) => {

      if(option === OPTIONS.at(-1)) {
        readlineInterface.close();

        return;
      }

      if(!OPTIONS.includes(option)) {
        console.log(`You didn't choose a valid option`);
        readlineInterface.close();

        return;
      }
        
        readlineInterface.question(`Enter ${option}:\n` , (query) => { 
           searchInFile(option,query,() => readlineInterface.close()); 
        })      
      }
    );  
}

module.exports = searchContact;