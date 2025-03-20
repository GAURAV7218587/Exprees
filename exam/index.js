let express = require('express')
let fs = require('fs')
let student = require('./stud.json')

let app = express()

app.get('/',(req,res)=>{
    res.send(student)
})

app.get('/student/:id',(req,res)=>{
    let id = parseInt(req.params.id)

    let stud = student.find((s)=> s.id === id)

    res.send(stud)
})

app.post('/create_stud',(req,res)=>{
    let body = req.body

    student.push(body)

    fs.writeFileSync('stud.json',JSON.stringify(student))
})

app.delete('/del/:id',(req,res)=>{
    // let body = req.body
    let id = parseInt(req.params.id)

    let stud = student.findIndex((s)=> s.id === id)

    if(stud === -1){
        return res.status(400).json({message: 'user not found'})
    }

    student.splice(stud ,1)

    fs.writeFileSync('stud.json',JSON.stringify(student))
})

app.patch('/up/:id' , (req,res)=>{

    let id = parseInt(req.params.id)
    let body = req.body

    let stud = student.find((s)=> s.id === id)

    if(stud === -1)
    {
        return res.status(400).json({message:'user not found'})
    }
    Object.assign(stud , body)

    fs.writeFileSync('stud.json',JSON.stringify(student))
})

app.listen(2000,(req,res)=>console.log('server started'))