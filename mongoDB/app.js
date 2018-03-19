const MongoClient = require('mongodb').MongoClient

// after version 3.0 we use client object not db
MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
    if (err) throw err

    const db = client.db('animals');
    db.collection('mamals').insertOne({
        name: 'dog',
        legs: '4'
    }, (err, result) => {
        if (err) {
            return console.log(err)
        }
    })

    console.log('INSERTED')


})



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:3000/animals', { useMongoClient:S true });
// mongoose.connection
//     .once('open', () => {
//         console.log('CONNECTED');
//     })
//     .on('error', (err) => {
//         console.log(`could not connect`, err)
//     })