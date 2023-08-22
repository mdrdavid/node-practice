const http = require("http");
const fs = require("fs");

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
  // res.write('<p>Hello My People</p>')
  // res.write('<p>Hello My People Again</p>')

  //basic routing
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/services":
      path += "services.html";
      res.statusCode = 200;
      break;
    case "/contactus":
      path += "contactus.html";
      res.statusCode = 200;
      break;
      case "/contact":
      // path += "contactus.html";
      res.statusCode = 301;
      res.setHeader('Location', '/contactus') // redirect to contact us
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file to the browser
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // write to the response
      res.write(data);

      // end the response
      res.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Listening to ${hostname}:${port}`);
});
