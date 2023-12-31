const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/user");

// create express app
const app = express();

// mongo url
MONGOOSE_URL =
  "mongodb+srv://david:david@cluster0.bkgfjsx.mongodb.net/captive-portal-db";

// register view engine
app.set("view engine", "ejs"); // used to create templates

app.set("views", "my-views"); // find all views in this location

const hostname = "localhost"; // points at '127.0.0.1' which points directly to the computer

const port = 3000;

// middleware to log details to the console for every request
app.use((req, res, next) => {
  console.log("New request made");
  console.log("host", req.hostname);
  console.log("path", req.path);
  console.log("method", req.method);
  next(); // move to next function after this middleware
});

// use morgan logger
app.use(morgan("dev"));

// middleware and static files
app.use(express.static("public")); // send all files in the public folder as static files to frontend

app.get("/", (req, res) => {
  //   res.send("Hello World");
  // res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "Introduction to JavaScript",
      snippet: "JavaScript is a versatile programming language...",
    },
    {
      title: "Getting Started with React",
      snippet:
        "React is a popular JavaScript library for building user interfaces...",
    },
    {
      title: "CSS Flexbox Layout",
      snippet: "Flexbox is a powerful layout system that simplifies...",
    },
    {
      title: "Node.js Basics",
      snippet: "Node.js is a runtime environment for executing JavaScript...",
    },
    {
      title: "Responsive Web Design",
      snippet: "Responsive web design ensures that your website looks good...",
    },
  ];

  // Access individual blogs
  console.log(blogs[0]); // The first blog object
  console.log(blogs[1]); // The second blog object


  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
  console.log("request made");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});
app.get("/services", (req, res) => {
  console.log("request made");
  // res.sendFile("./views/services.html", { root: __dirname });
  res.render("services");
});
app.get("/contact", (req, res) => {
  console.log("request made");
  // res.sendFile("./views/contactus.html", { root: __dirname });
  res.render("contact");
});
app.get("/create-user", (req, res) => {
  console.log("request made");
  // res.sendFile("./views/contactus.html", { root: __dirname });
  res.render("create-user");
});
// redirects
app.get("/contact", (req, res) => {
  res.redirect("./contactus");
});

// mongoose and mongo sandbox routes
app.get("/add-user", (req, res) => {
  const user = new User({
    username: "david",
    email: "david@gmail.com",
    password: "12345",
  });
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// get all users
app.get("/all-users", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get single user
app.get("/single-user", (req, res) => {
  User.findById('64f04d961d681e0acfe08997')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//404 page
app.use((req, res) => {
  res.status(404).render("404");
});

// connect to mongo database
mongoose
  .connect(MONGOOSE_URL)
  .then(() => {
    // listen to http requests after a connection is established
    app.listen(port, () => {
      console.log(`Server listening to ${port}`);
      console.log("Database connected");
    });
  })
  .catch(() => {
    console.log("Database connection failed");
  });
  
// listen to http requests
// app.listen(port, () => {
//   console.log(`Server listening to ${port}`);
// });
