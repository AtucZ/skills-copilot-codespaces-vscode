// Create web server
// Create a web server that listens on port 8080 and logs the following message: "Server running at http://localhost:8080/".
// Create a route that responds to a GET request to /comments and sends the text "Comments page" to the client.
// Create a route that responds to a GET request to /form and sends the text "Form page" to the client.
// Create a route that responds to a POST request to /form and sends the text "Form posted" to the client.

// Import the express module
var express = require('express');

// Create an express application
var app = express();

// Create a route that responds to a GET request to /comments
app.get('/comments', function(req, res) {
  res.send('Comments page');
});

// Create a route that responds to a GET request to /form
app.get('/form', function(req, res) {
  res.send('Form page');
});

// Create a route that responds to a POST request to /form
app.post('/form', function(req, res) {
  res.send('Form posted');
});

// Start the server
app.listen(8080, function() {
  console.log('Server running at http://localhost:8080/');
});
// Run the server by running the following command in the terminal:
// node comments.js
// Now open your web browser and navigate to http://localhost:8080/. You should see the message "Comments page" displayed on the page.
// Navigate to http://localhost:8080/form. You should see the message "Form page" displayed on the page.
// You can test the POST request by using a tool like Postman to send a POST request to http://localhost:8080/form. You should see the message "Form posted" displayed on the page.

// Path: comments.js
// Create a web server
// Create a web server that listens on port 8080 and logs the following message: "Server running at http://localhost:8080/".
// Create a route that responds to a GET request to /comments and sends the text "Comments page" to the client.
// Create a route that responds to a GET request to /form and sends the text "Form page" to the client.
// Create a route that responds to a POST request to /form and sends the text "Form posted" to the client.

// Import the express module
var express = require