const db = require('./db');

// Drop the existing 'todos' table if it exists
db.run('DROP TABLE IF EXISTS todos', (err) => {
  if (err) {
    console.error(err);
    db.close(); // Close the database connection in case of an error
  } else {
    // Create the 'todos' table
    db.run('CREATE TABLE todos (id INTEGER PRIMARY KEY, task TEXT)', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Table 'todos' dropped and recreated");
      }
      db.close(); // Close the database connection after creating
    });
  }
});
