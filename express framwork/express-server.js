const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/api', (req, res) => {
    // res.send('<h1>api hello world</h1>')
    res.json({
        name: "abbas"
    })
})




app.listen(port)
console.log("server running", port)