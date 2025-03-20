let express = require('express')
let fs = require('fs')
let Demo = require('./Demo.json')



let app = express()


app.get('/',(req,res)=>{
    res.send('This is app page')
});

app.get('/app/Demo', (req, res) => {
    res.json(Demo)
    // console.log(Demo)
})
app.get('/Demo', (req, res) => {

    let html = `
    <table border=1>
    ${Demo.map((f) => {
        return `
        <tr>
        <th>${f.Title}</th>
        <th>${f.Director}</th>
        <th>${f.Cast}</th>
        <th>${f.Genre}</th>
        
        
        </tr>`
    }).join("")}
    </table>
    `;
    res.send(html)
    // console.log(Demo)
})

app.get('/Demo/:id', (req, res) => {
    let id = req.params.id
    let f = Demo.find((pic) => pic. id=== (+id))

    res.send(f)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/create_Demo', (req, res) => {
    let body = req.body

    // console.log(body)
    Demo.push(body)
    fs.writeFile('Demo.json', JSON.stringify(Demo),(err, res) => {

    })

    res.send('Create Demo Record')
})
app.delete('/delete_Demo/:id', (req, res) => {
    
    let Id = req.params.id;

    let index = Demo.findIndex(pic => (+pic.id) === (+Id));

    Demo.splice(index, 1);

    fs.writeFile('Demo.json', JSON.stringify(Demo), (err, res) => {

    })
    res.send('delete Demo Record')

})

app.patch('/edit_Demo/:id',(req,res)=>{
    let id = req.params.id
    let body = req.body
    let Demos = Demo.find((stud)=>stud.id ===(+id))
    console.log(id)
    Object.assign(Demos,body)
    fs.writeFileSync('Demo.json',JSON.stringify(Demo ,null,2),(err,res)=>{})


})





app.listen(2010,()=>{console.log("server is started")})