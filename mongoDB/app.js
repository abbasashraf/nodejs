// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectId } = require('mongodb');


// after version 3.0 we use client object not db
MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
    if (err) throw err

    // console.log(ObjectId())
    // console.log('CONNECTED')

    // const object = new ObjectId()

    const db = client.db('animals');

    // ========== CREATED DATA ===========
    // db.collection('mamals').insertOne({
    //     name: 'dog',
    //     legs: '4'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(err)
    //     }
    // })

    // console.log('INSERTED')



    // =========== FETCHING DATA ==============
    // db.collection('mamals').find().toArray((err, result) => {
    //     if (err) throw err;
    //     console.log(result)
    // })

    // ============ UPDATING ===============
    // db.collection('mamals').findOneAndUpdate({
    //     _id: new ObjectId('5abf721197df8823f4e7aac6')
    // }, {
    //         $set: {
    //             name: "updated"
    //         }
    //     })
    //     .then(
    //     (result) => {
    //         console.log(result)
    //     }
    //     ).catch(
    //     (err) => {
    //         console.log(err)

    //     })
    // console.log('UPDATED')

    // =============== DELETE ============

    // db.collection('mamals').deleteMany({ name: 'abbas'});
    // db.collection('mamals').deleteOne({ name: 'abbas'});
    // db.collection('mamals').deleteAndFind({ name: 'abbas'});

    db.collection('mamals').findOneAndDelete({
        _id: new ObjectId('5abf721197df8823f4e7aac6')
    }).then(result => {
        console.log(result)
    })


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