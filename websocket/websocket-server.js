const webSocketServere = require('ws').Server;
const WSS = new webSocketServere({ port: 3000 });

WSS.on('connection', (ws) => {

    ws.on('message', (message) => {
        if (message === 'close') {
            ws.close();
        }else{
            WSS.clients.forEach((client) => {
                client.send(message);
            })
        }
       
        console.log(message)
    })

    console.log("we are connected")

})

console.log('server')


