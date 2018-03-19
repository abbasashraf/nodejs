const fs = require('fs');

fs.writeFile('data.html', `\n hello this file has just been created \n\n` , 'utf-8',
(err)=>{
    if (err) return err;
    console.log("the filse has been saved")
});

fs.appendFile('data.html', '\n extra data append to the file hello this file has just been created', 'utf-8',
(err)=>{
    if (err) return err;
    console.log("the filse has been saved")
});