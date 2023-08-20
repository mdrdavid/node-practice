const fs = require("fs");

// reading files
fs.readFile("./docs/blog1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log("my data", data.toString());
});

// writing files
fs.writeFile("./docs/blog1.txt", "Hello World", () => {
  console.log("File has been written");
});
fs.writeFile("./docs/blog2.txt", "Hello my people", () => {
  console.log("File has been written");
});
// directories

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Directory has been created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files
