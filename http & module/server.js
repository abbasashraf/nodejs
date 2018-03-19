const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{
        // 'Content-Type': 'text/plan'
        'Content-Type': 'text/html'
        
    });
    // res.end('hi guys isn abbas ali :)')
    res.end('<h1></h1>hi guys is abbas ali :)</h1>')
    
});


server.listen(3000, ()=>{
    console.log('Server is running on 3000')
})