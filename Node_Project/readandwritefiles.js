const fs = require('fs');

// Path to the source file to read
const sourceFilePath = 'source.txt';

// Path to the destination file to write
const destinationFilePath = 'modified.txt';

// Read the source file
fs.readFile(sourceFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the source file:', err);
    return;
  }

  // Modify the contents (for example, converting to uppercase)
  const modifiedData = data.toUpperCase();

  // Write the modified contents to the destination file
  fs.writeFile(destinationFilePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the destination file:', err);
      return;
    }

    console.log('File modified and written successfully.');
  });
});
