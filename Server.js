let express =require('express')
let fs =require('fs')

form =fs.readFileSync('form.html','utf-8')

app = express()
app.get('/',(req,res)=>{
    // res.end("heyy")
    res.send(form)
})

app.post('/',(req,res)=>{
    res.send("This is html page ")
})

app.listen(2005,()=>console.log("srever is start"))