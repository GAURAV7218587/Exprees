// let dbConnect = require("./dbConnect");

// async function Update() {
//     let data = await dbConnect()
//     // let res = await data.updateOne({name:"schin"},{$set:{name:"sachinbhau"}}) 
//     let res = await data.updateMany[
//     {"name":"rahulbhau"},{$set:{"name":"rahul"}},
//     {"name":"rohanbhau"},{$set:{"name":"rohan"}},
//     {"name":"sachinbhau"},{$set:{"name":"sachin"}}
//     ]
//     console.log(res)   
// }
// Update()

let dbConnect = require("./dbConnect");

async function Update() {
    let data = await dbConnect();

    // Multiple updateMany() calls using Promise.all()
    let updates = [
        data.updateMany({"name": "rahulbhau"}, { $set: {"name": "rahul"}}),
        data.updateMany({"name": "rohanbhau"}, { $set: {"name": "rohan"}}),
        data.updateMany({"name": "sachinbhau"}, { $set: {"name": "sachin"}})
    ];

    let res = await Promise.all(updates); // Execute all updates in parallel
    console.log(res);
}

Update();
