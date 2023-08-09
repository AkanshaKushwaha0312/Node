const fs = require('fs');

// Callback function
function readFileCallback(err, data) {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('Content from callback:', data);
  }
}

// Asynchronous file read using a callback
fs.readFile('sample.txt', 'utf8', readFileCallback);
console.log('Callback operation started');
