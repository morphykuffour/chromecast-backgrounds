// file system
const Fs = require('fs');
const Axios= require('axios');
const Path =  require('path');

// Load json file
const jsonFile = Fs.readFileSync('./backgrounds.json', 'utf8');
const jsonData = JSON.parse(jsonFile);

// async function downloadImage(){
//       const url = jsonData[0].url;
//       const path = Path.resolve(__dirname, 'images', '1.jpg');
//       const writer = Fs.createWriteStream(path);

//       const response = await Axios({
//             url,
//             method: 'GET',
//             reponseType: 'stream'
//       })

//       response.data.pipe(writer)

//       return new Promise((resolve, reject) =>{
//             writer.on('finish', resolve)
//             writer.on('error', reject)
//       })
// }

// downloadImage();

// function downloadfiles(){
//     var len = jsonData.length;

//     for(let i = 0; i < len; i++){
//       download(jsonData[i].url);
//     }
// }

// downloadfiles();

// for(let i = 0; i < len; i++){
//   console.log(jsonData[i].url);
// }

// console.log(jsonData[0].author); 
// console.log(jsonData[1].author);
// console.log(jsonData[1].url);

