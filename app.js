const express = require("express");

// create express app
const app = express();
const hostname = "localhost"; // points at '127.0.0.1' which points directly to the computer
const port = 3000;
app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  console.log("request made");
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/services", (req, res) => {
  console.log("request made");
  res.sendFile("./views/services.html", { root: __dirname });
});
app.get("/contactus", (req, res) => {
  console.log("request made");
  res.sendFile("./views/contactus.html", { root: __dirname });
});

// redirects
app.get("/contact", (req, res) => {
  res.redirect("./contactus");
});

//404 page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

// listen to http requests
app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
