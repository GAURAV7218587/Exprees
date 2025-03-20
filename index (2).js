let http = require('http')
let express = require('express')
let fs = require('fs')

let About = fs.readFileSync('About.html','utf-8')

let form = fs.readFileSync('form.html','utf-8')


app = express()

app.get('/',(req,res)=>{
    res.end('Home Page')
    // res.send(form)
})
app.get('/about',(req,res)=>{
    res.end('About Page '+req.query.name + ' ' + req.query.city)
    // res.send(About)
})
app.post('/',(req,res)=>{
    // res.send(form)
    res.send('Home Page using POST method')
})



app.listen(4001,()=>console.log("server started using express"))

// let myser = http.createServer(app)

// myser.listen(4001,()=>{
//     console.log("server started")
// })