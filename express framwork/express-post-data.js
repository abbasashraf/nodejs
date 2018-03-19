const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/assets', express.static(__dirname + '/public'))

app.use((req, res, next) => {

    console.log('middleware')
    next();
})


app.post('/post', (req, res) => {

    // res.send()
    console.log(req.body)
    console.log(`name ${req.body.email}`)
    console.log(`name ${req.body.password}`)
})



app.listen(port)

console.log("server running", port)