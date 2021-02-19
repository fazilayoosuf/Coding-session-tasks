var fs = require('fs');
var fetch=require('node-fetch')
var AnyFile =require('any-file');
const path = require('path');
const folderName = 'ppm_modules';
const admZip = require("adm-zip");



//read the dependency.json file
var content = fs.readFileSync(__dirname + '/dependencies.json', 'utf8');
var dependencyObj = JSON.parse(content);

function getRejistryFile(){
fetch("https://ppm-registry.s3.ap-south-1.amazonaws.com/registry.json")
    .then((response)=>response.json())
    .then(function(data){
        var configObj = data;
        const registryFiles = configObj.configs;
        downloadDependencies(registryFiles);
        createDir();
    });
  
  }
  getRejistryFile();
function downloadDependencies(registryFiles) {
for(let data in dependencyObj){

      var getDependency = registryFiles.find((registry) => {
            return registry.name == data && registry.version == dependencyObj[data];
        })
        if (getDependency) {
            installDependency(getDependency);
            return;
        }
}
}

function createDir() {
    var dir = `./${folderName}`;
    if (fs.existsSync(dir)) {
        console.log("Directory already exists");
        return;
    }
    fs.mkdir(path.join(__dirname, folderName), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });

}

function installDependency(dependency) {
    let fileName = dependency.name;
    const af = new AnyFile();
    let fromFile = dependency.path;
    let toFile = path.join(__dirname, `/${folderName}/${fileName}`);
     let zipFile=`${toFile}.zip`;
     var zip = new admZip(zipFile);

    if (fs.existsSync(toFile)) {
        console.log("File already exists");
        return;
    }

    
    });    
}
