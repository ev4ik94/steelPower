let fileSystem = require("fs");
let path = "./gulp/tasks/";
let arrayPath = fileSystem.readdirSync(path).map(a=> path + a);
module.exports = arrayPath;
// console.log(arrayPath);
