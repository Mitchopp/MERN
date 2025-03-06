const fs = require('fs');

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
    
        console.log('Directory Created');
    })
} else {
    console.log('This directory already exists');
}


if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
    
        console.log('Directory Removed');
    })
} else {
    console.log('This directory does not exist');
}
