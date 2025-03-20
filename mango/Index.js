const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'codingwale';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('computers');

  // the following code examples can be pasted here...

//   return 'done.';

  // let res = await collection.find({}).toArray();

  // let create = await collection.insertOne({name :"gauri" , name : 'vishya bhau'})

  let del = await collection.updateOne({name : 'sachin'},
    {$set:{name : 'gauri'}}
  )

  console.log(del)
}

main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
