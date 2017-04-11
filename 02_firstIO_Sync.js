function countNewLinesSync(arr) {
  var fs = require('fs');
  return fs.readFileSync(arr[2]).toString().split("\n").length-1;
}
console.log(countNewLinesSync(process.argv));

// solution: read the file at the path provided by the command line (process.argv[2]),
// then convert the resulting Buffer object with toString(), then split at the new lines
// and find and return .length-1 of the resulting array. === Number of new lines.
