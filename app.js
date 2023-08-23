const express = require("express");

// create express app
const app = express();
const hostname = "localhost"; // points at '127.0.0.1' which points directly to the computer
const port = 3000;
app.get("/", (req, res) => {
  // console.log('request made')
  res.send("Hello World");
});

// listen to http requests
app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
