const express = require('express');
const app = express();



const port = process.env.PORT || 3000

app.use('/css', express.static(__dirname + '/public' ) )

app.use((req, res, next) => {

    console.log('middleware')
    next();
})


app.get('/', (req, res) => {

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <h1>hello</h1>
        <p>this is the paragraph</p>
        <p>from middlware of css</p>
    </body>
    </html>`)

})



app.listen(port)

console.log("server running", port)