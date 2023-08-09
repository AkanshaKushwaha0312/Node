const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Make an HTTP GET request
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Response status code:', response.statusCode);
    console.log('Response body:', body);
  }
});
