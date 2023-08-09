const fs = require('fs').promises;

// Asynchronous file read using promises
fs.readFile('sample.txt', 'utf8')
  .then(data => {
    console.log('Content from promise:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
console.log('Promise operation started');
