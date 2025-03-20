let express = require('express');

let app = express();

// app.get("/",(req,res)=>{
//     res.send("HEllo");
// })

app.patch("/edit/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id);
})

app.listen(1000,()=>{
    console.log("Server is started");
})