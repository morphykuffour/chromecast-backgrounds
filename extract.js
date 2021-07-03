// file system
const Fs = require('fs');

// Load json file
const jsonFile = Fs.readFileSync('./backgrounds.json', 'utf8');
const jsonData = JSON.parse(jsonFile);

var len = jsonData.length;

for (let i = 0; i < len; i++) {
    console.log(jsonData[i].url);
}

// console.log(jsonData[0].author); 
// console.log(jsonData[1].author);
// console.log(jsonData[1].url);
