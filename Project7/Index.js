let express = require('express')
let fs = require('fs')
student = require('./students.json')

app = express()

app.get('/', (req, res) => {
    res.send("hii")
})

app.get('/app/students', (req, res) => {
    res.json(students)
})

app.get('/students',(req,res)=>{
    let html = `<table border = 1>
    ${student.map((s)=>{
        return`<tr>
        
        <th>${s.first_name}</th>


        
        
        </tr>`
    })}
    
    
    </table>`
    res.send(html)
})

app.use(express.urlencoded({extended:false}))


// app.post('/creates_stud',(req,res)=>{

//     let body = req.body
//     students.push(body)
//     fs.writeFile('students.json',JSON.stringify(students),(err,res)=>{})
//     res.send('adeed')
// })


app.post('/create_stud',(req,res)=>{
    let body = req.body
    students.push(body)
    fs.writeFile('students.json',JSON.stringify(students),(err,res)=>{})

    res.send('create stud succes')
})

app.delete('/del_stud/:id',(req,res)=>{

    let students = req.params.id
    let index = students.findIndex(stud=>(+stud.id)===(+students))

    if(index === -1){
        return res.status(404).JSON({message :'not found'})
    }
    students.splice(index,1)
})

app.listen(2070, () => { console.log("Server is start") })

