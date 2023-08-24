const express = require("express");

// create express app
const app = express();

// register view engine
app.set('view engine', 'ejs') // used to create templates

app.set('views', 'my-views') // find all views in this location

const hostname = "localhost"; // points at '127.0.0.1' which points directly to the computer
const port = 3000;
app.get("/", (req, res) => {
  //   res.send("Hello World");
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render('index')
});

app.get("/about", (req, res) => {
  console.log("request made");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render('about')

});
app.get("/services", (req, res) => {
  console.log("request made");
  // res.sendFile("./views/services.html", { root: __dirname });
  res.render('services')


});
app.get("/contact", (req, res) => {
  console.log("request made");
  // res.sendFile("./views/contactus.html", { root: __dirname });
  res.render('contact')
});

// redirects
app.get("/contact", (req, res) => {
  res.redirect("./contactus");
});

//404 page
app.use((req, res) => {
  res.status(404).render('404');
});

// listen to http requests
app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
