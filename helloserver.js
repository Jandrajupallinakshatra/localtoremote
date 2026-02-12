// Import the http module
const http = require('http');

// Define the hostname and port for the server to listen on
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Create the server instance
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP Status: 200 (OK) and Content Type: text/plain
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response body
  res.end('Hello Server!\n');
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  // Log a message to the console once the server is running
  console.log(`Server running at http://${hostname}:${port}/`);
});
