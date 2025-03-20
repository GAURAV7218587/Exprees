let {MongoClient} = require('mongodb')
let url ="mongodb://localhost:27017/";
let client = new MongoClient(url)
let database = "codingwale"

async function dbConnect()
{
    await client.connect();
    console.log('connection Established');
    let db = client.db(database);
    let collection =db.collection('computers');
    return collection
    // let res = await collection.find({}).toArray();
    // console.log(res)
}
// dbConnect()
module.exports = dbConnect