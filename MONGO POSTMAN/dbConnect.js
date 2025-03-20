// MUCD

// let Mongoclient = require('mongodb').Mongoclient
let {MongoClient} = require('mongodb');
let url = "mongodb://127.0.0.1:27017";
let client = new MongoClient(url)
let database= "college";

async function dbConnect()
{
    await client.connect();
    console.log('Connection Established');
    let db = client.db(database)
    let collection = db.collection('students')
    return collection
    // let res = await collection.find({}).toArray();
    // console.log(res)

}

// dbConnect()
module.exports = dbConnect