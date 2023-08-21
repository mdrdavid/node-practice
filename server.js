const http = require("http");

const hostname = "localhost"; // points at '127.0.0.1' which points directly to the computer
const port = 3000;

// create server

const server = http.createServer((req, res) => {
  console.log("Request has been made");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port,hostname, () => {
  console.log(`Listening to ${hostname}:${port}`);
});
