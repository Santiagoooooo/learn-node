const fs = require("fs");

fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else console.log(data);
  // Move the unlink operation inside the callback
  fs.unlink("./operations/data.txt", (err) => {
    if (err) console.log(err.message);
    else console.log("File deleted successfully");
  });
});
