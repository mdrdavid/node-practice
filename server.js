const http = require("http");

const hostname = "localhost"; // points at '127.0.0.1' which points directly to the computer
const port = 3000;

// create server

const server = http.createServer((req, res) => {
  console.log("Request has been made");
  res.statusCode = 200;
  //set header content type
//   res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");
  // write to the response
  res.write('<p>Hello My People</p>')
  res.write('<p>Hello My People Again</p>')
  // end the response 
  res.end();

});

server.listen(port,hostname, () => {
  console.log(`Listening to ${hostname}:${port}`);
});
