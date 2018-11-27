const path = require('path');
const fs = require('fs');

let chirpPath = path.join(__dirname, '../chirps.json');

fs.readFile(chirpPath, (err, data) => {
    if(err) console.log(err);

    console.log(JSON.parse(data))
});

