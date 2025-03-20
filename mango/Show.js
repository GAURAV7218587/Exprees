// const { Db } = require('mongodb')
let dbConnect = require('./dbConnect')

async function show()
{
    let data = await dbConnect()
    // let computers = await data.find().toArray()
    let computers = await data.find({"name":"rhaul"}).toArray()
    console.log(computers)
}
show()