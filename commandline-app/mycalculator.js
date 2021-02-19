var fs = require('fs'); 
var path = require('path');
var argument=process.argv;

var folderPath =argument[2];
var writeFileName = argument[3].concat('-stats');
var totalFiles=[];
readDirectory(folderPath);

function readDirectory(dirname){
    fs.readdir(dirname,function (err,filesName) { 
        if (err) {
          return err
        }
        if(!filesName.length){
          console.log("folder is empty")
        }
        filesName.forEach(function(file){
          var statsObj = fs.statSync(path.join(dirname,file));
            if(statsObj.isDirectory()){
                readDirectory(path.join(dirname,file +'/'));
            }
            else{
                totalFiles.push(file);
            }
        })
        createfile(totalFiles);
        });
    }


function createfile(files){
    
    var sortedFiles = files.sort(function (first, second) {
        return first.length - second.length;
      });
    
      const fileObj = {
        totalNumberFiles: files.length,
        sortedFiles: sortedFiles[0],
        largestFile: sortedFiles[sortedFiles.length - 1],
      };
    
    const stringifyFileObj = JSON.stringify(fileObj);

    fs.writeFile(writeFileName, stringifyFileObj, function (err) {
        if (err) 
        throw err;
        
        readFile()
      });

}

function readFile(){
    fs.readFile(writeFileName,'utf8', function(err,data) {
        if (err) {
            return err;
        }
        console.log(data);     
    });
         
    
}
