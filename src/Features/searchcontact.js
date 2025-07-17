const fs = require('fs/promises');
const readline = require('readline');

function searchInFile(option , query) {
  
}

function searchContact() {
  const USER_PROMPT = `Press 'name' for searching by name or press 'phone' for searching by name):\n`;
  const OPTIONS = ['name' , 'phone'];

  const readlineInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  });

  readlineInterface.question(USER_PROMPT,
      (answer) => {
        if(!OPTIONS.includes(answer)) {
          console.log('Please select a valid option again');

          readlineInterface.close();

          /* prompt user recursively */
          searchContact();
        }

        if(answer === 'name') {
          readlineInterface.close();          
        }
          
        if(answer === "phone") {
          readlineInterface.close();          
        }
      }
    );  
}

module.exports = searchContact;