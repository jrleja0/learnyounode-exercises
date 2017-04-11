function filterFileListByExt(filePath, ext) {
  var fs = require('fs'),
  path = require('path'),
  ext = "." + ext;
  fs.readdir(filePath, function(error, list) {
    if (error) { console.log(error); }
    else {
      //list.forEach(function(file){ console.log(file); });
      list.filter(function(file){
        if (path.extname(file) === ext)
          console.log(file);
      });
    }
  });
}
filterFileListByExt(process.argv[2], process.argv[3]);  // arguments: file path and extension
