const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response to the client
  res.end('Hello, this is a basic HTTP server!\n');
});

// Specify the port to listen on
const port = 3000;

// Start the server and listen for incoming requests
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
