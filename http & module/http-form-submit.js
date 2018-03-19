
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let body = '';
    if (req.method === 'GET') {
        // it must b write the head in res
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //read the file from ./http-form.html 
        fs.readFile('./http-form.html', 'UTF-8', (err, data) => {
            if (err) return err;
            // read the data from file and write the the data in res for display the html page/data
            res.write(data);
            // end the request other wise the request continuesly running
            res.end()
        })
        console.log(req.method)

    }
    else if (req.method === "POST") {
        // post the data from the form submit
        // when the data submit req.on trigger ana the data is recieve
        req.on('data', (data) => {
            // concat the data to the body which is initialize on line 6
            body += data;
        });

        req.on('end', () => {
            // when request end the data again write on the browser 
            res.writeHead(200, { 'Content-Type': 'text/html' })
            // the body on line 6 is write, which is data where submit the form
            res.write(body, () => {
                res.end();
            })
        })
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 could not find');

    }
}).listen(3000, () => {
    console.log("server running on 3000")
})