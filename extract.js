// file system
const Fs = require('fs');
const Axios = require('axios');
const Path = require('path');

// Load json file
const jsonFile = Fs.readFileSync('./backgrounds.json', 'utf8');
const jsonData = JSON.parse(jsonFile);

// function downloadfiles(){
//     var len = jsonData.length;

//     for(let i = 0; i < len; i++){
//       download(jsonData[i].url);
//     }
// }

// downloadfiles();

for (let i = 0; i < len; i++) {
    var len = jsonData.length;
    console.log(jsonData[i].url);
}

// console.log(jsonData[0].author); 
// console.log(jsonData[1].author);
// console.log(jsonData[1].url);

