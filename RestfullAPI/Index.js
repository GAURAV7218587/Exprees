let express = require('express')
let fs = require('fs')
let students = require('./students.json')

app = express()

app.get('/', (req, res) => {
    res.send("<h1>This is app page</h1>")
})
app.get('/app/students', (req, res) => {
    res.json(students)
    console.log(students)
})
app.get('/students', (req, res) => {

    let html = `
    <table border=1>
    ${students.map((s) => {
        return `
        <tr>
        <th>${s.first_name}</th>
        <th>${s.last_name}</th>
        <th>${s.email}</th>
        <th>${s.gender}</th>
        </tr>`
    }).join("")}
    </table>
    `;
    res.send(html)
    // console.log(students)
})


app.get('/students/:id', (req, res) => {
    let id = req.params.id
    let s = students.find((stud) => stud.id === (+id))

    res.send(s)
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.post('/create_stud', (req, res) => {
    let body = req.body
    students.push(body)
    fs.writeFile('students.json', JSON.stringify(students), (err, res) => {

    })

    res.send('Create Student Record')
})

app.delete('/delete_stud/:id', (req, res) => {
    // res.send('Create Student Record')
    let studentId = req.params.id;

    let index = students.findIndex(stud => (+stud.id) === (+studentId));

    students.splice(index, 1);

    fs.writeFile('students.json', JSON.stringify(students), (err, res) => {

    })
    res.send('delete Student Record')

})

        app.patch('/edit_stud/:id',(req,res)=>{
            let id = req.params.id
            let body = req.body
            let Student = students.find((stud)=>stud.id ===(+id))
            // console.log(id)
            Object.assign(Student,body)
            fs.writeFile('students.json',JSON.stringify(students, null ,2),(err,res)=>{})


        })





app.listen(2007, (req, res) => console.log("server start"))
