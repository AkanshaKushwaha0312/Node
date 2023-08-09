const readline = require('readline-sync');
const crypto = require('crypto');

// Prompt user for password length
const length = readline.questionInt('Enter desired password length: ');

const password = generateRandomPassword(length);
console.log('Generated password:', password);

// Function to generate a random password
function generateRandomPassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}
