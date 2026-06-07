// This module is all about the basics and theory of 
// Javascript that's why there is not much code associated.

// The most important thing in this module is 
// how javascript code executes and how it engine 
// runs the javascript code.

// For just an example, using http server example.
const http = require('http'); // Comes from node.js runtime

const server = http.createServer((req, res) => {
    res.end("Hello World!");
});

server.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
})