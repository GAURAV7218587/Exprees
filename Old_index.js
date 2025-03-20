let http = require('http')
let express = require('express')
let fs = require('fs')

let About = fs.readFileSync('About.html','utf-8')

app = express()

app.get('/',(req,res)=>{
    // res.end('Home Page')
    res.send('Home Page')
})
app.get('/about',(req,res)=>{
    res.end('About Page '+req.query.name + ' ' + req.query.city)
    // res.send(About)
})

let myser = http.createServer(app)

myser.listen(4001,()=>{
    console.log("server started")
})