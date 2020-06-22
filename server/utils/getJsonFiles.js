const fs = require('fs')
const path = require('path');

function getJsonFiles(jsonPath){
  let jsonFiles = [];
  function findJsonFile(filepath){
      let files = fs.readdirSync(filepath);
      files.forEach(function (item) {
          let fPath = path.resolve(filepath,item);
          let stat = fs.statSync(fPath);
          if(stat.isDirectory() === true) {
              findJsonFile(fPath);
          }
          if (stat.isFile() === true) { 
            jsonFiles.push(fPath);
          }
      });
  }
  findJsonFile(jsonPath);
  
  return jsonFiles;
}

module.exports = getJsonFiles;
