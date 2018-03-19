const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((req, serverRes) => {

    if (req.method === 'GET' && req.url === '/posts') {

        https.get(url, (httpRes) => {

            httpRes.on('data', data => {

                httpRes.setEncoding('utf8');

                // console.log(data)

                serverRes.write(data)

            });
            // when request is over 
            httpRes.on('end', () => {

                serverRes.end();

                console.log("its over")
            })
        });
    }
    else {
        serverRes.writeHead(404, { 'Content-Type': 'text/plain' });
        serverRes.end('404 ERROr, could not find')
    }

}).listen(3333, () => {
    console.log('server is running on 3333')

})