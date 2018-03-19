const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('HOME')
})

app.get('/post/:id', (req, res) => {

    res.send(`
    <p>here is  ${req.params.id}</p>
    `)
})

app.get('/post/:id/category/:category_id', (req, res) => {

    res.send(`
    <p>here is  ${req.params.id}</p>
    
    <p>here is  ${req.params.category_id}</p>
    `)
})





app.listen(port)
console.log("server running", port)