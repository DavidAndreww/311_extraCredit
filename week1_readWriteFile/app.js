const express = require("express");
const readLine = require("readline-sync");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3001;

// loads homepage when localhost:3001 is entered in URL
app.get("/", (req, res) => {
  res.sendFile("./htmlFiles/home.html", { root: __dirname });
});

// provides access to any file inside the htmlFiles folder
app.use(express.static("./htmlFiles"));

//stores answer to be used as file name
const fileName = readLine.question("What do you want to name your file?");
// stores answer to be used as new file content
const content = readLine.question(
  "What do you want the content of the file to say?"
);

// regex test to ensure no special characters or spaces are included in the file name
let validation = /[^a-zA-Z]/g;
let check = validation.test(fileName);

// if no special characters or spaces in file name, creates the new file and content
if (check === true) {
  console.log(
    "Name of file must contain only letters, and no spaces. Try again."
  );
  return false;
} else {
  fs.writeFile(`${fileName}.txt`, `${content}`, err => {
    if (err) throw err;
    console.log("File created successfully");
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
