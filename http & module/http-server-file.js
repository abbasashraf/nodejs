const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {

    // console.log('req', req)
    console.log('req.method', req.method)

    if(req.url === '/'){
        fs.readFile('./global.html', 'UTF-8', (err, data)=>{
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data)
        })
    }
    else{
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('404 could not find your data')
    }
    

}).listen(3333, () => {

    console.log('server is running on 3333')

})


