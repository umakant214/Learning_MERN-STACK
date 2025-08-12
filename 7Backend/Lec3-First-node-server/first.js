console.log("welcome to js");

const fs = require("fs");
fs.writeFile("output.html", "writing file", (error) => {
  if (error) console.log("successfully");
  else console.log("fail");
});
