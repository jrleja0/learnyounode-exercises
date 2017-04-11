function countNewLinesAsync(file) {
  var fs = require('fs'), content;
  return fs.readFile(file, function(error, data) {  // when the file has finished being read, callback will be fired.
    if (error){ console.log(error); }
    else { console.log(data.toString().split("\n").length-1); }
  });
}
countNewLinesAsync(process.argv[2]);
