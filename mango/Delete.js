let dbConnect = require('./dbConnect')
 async function Delete() {
    
    let data = await dbConnect()
    // let res = await data.deleteOne({"name":"rhaul"})
    let res = await data.deleteMany(
        
        // {"name":"vishal","age":22},
            {"name":"ravi","age":21}
        
    );
    console.log(res)
 }
 Delete()