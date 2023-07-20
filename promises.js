const { log } = require("console");
const fs = require("fs");
const p = require("fs/promises");

fs.readFile("file.txt", "utf-8", (err, data) =>
{
    log("Reading file Without Promise:", data);
});

log("EOF");

function fileEnded(data)
{
    console.log("File has ended", data);
}

p.readFile("file1.txt", "utf-8")
    .then(fileEnded)
    .catch((err) =>
    {
        console.log(err);
    })
    .finally(() => console.log("always"));

log("EOF");
