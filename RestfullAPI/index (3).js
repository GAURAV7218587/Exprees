// let express = require('express')

// let app = express()

// app.listen(1003,()=> console.log('Server started'))

let express = require('express')
let students = require('./students.json')

let app = express()

app.get('/',(req,res)=>{
    res.send('<h1>HOME PAGE</h1>')
})
//CSR
app.get('/app/students',(req,res)=>{
    res.json(students)
})
//SSR
app.get('/students',(req,res)=>{

    let html = `
    <h1>Helo students</h1>
    <table border=1>
    ${students.map((s)=>{
        // return s.first_name
        return `<tr><th>${s.first_name}</th></tr>`
    }).join("")}
    </table>
    `;
    res.send(html)

})

app.get('/students/:id',(req,res)=>{
    let id = req.params.id
    let s = students.find((stud)=> stud.id === (+id))
    res.send(s)
})

app.post('/create_stud',(req,res)=>{
    res.send('Create Student Record')
})


app.delete('/delete_stud',(req,res)=>{
    res.send('Create Student Record')
})

app.patch('/edit_stud',(req,res)=>{
    res.send('Create Student Record')
})


app.listen(1003,()=> console.log('Server started'))