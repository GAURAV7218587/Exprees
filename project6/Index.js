let express = require('express')
let book = require('./book.json')


let app = express()

app.get('/',(req,res)=>{
    res.send('This is Project6 Page')
})
app.get('/book',(req,res)=>{
    res.json(book)
})


app.listen(2060,(req,res)=>{console.log('server is started')})