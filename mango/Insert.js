let dbConnect = require('./dbConnect')

async function Insert(){

let data = await dbConnect()
// let res = await data.insertOne({"dept":"ART","age":'22'})
let res = await data.insertMany(
    [
        {"name":"vishal","age":22},
        {"name":"ravi","age":21},
        {"name":"raju","age":25}
    ]
)

console.log(res)
}
Insert()