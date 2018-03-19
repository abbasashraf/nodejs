const fs = require('fs');

// fs.mkdirSync("views");

if (!fs.exists("views")) {

    fs.mkdir("views", err => {
        fs.writeFile("./views/new.html", 'this is a new directory and data',err=>{
            if(err) return err;
            console.log("Directory and file saved")
        })
    });

}


